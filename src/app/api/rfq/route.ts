import { NextResponse } from 'next/server';
import { submitRfq, type RfqSubmission } from '@/lib/google';

/* googleapis needs the Node runtime, and every submission is a write. */
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const MAX_FILE_BYTES = 20 * 1024 * 1024;

const ALLOWED_EXTENSIONS = ['.xls', '.xlsx', '.csv', '.pdf'];

function text(form: FormData, key: string): string {
  const value = form.get(key);
  return typeof value === 'string' ? value.trim() : '';
}

export async function POST(request: Request) {
  let form: FormData;

  try {
    form = await request.formData();
  } catch {
    return NextResponse.json(
      { ok: false, error: 'That submission could not be read. Please try again.' },
      { status: 400 }
    );
  }

  const submission: RfqSubmission = {
    name: text(form, 'name'),
    company: text(form, 'company'),
    country: text(form, 'country'),
    email: text(form, 'email'),
    phone: text(form, 'phone'),
    brands: text(form, 'brands'),
    notes: text(form, 'notes'),
  };

  if (!submission.name || !submission.email) {
    return NextResponse.json(
      { ok: false, error: 'Please add your name and business email.' },
      { status: 400 }
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(submission.email)) {
    return NextResponse.json(
      { ok: false, error: 'That email address does not look right.' },
      { status: 400 }
    );
  }

  const upload = form.get('rfq-file');
  const file = upload instanceof File && upload.size > 0 ? upload : null;

  if (file) {
    if (file.size > MAX_FILE_BYTES) {
      return NextResponse.json(
        { ok: false, error: 'That file is over 20 MB. Please send a smaller list.' },
        { status: 400 }
      );
    }

    const extension = file.name.slice(file.name.lastIndexOf('.')).toLowerCase();
    if (!ALLOWED_EXTENSIONS.includes(extension)) {
      return NextResponse.json(
        { ok: false, error: 'Please upload an XLS, XLSX, CSV or PDF file.' },
        { status: 400 }
      );
    }
  }

  try {
    await submitRfq(submission, file);
  } catch (error) {
    console.error('RFQ submission failed', error);
    return NextResponse.json(
      { ok: false, error: 'We could not record that RFQ. Please email trade@magnumautofz.com.' },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
