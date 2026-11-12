---
title: "Bank imports and reconciling"
description: "Import your bank's CSV, OFX or QFX file, post what's new, and reconcile each account against its statement."
sidebar:
  order: 2
---

## Import a bank file

**Import Bank File** reads your bank's **CSV**, **OFX** or **QFX** export (for a PDF statement, download your bank's CSV, OFX or QFX export instead).

1. Choose the account the file is for and the file.
2. For a CSV, match its columns (date, description, amount) once; OpenLedgerApp remembers the layout for next time.
3. Review the lines. Bank rows are **evidence**: nothing enters your books until you post a line to the ledger, choosing what it was for. Rows you've already imported (or that repeat within the file) are marked as duplicates and skipped, so importing an overlapping file doesn't double anything.

## Reconcile

**Reconcile** compares your books with a bank or card statement. Nothing in your books changes; you're only confirming what matches.

1. **Start a new statement**: the account, the statement's end date and its ending balance.
2. Tick each transaction that appears on the statement. The difference between your books and the statement is shown as you go.
3. When the difference is zero, finish. The statement is saved, and the matched transactions are marked reconciled.

Reconcile every bank, cash and credit card account each month: [closing a month](/ledger/reports/reports-and-closing/#closing-a-month) checks that you did.
