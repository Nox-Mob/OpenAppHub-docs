---
title: "Privacy and security"
description: "How the apps keep your organization's data private and safe."
sidebar:
  order: 2
---

## Each organization is walled off

Every record carries its organization's ID, and the database itself refuses to show or change records belonging to an organization you're not part of. This rule ("row-level security") is enforced by the database, so a bug on a screen can't leak another organization's data.

## Permissions are checked by the database too

What you can do depends on your role. The apps check your role on screen, and the database checks it again on every request. If an administrator removes you, you lose access on your next request.

## Official records can't be quietly changed

- **OpenBoardApp:** approved minutes, recorded votes and distributed board packets are locked. Corrections create a new version.
- **OpenLedgerApp:** posted transactions are never edited. You void them and enter a corrected one, so the history stays complete.
- **OpenCharterApp:** receipts are voided and reissued rather than edited, and member records are taken off the roster rather than deleted.

## Everything important is logged

Each app keeps an audit log or history of who changed what and when. Nobody, including administrators, can edit or delete log entries.

## Files are private

Uploaded files (logos, letterhead, documents) are stored privately. Downloads use short-lived links that stop working after a short time.

## Payments

OpenCharterApp doesn't store card numbers. Payments go through your organization's own Stripe account, and Stripe handles the card details.

## Privacy policy and terms

Each app links to its privacy policy and terms of service from the sign-in page and the app footer. Questions about privacy: [legal@openapphub.org](mailto:legal@openapphub.org).

## Reporting a security problem

If you think you've found a security problem, email [support@openapphub.org](mailto:support@openapphub.org) with the details. Please don't post it publicly until we've had a chance to fix it.
