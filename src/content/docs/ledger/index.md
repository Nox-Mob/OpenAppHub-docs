---
title: "OpenLedgerApp"
description: "Double-entry bookkeeping for very small businesses and nonprofits."
---

OpenLedgerApp keeps the books for very small businesses and nonprofits. It uses real double-entry accounting underneath, but you can choose plain wording so you never need to know what a debit is.

:::caution[Pre-release software]
OpenLedgerApp is version 0.1.1. Try it with sample data before trusting it with your real books, and keep your own backups.
:::

## What makes it safe

- **Every transaction balances.** The app checks it, and the database checks it again.
- **Bank imports never change your books by themselves.** Imported rows wait until you post them.
- **Posted records are never edited.** To fix a mistake you void the transaction and enter it again, so the history stays complete.
- **Closed periods stay closed.** Reopening needs a written reason, saved in the history.
- **Every change is recorded** in a history nobody can edit.

## What it does

- Transactions, templates and recurring entries
- Bank and card file imports (CSV, OFX, QFX)
- Statement checks (reconciliation)
- Budgets for the whole organization, a fund or a project
- Funds and pledges for nonprofits
- Reports, a board package PDF, and exports to Excel, CSV and PDF
- Month-end and year-end close
- Signed backups you can restore

## Three ways to use it

| | Web, hosted | Web, self-hosted | Desktop app |
|---|---|---|---|
| People | Several, with roles | Several, with roles | One person |
| Where your books live | Our servers | Your server | A file on your computer |
| Internet needed | Yes | Yes | No |
| Cost | Subscription | Free | Free |

See [Choosing an edition](/ledger/start/editions/).

## Start here

1. [Choosing an edition](/ledger/start/editions/)
2. [Setting up your organization](/ledger/start/setting-up/)
3. [Accounts](/ledger/everyday/accounts/)
4. [Recording transactions](/ledger/everyday/transactions/)
5. [Your weekly, monthly and yearly routine](/ledger/start/routine/)
