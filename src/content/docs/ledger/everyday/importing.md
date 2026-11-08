---
title: "Importing bank files"
description: "Import CSV, OFX, QFX or PDF statements. Imported rows wait until you post them."
sidebar:
  order: 4
---

Download a file from your bank's website and import it. Imported rows are **evidence only**: they never change your books until you post them.

:::note
Bank file import is in the web app. It isn't in the desktop app yet.
:::

## Supported files

| Format | Notes |
|---|---|
| **OFX / QFX** | Best choice if your bank offers it ("Quicken" or "Money" download). Duplicate rows are recognised automatically. |
| **CSV** | Works with any bank. You tell the app which column is which. |
| **PDF statement** | The app reads the statement for you. Limits: 10 per day and 50 per month per organization, files up to 10 MB and 40 pages. Self-hosted installs need this feature switched on. |

## Import a file

1. **Import → Import Bank File.**
2. Choose the **account** the file belongs to and the **file**.
3. For CSV, match the columns:
   - **Date column** and **Date format** (MM/DD/YYYY, DD/MM/YYYY, or **Detect automatically**)
   - **Description column**
   - either one **Amount column**, or separate **Money in** and **Money out** columns
   - **Amounts are in**: how your bank's file shows money in and money out
4. For statements, check the **beginning balance** and **ending balance** match your statement.
5. Import. Your CSV column choices are saved for next time.

Rows already imported are marked **Already imported** and skipped.

## Post the rows

**Imported rows** lists rows waiting. For each one, choose the other account (for example **Expenses: Supplies**) and post it. Posting creates a normal transaction linked to the bank row.

A bank row can only be linked to a transaction with the same amount and account.

## Imported files

**Imported files** lists everything you've imported.
