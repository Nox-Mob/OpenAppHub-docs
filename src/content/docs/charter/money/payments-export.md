---
title: "Exporting payments for bookkeeping"
description: "Download paid and refunded payments as a CSV for your bookkeeper or OpenLedgerApp."
sidebar:
  order: 4
---

**Settings → Payments → Export payments.**

1. Pick a **date range**.
2. At a national, tick **Include every organization below** to include chapters' payments.
3. Press **Export CSV**.

## What's in the file

One row per paid or refunded payment, with:

- the date, payer and organization
- the amount, any refund and the **net** amount, as numbers your spreadsheet can add up
- the payment method
- the receipt number

Test payments aren't included in revenue figures.

The export is recorded in the **Audit log**.

## Using it with OpenLedgerApp

Each organization's payments go into its own Stripe account, and from there to its bank account. In OpenLedgerApp, the bank deposit is what you record and check against your statement. Use this export to see which members' dues make up each deposit.

## Revenue at a glance

**Reports → Revenue** shows totals for a date range. See [Reports](/charter/records/reports/).
