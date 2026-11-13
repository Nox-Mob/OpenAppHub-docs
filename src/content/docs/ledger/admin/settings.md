---
title: "Settings"
description: "Everything under Settings: wording and the tutorial, accounts, closing the books, history, diagnostics, exports and backups, and email."
sidebar:
  order: 2
---

**Settings** has a section menu down the left. What each section is for, and who can use it:

| Section                     | For                                                                                                         | Who                                     |
| --------------------------- | ----------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| **Your preferences**        | The wording OpenLedgerApp uses, and the tutorial                                                            | Everyone (wording is changed by admins) |
| **Accounts**                | Your chart of accounts: add from a list, archive, make active                                               | Admins and treasurers                   |
| **Close**                   | Close a month, lock or reopen the books, close a fiscal year                                                | Admins and treasurers                   |
| **OpenCharterApp payments** | Dues from OpenCharterApp: whether they're offered, whose, from when, into which accounts, the card fee rate | Admins change; everyone sees            |
| **Users & roles**           | Who uses the books and their role; invitations; ownership                                                   | Admins                                  |
| **Security**                | Two-step sign-in, deleting your account                                                                     | Everyone, for themselves                |
| **Exports and backup**      | Spreadsheets of your transactions; full backup and restore                                                  | Backups and restores: admins            |
| **History**                 | Who changed what                                                                                            | Admins                                  |
| **Diagnostics**             | Health checks for the books and this installation                                                           | Admins and treasurers                   |
| **Email**                   | Your notifications and email choices; reminders                                                             | Everyone                                |

## Your preferences

**Wording** chooses how OpenLedgerApp names things, from **Simplest** (_Money In_, _Money You Have_) through **Simple** to **Double-entry** (_Revenue_, _Assets_), for each term separately with its own slider. It applies to everyone in the organization, including the reports' names. The full list is in [Transactions](/ledger/everyday/transactions/#the-words-the-app-uses).

The **tutorial** shows short tips the first time you use each part of OpenLedgerApp; switch it off or on again here.

## Accounts

The full list of accounts, including archived ones. Add accounts from a list of common ones, or archive an account you no longer use (it tells you how many transaction lines use it; they stay intact). See [Accounts](/ledger/everyday/accounts/).

## Close

Close a month, lock the books on a date, reopen them with a reason, and close a fiscal year. See [Reports and closing](/ledger/reports/reports-and-closing/#closing-a-month).

## OpenCharterApp payments

Whether dues people pay in OpenCharterApp are offered here as drafts to review, and how they're booked. See [Dues from OpenCharterApp](/ledger/everyday/charter-payments/).

## Users & roles

See [Users, security and exports](/ledger/admin/users-security-exports/#roles). Hosted on OpenAppHub, people and invitations are managed in OpenAppHub; roles in OpenLedgerApp can be set here or there.

## Exports and backup

- **Transactions**: download your transactions as a spreadsheet (CSV), for your accountant or another program.
- **Full backup** (admins): one file with everything in your books. The file is signed by this installation, so a restore can check it hasn't been changed.
- **Restore a backup** (admins): restore a backup file (up to 25 MB) **into a new organization**; enter the new organization's name to confirm. Restoring never overwrites the books you have. If a file can't be restored (it was changed, or isn't an OpenLedgerApp backup), it says so and nothing is created.

## History

Every change to your books, newest first: **When**, who, **What**, and the values **Before** and **After**. Filter by **All types**, **Money (postings and voids)**, **Setup and settings**, or **System (imports, backups, members)**. History can't be changed or deleted.

## Diagnostics

**Book health** runs checks on your books and lists any **Problem** it finds, with what it means. **This installation** shows the version and setup of the server you're on. You can copy a report of the results for support; it contains no names or amounts.

## Email

Your own notifications (under the bell) and email choices, and your reminders. Hosted, these are on your OpenAppHub account page, which this section links to ([Notifications](/hub/accounts/notifications/)). Self-hosted, they're here, with the email server settings ([Self-hosting](/ledger/help/self-hosting/)).
