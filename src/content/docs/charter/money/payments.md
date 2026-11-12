---
title: "Payments and receipts"
description: "Connect Stripe, take dues online, record payments by hand, and issue numbered receipts with the right tax wording."
sidebar:
  order: 1
---

Each organization (and each chapter that sells its own memberships) collects money into **its own Stripe account** and issues **its own numbered receipts**. Money never passes through OpenCharterApp, and card details never touch our servers. Everything is on the organization's **Payments** tab.

## Connect Stripe

Online joining and renewal open once a connection is verified. Owners and admins do this once:

1. **In Stripe, create a restricted key** with write access to **Checkout Sessions** and **Refunds** (or use your secret key).
2. **Add a webhook endpoint** in Stripe at the **Webhook address** shown on the Payments tab (select **Copy**), sending these events: `checkout.session.completed`, `checkout.session.async_payment_succeeded`, `checkout.session.async_payment_failed`, `checkout.session.expired`, `charge.refunded`.
3. **Paste the key and the endpoint's signing secret** into **Stripe key** (`rk_live_…` or `sk_live_…`) and **Webhook signing secret** (`whsec_…`), then save.

The key is checked with Stripe and stored encrypted. The tab then shows **Connected** with the Stripe account's name. Stripe test keys (`sk_test_…`) work too, with Stripe's test cards; the tab then shows **Test mode**.

Demo organizations can select **Use test payments (demo only)** instead.

## Paying online

On your [join page](/charter/setup/chapters-and-join-page/#your-join-page), people choose a membership level and term, answer your member fields, and pay with Stripe Checkout. When Stripe confirms the payment (the webhook above), OpenCharterApp records the payment, starts or extends the membership, and issues a receipt. A bank payment that takes a few days shows as pending until it clears. If you refund a payment in Stripe, it's recorded as refunded here too.

## Recording a payment by hand

For dues paid in cash, by check, by bank transfer or by card outside the app: on a member, select **Record a payment** (or record a new membership). Choose the level and term, **Paid by** (**Cash**, **Check**, **Card (outside the app)**, **Bank transfer** or **Other**), the date it was paid, and an optional note. A receipt is issued just like an online payment.

## Receipts

Every payment gets a receipt with its own number, in order, per organization. Open one from **Payments received** or from the member, and select **Print** or **Download PDF**: both make a properly formatted PDF of the receipt alone, ready to print or email.

A receipt shows your organization's name and address, the member, what was paid for, the amount and method, your **Receipt footer** (for example a thank-you), and a sentence about taxes:

| The membership level's **Tax treatment** | The receipt says |
|---|---|
| **Tax-deductible** | No goods or services were provided in exchange for this payment. It may be tax-deductible to the extent allowed by law. |
| **Partly tax-deductible** | Part of this payment may be tax-deductible. Please consult your tax advisor. |
| **Not tax-deductible** | This payment is not tax-deductible as a charitable contribution. |

If your organization isn't tax-exempt, turn off **Tax-exempt organization** in **Settings** > **General**: every receipt then says the payment is not tax-deductible, whatever the level's tax treatment. Fill in your **Tax profile** (legal name, EIN, tax status such as 501(c)(3), and address) in **Settings** > **General** so they print on receipts.

Issued receipts never change: a new footer or tax setting applies to receipts issued from then on.

## The payments record

**Payments received** lists every payment with its status, method, member and receipt. Payments are an audited record: they're never deleted, and refunds and corrections are kept alongside the original. Export a date range as a spreadsheet with the export on the same tab, or everything at once with **Export everything** ([Records and reports](/charter/records/audit-log-and-reports/)).
