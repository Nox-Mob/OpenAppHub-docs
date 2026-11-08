---
title: "Backups and exports"
description: "Download a signed full backup, restore it into a new organization, and export transactions."
sidebar:
  order: 3
---

**Settings → Exports** (web app). Backups and exports aren't in the desktop app yet.

## Full backup

Admins can download a **full backup**: one file with everything in the organization.

- The file is **signed**. If anything in it is changed, the app detects it and refuses to restore it.
- It records the app version it came from.

Download one at least monthly and after closing the year. Keep it somewhere safe, away from your computer.

## Restore a backup

**Restore a backup**, choose the **backup file**, then type the organization name to confirm.

- A restore always creates a **new organization**. It never overwrites your existing books.
- The app checks the signature and every record, and re-checks every transaction against the bookkeeping rules.
- If anything fails, the partial organization is removed. You never end up with half a restore.
- When you choose the file, the app shows whether it was **Signed by this install** and is unchanged. Backups from another install can be restored too, and are labelled with that install's fingerprint.

## Exports

- **Transactions:** export all transactions to CSV or Excel.
- **Reports:** export from the Reports page. See [Reports](/ledger/reports/reports/).

CSV and Excel files are protected against spreadsheet formula tricks.

:::note
Exports are read-only copies for spreadsheets and your accountant. Only a **full backup** can be restored.
:::
