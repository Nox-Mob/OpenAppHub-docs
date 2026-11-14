---
title: "Payments and receipts"
description: "Connect Stripe, take dues online, record payments by hand, and give numbered receipts with the right tax wording."
sidebar:
  order: 1
---

This page covers money in OpenCharterApp: taking dues online, writing down dues people paid another way, and giving receipts.

Two things to know first:

- **Your money goes straight to you.** Each organization, and each chapter that sells its own memberships, collects money into **its own Stripe account**. Money never passes through OpenCharterApp.
- **Card numbers never touch our servers.** People type their card details on Stripe's own secure page, not ours.

Everything on this page happens on your organization's **Payments** tab.

## Connect Stripe

Stripe is the company that handles card payments for you. Before people can join or renew online, you connect your Stripe account. The owner or an admin does this once.

1. **Make a key in Stripe.** In your Stripe dashboard, create a _restricted key_ with write access to **Checkout Sessions** and **Refunds**. (You can use your secret key instead, but a restricted key is safer because it can do less.)
2. **Tell Stripe where to send updates.** In Stripe, add a _webhook endpoint_. A webhook is how Stripe tells OpenCharterApp that a payment went through. Use the **Webhook address** shown on the Payments tab (select **Copy** to copy it). Choose these events: `checkout.session.completed`, `checkout.session.async_payment_succeeded`, `checkout.session.async_payment_failed`, `checkout.session.expired` and `charge.refunded`.
3. **Paste both into OpenCharterApp.** Paste the key into **Stripe key** (it starts with `rk_live_` or `sk_live_`). Paste the endpoint's signing secret into **Webhook signing secret** (it starts with `whsec_`). Then save.

OpenCharterApp checks the key with Stripe and stores it encrypted, so nobody can read it from our database. The tab then says **Connected** and shows your Stripe account's name.

**Testing first?** Stripe's test keys (they start with `sk_test_`) work too. Use Stripe's test card numbers to try it out. The tab then says **Test mode**, and no real money moves.

Demo organizations can select **Use test payments (demo only)** instead. Real organizations can't use this option.

## Paying online

Here's what happens when someone joins or renews online:

1. On your [join page](/charter/setup/chapters-and-join-page/#your-join-page), they choose a membership level and a term, like _Annual_.
2. They answer your member questions.
3. They pay on Stripe's checkout page.
4. Stripe tells OpenCharterApp the payment worked.
5. OpenCharterApp records the payment, starts or extends the membership, and gives them a receipt.

Some bank payments take a few days. Until the bank confirms, the payment shows as **pending**.

If you refund a payment in Stripe, OpenCharterApp marks it as refunded too. You don't have to change it here.

## Recording a payment by hand

Some people pay with cash, a check, a bank transfer, or a card you ran somewhere else. You can still record those payments:

1. Open the member and select **Record a payment**. (For a brand-new member, record a new membership instead.)
2. Choose the level and the term.
3. Choose how they paid under **Paid by**: **Cash**, **Check**, **Card (outside the app)**, **Bank transfer** or **Other**.
4. Enter the date they paid. Add a note if you want, like a check number.
5. Save. OpenCharterApp gives a receipt, just like for an online payment.

## Receipts

Every payment gets a receipt with its own number. The numbers go in order, and each organization has its own series.

To print or send one, open it from **Payments received** or from the member's page. Then select **Print** or **Download PDF**. Both make a neat PDF of just that receipt.

A receipt shows:

- your organization's name and address;
- the member's name;
- what they paid for, how much, and how they paid;
- your **Receipt footer**, such as a thank-you message;
- a sentence about taxes.

### The tax sentence

The tax sentence depends on the membership level's **Tax treatment**:

| The level's **Tax treatment** | The receipt says                                                                                                        |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| **Tax-deductible**            | No goods or services were provided in exchange for this payment. It may be tax-deductible to the extent allowed by law. |
| **Partly tax-deductible**     | Part of this payment may be tax-deductible. Please consult your tax advisor.                                            |
| **Not tax-deductible**        | This payment is not tax-deductible as a charitable contribution.                                                        |

**If your organization isn't tax-exempt**, turn off **Tax-exempt organization** in **Settings** > **General**. Then every receipt says the payment is not tax-deductible, no matter what each level says.

Fill in your **Tax profile** in **Settings** > **General**: your legal name, EIN, tax status (such as 501(c)(3)) and address. These print on every receipt.

**Receipts never change after they're made.** If you change the footer or a tax setting, only new receipts use it. Old receipts stay exactly as the member got them.

## The payments record

**Payments received** lists every payment: its status, how it was paid, who paid, and its receipt.

Payments are a permanent record. They're never deleted. If something is refunded or fixed, the change is kept next to the original payment, so you can always see what happened.

To get your payments as a spreadsheet, choose a date range and use the export on the same tab. To get everything at once, use **Export everything**. See [Records and reports](/charter/records/audit-log-and-reports/).

## Into your books (OpenLedgerApp)

If you also use OpenLedgerApp for your bookkeeping, the payments recorded here can go into your books for you. This includes online payments and the ones you recorded by hand.

They arrive in OpenLedgerApp as daily drafts. Your treasurer looks at each one and posts it. Nobody has to type the dues in twice, and refunds follow too. You turn this on in OpenLedgerApp. See [Dues from OpenCharterApp](/ledger/everyday/charter-payments/).
