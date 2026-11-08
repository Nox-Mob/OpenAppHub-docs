---
title: "Exports"
description: "Export tables as JSON or CSV, and download the full board record as a ZIP."
sidebar:
  order: 5
---

**Settings → Data export** (owners and administrators).

## Table exports

Download each kind of record (meetings, agenda items, attendance, motions, minutes, action items and so on) as **JSON** or **CSV**. CSV files are safe to open in Excel and Google Sheets: text that looks like a formula is written as text.

## Full board record (ZIP)

**Full board record (zip)** downloads your official record for a period:

1. Choose **From** and to dates. The default is **year to date**; a period can be up to a year (366 days).
2. Download.

The ZIP has one folder per meeting that took place (in progress, completed or archived), containing:

- the **approved minutes**, or a note saying there are none
- **vote records**
- **attendance**
- the **board packet** and supporting documents **as they were on the meeting day**

:::caution
If a packet or document can't be downloaded while the ZIP is built, it's skipped without a warning. Check important folders after downloading.
:::

## Exports aren't backups

These are readable copies of your records for your files. They can't be loaded back into the app. A tested restore routine is planned; until then, if you self-host, back up your database.
