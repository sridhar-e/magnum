import { Readable } from 'node:stream';
import { google } from 'googleapis';

/* Service-account access to the RFQ spreadsheet and the Drive folder that
   holds uploaded part-number lists. Server-only — never import from a
   client component. */

const SCOPES = [
  'https://www.googleapis.com/auth/spreadsheets',
  'https://www.googleapis.com/auth/drive',
];

function required(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing ${name} in the environment`);
  return value;
}

function auth() {
  return new google.auth.JWT({
    email: required('GOOGLE_SHEETS_CLIENT_EMAIL'),
    /* The key is stored on one line, so the newlines arrive escaped. */
    key: required('GOOGLE_SHEETS_PRIVATE_KEY').split('\\n').join('\n'),
    scopes: SCOPES,
  });
}

/* Sheets treats a leading =, +, - or @ as the start of a formula, so anything
   coming from the form gets quoted into a plain string first. */
function asText(value: string): string {
  return /^[=+\-@]/.test(value) ? `'${value}` : value;
}

/* Sortable Dubai local time, since the desk reading the sheet works there. */
function timestamp(): string {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Dubai',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).formatToParts(new Date());

  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? '';
  return `${get('year')}-${get('month')}-${get('day')} ${get('hour')}:${get('minute')}:${get('second')}`;
}

export type RfqSubmission = {
  name: string;
  company: string;
  country: string;
  email: string;
  phone: string;
  brands: string;
  notes: string;
};

export type UploadedFile = {
  name: string;
  webViewLink: string | null;
};

/* Drops the file in the configured folder and hands back its name and link.
   `supportsAllDrives` lets the same call work for a shared drive. */
async function uploadRfqFile(file: File, stamp: string): Promise<UploadedFile> {
  const folderId = required('GOOGLE_DRIVE_FOLDER_ID');
  const drive = google.drive({ version: 'v3', auth: auth() });

  const buffer = Buffer.from(await file.arrayBuffer());
  /* Prefixing the stored name keeps uploads with the same filename apart. */
  const storedName = `${stamp.replace(/[: ]/g, '-')}_${file.name}`;

  const created = await drive.files.create({
    requestBody: { name: storedName, parents: [folderId] },
    media: {
      mimeType: file.type || 'application/octet-stream',
      body: Readable.from(buffer),
    },
    fields: 'id, name, webViewLink',
    supportsAllDrives: true,
  });

  return {
    name: created.data.name ?? storedName,
    webViewLink: created.data.webViewLink ?? null,
  };
}

/* Appends one row: A timestamp, B–G the form fields, H the uploaded file,
   I the notes. */
async function appendRfqRow(
  submission: RfqSubmission,
  file: UploadedFile | null,
  stamp: string
): Promise<void> {
  const spreadsheetId = required('GOOGLE_SHEET_ID');
  const tab = required('GOOGLE_SHEET_TAB_NAME');
  const sheets = google.sheets({ version: 'v4', auth: auth() });

  /* Shows the filename, but clicks through to the file in Drive. */
  const fileCell = !file
    ? ''
    : file.webViewLink
      ? `=HYPERLINK("${file.webViewLink}","${file.name.replace(/"/g, '""')}")`
      : asText(file.name);

  const row = [
    stamp,
    asText(submission.name),
    asText(submission.company),
    asText(submission.country),
    asText(submission.email),
    asText(submission.phone),
    asText(submission.brands),
    fileCell,
    asText(submission.notes),
  ];

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${tab}!A:I`,
    valueInputOption: 'USER_ENTERED',
    insertDataOption: 'INSERT_ROWS',
    requestBody: { values: [row] },
  });
}

/* One submission: the file lands in Drive first, since the row records it.
   Both share a single timestamp, so the row and the stored filename agree. */
export async function submitRfq(
  submission: RfqSubmission,
  file: File | null
): Promise<void> {
  const stamp = timestamp();
  const uploaded = file ? await uploadRfqFile(file, stamp) : null;
  await appendRfqRow(submission, uploaded, stamp);
}
