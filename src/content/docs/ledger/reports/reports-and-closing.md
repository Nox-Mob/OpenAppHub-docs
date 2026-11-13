---
title: "Reports and closing the books"
description: "The reports, sending one to a board meeting, closing a month, locking and reopening the books."
sidebar:
  order: 1
---

## Reports

**Reports** has the standard reports, named in [the wording your organization chose](/ledger/everyday/transactions/#the-words-the-app-uses):

| Report                                                                | Shows                                                     |
| --------------------------------------------------------------------- | --------------------------------------------------------- |
| **Income report** (Profit & Loss / Statement of Activities)           | Money in and out for a period, and the bottom line        |
| **Position report** (Balance Sheet / Statement of Financial Position) | What you own, what you owe and what's left over on a date |
| **Fund report**                                                       | Each fund's activity and balance                          |
| **Totals check** (Trial Balance)                                      | Every account's total, which must balance                 |
| **Every transaction** (General Ledger)                                | Each account's transactions in order                      |

Download a report as a spreadsheet, or **Board package (PDF)** for the board.

## Add to a board package

If your organization uses OpenBoardApp, **Add to a board package** next to **Board package (PDF)** sends the report as a PDF to an upcoming meeting. It goes into that meeting's documents and its board packet.

## Closing a month

Under **Settings** > **Close**, **Close a month**: choose the month and **Check month**. Before closing, OpenLedgerApp checks that every bank, cash and credit card account was [reconciled](/ledger/everyday/import-and-reconcile/#reconcile) against its statement, and lists any that weren't (you can **Close anyway**). Closing locks the books through the month's last day: nobody can add or change transactions on or before it.

**Lock the books** sets the lock date directly. Only admins and treasurers can lock or unlock.

**Reopen books** lets people change a closed period again (for example to fix a mistake an auditor found). A reason is required and is saved in **History** with your name. **Keep closed through** reopens only the later months; leave it empty to reopen everything.

## Closing a fiscal year

Under **Settings** > **Close**, **Close a fiscal year** ends a year's books. Choose **Fiscal year ends** (the last day of the year; your fiscal year's first month is an organization setting) and the account that receives the year's result: **Net assets account** for nonprofits, **Retained earnings account** otherwise. OpenLedgerApp shows a preview of the year and the amount; **Close this fiscal year** then:

1. records **one closing transaction** that moves the year's net result (nonprofits) or profit into that account, so income and expense accounts start the new year at zero, and
2. **locks the books** through the year's last day.

It can't be undone, and the closing transaction is part of the history. **Closed years** lists every year closed. Only admins and treasurers can close a year. Closing a year that's already closed does nothing.
