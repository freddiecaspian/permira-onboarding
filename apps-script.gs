// ============================================
// GOOGLE APPS SCRIPT - "Before I start" (Permira onboarding questions)
// Paste this into Apps Script (script.google.com), bind to a Google Sheet,
// then deploy as Web App (Execute as: Me, Access: Anyone).
// Copy the resulting /exec URL into SCRIPT_URL in index.html.
// ============================================

const HEADERS = [
  'Timestamp',
  'Name',
  'Role',
  'Shape vs fixed programme',
  'Audience / internal AI-native',
  'Success by August',
  'Own vs lead',
  'Rough vs finished + format',
  'Channel + when',
  'Idea to live + sign-off',
  'People to know',
  'Team fit + org',
  'Working pattern',
  'Working hours / out-of-hours',
  'Prep before start'
];

const KEYS = [
  'timestamp',
  'name',
  'role',
  'shape',
  'audience',
  'success',
  'own',
  'deliver',
  'channel',
  'flow',
  'people',
  'team',
  'pattern',
  'hours',
  'prep'
];

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }

  const data = JSON.parse(e.postData.contents);
  const row = KEYS.map(key => data[key] !== undefined ? data[key] : '');
  sheet.appendRow(row);

  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok' }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok', service: 'permira-onboarding' }))
    .setMimeType(ContentService.MimeType.JSON);
}
