---
title: "Dues from OpenCharterApp"
description: "Membership dues people pay in OpenCharterApp, offered in OpenLedgerApp as drafts you review, then post or skip. Nothing is booked until you say so."
sidebar:
  order: 5
---

If your organization uses OpenCharterApp for memberships, the dues people pay there can come to OpenLedgerApp, so nobody types them in again. **Nothing is booked until someone reviews it and selects Post.**

## How it works

Each day's payments become **drafts** on the OpenLedgerApp home page, under **Dues from OpenCharterApp to review**:

- **Card payments** (through Stripe): one draft per day, into your Stripe balance account, **net of the card fee**. The fee goes to your card fees account.
- **Checks and cash** recorded in OpenCharterApp: one draft per day, into Undeposited funds, until you take them to the bank.
- **Refunds**: a draft of their own, which reverses the income. Card processors keep their fee on a refund, so the fee isn't reversed.

Each draft credits your **new member dues** and **renewal dues** income accounts (they can be the same account). Select **Post** to book it, or **Skip** to leave it out. Each payment is booked once: after it's posted or skipped, it isn't offered again.

|                          |                                                                                                                                                                                                                                   |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **The fee**              | An estimate from your organization's rate (2.9% + 30¢ per card payment unless you change it). Before posting, you can type the exact fee from your Stripe report into the draft.                                                  |
| **Chapters**             | You choose whether only payments to the organization itself come in, or every chapter's too. With chapters, each chapter's dues are on their own line, with the chapter's name in the memo.                                       |
| **Payouts and deposits** | When Stripe pays out to your bank, or you deposit checks, record a transfer from Stripe balance or Undeposited funds to the bank as usual (or match it when you [import your bank file](/ledger/everyday/import-and-reconcile/)). |
| **Closed months**        | A draft dated in a month whose books are closed can't be posted. Reopen the month, or skip the draft.                                                                                                                             |

## Switch it on

The owner and OpenLedgerApp admins do this, in **Settings → OpenCharterApp payments**:

1. Tick **Offer OpenCharterApp payments for review**.
2. Under **Whose payments**, choose the organization only, or every chapter's too.
3. **Starting with payments received on**: the first day to bring in. Anything earlier isn't offered, so dues you've already entered by hand aren't booked twice. Set this to the day after the last dues you entered.
4. Choose the accounts: where card payments go (usually _Stripe balance_), where checks and cash go (usually _Undeposited funds_), card fees (an expense account), and new member and renewal dues (income accounts). Don't have one? [Add it in Accounts](/ledger/everyday/accounts/) first.
5. Check the **estimated card fee** rate, then **Save**.

Anyone who can see the books sees the drafts. People who can make changes post or skip them.

## Undo

- **A skipped draft**: in **Settings → OpenCharterApp payments**, under **What was done**, select **Bring back**.
- **A posted draft**: void its transaction (see [Transactions](/ledger/everyday/transactions/)), then bring it back the same way.

## Good to know

- Only payments in your books' currency come in.
- OpenCharterApp records how much of a payment was refunded, not when, so a refund is offered on the day OpenLedgerApp first sees it. A later, second refund on the same payment comes in for the rest.
- On the desktop edition, which doesn't connect to OpenCharterApp, record dues as usual.
