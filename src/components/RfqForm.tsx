'use client';

import React, { useId, useState } from 'react';

const fields = [
  { id: 'name', label: 'Full name', placeholder: 'Your name', type: 'text', autoComplete: 'name', required: true },
  { id: 'company', label: 'Company', placeholder: 'Company name', type: 'text', autoComplete: 'organization', required: false },
  { id: 'country', label: 'Country', placeholder: 'Country', type: 'text', autoComplete: 'country-name', required: false },
  { id: 'email', label: 'Business email', placeholder: 'you@company.com', type: 'email', autoComplete: 'email', required: true },
  { id: 'phone', label: 'WhatsApp / phone', placeholder: '+971…', type: 'tel', autoComplete: 'tel', required: false },
  { id: 'brands', label: 'Brands required', placeholder: 'Hyundai, Kia, Toyota…', type: 'text', autoComplete: 'off', required: false },
];

const inputClass =
  'mt-3 w-full border-b border-charcoal/25 bg-transparent pb-2 text-[15px] text-charcoal placeholder:text-charcoal/40 focus:border-bark focus:outline-none transition-colors';

const labelClass =
  'block text-[10px] font-semibold uppercase tracking-[0.16em] text-espresso';

const MAX_FILE_BYTES = 20 * 1024 * 1024;

type Status =
  | { state: 'idle' }
  | { state: 'sending' }
  | { state: 'sent' }
  | { state: 'error'; message: string };

export default function RfqForm({ cardClass }: { cardClass: string }) {
  /* Ids stay unique when both variants of the section render on one page. */
  const prefix = useId();
  const [fileName, setFileName] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>({ state: 'idle' });

  const sending = status.state === 'sending';

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending) return;

    const form = event.currentTarget;
    const data = new FormData(form);

    const file = data.get('rfq-file');
    if (file instanceof File && file.size > MAX_FILE_BYTES) {
      setStatus({ state: 'error', message: 'That file is over 20 MB. Please send a smaller list.' });
      return;
    }

    setStatus({ state: 'sending' });

    try {
      const response = await fetch('/api/rfq', { method: 'POST', body: data });
      const result = await response.json().catch(() => ({ ok: false }));

      if (!response.ok || !result.ok) {
        setStatus({
          state: 'error',
          message: result.error ?? 'Something went wrong. Please try again.',
        });
        return;
      }

      form.reset();
      setFileName(null);
      setStatus({ state: 'sent' });
    } catch {
      setStatus({
        state: 'error',
        message: 'We could not reach the server. Please check your connection and try again.',
      });
    }
  }

  return (
    <form onSubmit={onSubmit} className={`${cardClass} p-8 sm:p-9 lg:p-10`}>
      <div className="grid grid-cols-1 gap-x-12 gap-y-6 sm:grid-cols-2">
        {fields.map((field) => (
          <div key={field.id}>
            <label htmlFor={`${prefix}-${field.id}`} className={labelClass}>
              {field.label}
              {field.required && <span aria-hidden="true"> *</span>}
            </label>
            <input
              id={`${prefix}-${field.id}`}
              name={field.id}
              type={field.type}
              required={field.required}
              autoComplete={field.autoComplete}
              placeholder={field.placeholder}
              className={inputClass}
            />
          </div>
        ))}
      </div>

      {/* Upload — the whole dashed box is the file picker's label */}
      <label
        htmlFor={`${prefix}-file`}
        className="mt-8 flex cursor-pointer items-center gap-5 border border-dashed border-charcoal/35 p-4 transition-colors hover:border-bark"
      >
        <span
          aria-hidden="true"
          className="flex h-10 w-10 shrink-0 items-center justify-center border border-charcoal/25 text-bark"
        >
          ↑︎
        </span>
        <span>
          <span className="block text-[13px] font-bold uppercase tracking-[0.12em] text-charcoal">
            {fileName ?? 'Upload your RFQ'}
          </span>
          <span className="mt-1.5 block text-[11px] uppercase tracking-[0.08em] text-charcoal/60">
            {fileName ? 'Choose a different file' : 'XLS, XLSX, CSV or PDF · up to 20 MB'}
          </span>
        </span>
        <input
          id={`${prefix}-file`}
          name="rfq-file"
          type="file"
          accept=".xls,.xlsx,.csv,.pdf"
          onChange={(event) => setFileName(event.target.files?.[0]?.name ?? null)}
          className="sr-only"
        />
      </label>

      <div className="mt-6">
        <label htmlFor={`${prefix}-notes`} className={labelClass}>
          Additional notes
        </label>
        <textarea
          id={`${prefix}-notes`}
          name="notes"
          rows={2}
          placeholder="Quantities, required timing or commercial requirements"
          className={`${inputClass} resize-y`}
        />
      </div>

      <button
        type="submit"
        disabled={sending}
        className="mt-6 flex w-full items-center justify-between bg-bark px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition duration-300 hover:bg-cocoa disabled:cursor-not-allowed disabled:opacity-60"
      >
        {sending ? 'Sending…' : 'Submit RFQ'}
        <span aria-hidden="true">↗︎</span>
      </button>

      {/* Announced so a screen reader hears the result without moving focus */}
      <p aria-live="polite" className="sr-only">
        {status.state === 'sent' ? 'RFQ sent.' : status.state === 'error' ? status.message : ''}
      </p>

      {status.state === 'sent' && (
        <p className="mt-4 text-[13px] leading-relaxed text-bark">
          Thank you — your RFQ is with our sales team. We will come back with availability,
          pricing and lead times.
        </p>
      )}

      {status.state === 'error' && (
        <p className="mt-4 text-[13px] leading-relaxed text-red-700">{status.message}</p>
      )}
    </form>
  );
}
