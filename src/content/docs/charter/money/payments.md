---
title: "Connecting payments (Stripe)"
description: "Connect your organization's own Stripe account so members can join and renew online."
sidebar:
  order: 1
---

Each organization collects dues into **its own Stripe account**. A national and each chapter connect separately, keep their money separate and issue their own receipts. OpenCharterApp never holds your money or sees card numbers.

## What you need

- A Stripe account for your organization (free to open at stripe.com).
- Someone who can sign in to it, usually the treasurer.

## Connect Stripe

Work in **test mode** first, then repeat with live keys.

1. In Stripe, go to **Developers → API keys**. Create a **restricted key** with **Checkout Sessions: write**, or use your secret key (`sk_test_…` in test mode).
2. In Stripe, go to **Developers → Webhooks** and add an endpoint. Use the **webhook address** shown on OpenCharterApp's **Settings → Payments** page, and select the events listed there.
3. Copy the endpoint's **signing secret** (`whsec_…`).
4. In OpenCharterApp, **Settings → Payments**: paste the key and the signing secret, and save.

The page now shows that Stripe is connected, for example **Stripe (test mode)** while you're testing.

**Settings → Setup → Connect payments** shows **Done** once payments are connected.

## Test it

1. Open your join page (Overview → **Share your join page**).
2. Join with Stripe's test card **4242 4242 4242 4242**, any future expiry date and any CVC.
3. Stripe returns you to the app, and the return page confirms the payment.

When it works, replace the test key and signing secret with live ones.

## Why the webhook matters

The return page confirms payments even if the webhook is misconfigured, by asking Stripe directly. But **refunds** and some later updates only arrive through the webhook, so make sure it's set up correctly.

## Test payments (demo organizations)

Demo organizations can use **Use test payments (demo only)** instead of Stripe. Their checkout page has buttons to simulate a card being accepted, declined, short of funds, cancelled or slow to confirm.

## Recording payments by hand

Cash and checks are recorded on the member's page. See [Adding members and recording payments](/charter/members/adding-and-recording/).
