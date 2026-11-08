---
title: "Your data and exporting it"
description: "Who owns your data, and how to get it out of each app."
sidebar:
  order: 1
---

Your organization's data belongs to your organization. You can take it with you at any time.

## How to export from each app

| App | What you can export | Where |
|---|---|---|
| OpenCharterApp | Members (CSV, with your chosen columns), payments for bookkeeping (CSV), each report (CSV) | Members, Settings → Payments, Reports. See [Exporting members](/charter/members/finding-and-exporting/) |
| OpenBoardApp | Each kind of record (JSON or CSV), and a full board-record ZIP with minutes, votes, attendance and packets per meeting | Settings → Data export. See [Exports](/board/records/exports/) |
| OpenLedgerApp | Reports and transactions (CSV, Excel, PDF), and a full signed backup you can restore | Reports, Transactions, Settings → Exports. See [Backups and exports](/ledger/admin/backups-and-exports/) |

Exports are recorded in each app's audit log or history, so your organization can see who exported what and when.

## Spreadsheet safety

Every CSV export protects against "formula injection": text that starts like a spreadsheet formula is written so Excel and Google Sheets show it as text instead of running it.

## Backups versus exports

- An **export** is a readable copy for a spreadsheet or for your records.
- A **backup** can be loaded back into the app. Only OpenLedgerApp has restorable backups today. In OpenCharterApp and OpenBoardApp, the hosted service backs up the database; if you self-host, back up your database yourself.
