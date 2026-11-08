---
title: "Self-hosting"
description: "Running the apps yourself: what you need and where the instructions are."
sidebar:
  order: 3
---

Each app runs on [Supabase](https://supabase.com) (Postgres, sign-in and file storage) plus the web app itself. You can use Supabase's hosted service or run Supabase on your own server with Docker.

## What you need

- A Supabase project, hosted or self-hosted.
- Node.js and the app's package manager (OpenCharterApp uses Bun; OpenBoardApp and OpenLedgerApp use npm).
- Somewhere to run the web app. The apps are built to run on Cloudflare Workers.
- For online payments in OpenCharterApp, a Stripe account.

## Instructions for each app

The full, up-to-date steps live in each app's repository, because they change with the code:

| App | Repository | Self-hosting notes |
|---|---|---|
| OpenCharterApp | [Nox-Mob/OpenCharterApp](https://github.com/Nox-Mob/OpenCharterApp) | [Self-hosting OpenCharterApp](/charter/help/self-hosting/) |
| OpenBoardApp | [Nox-Mob/OpenBoardApp](https://github.com/Nox-Mob/OpenBoardApp) | [Self-hosting OpenBoardApp](/board/help/self-hosting/) |
| OpenLedgerApp | [Nox-Mob/OpenLedgerApp](https://github.com/Nox-Mob/OpenLedgerApp) | [Self-hosting OpenLedgerApp](/ledger/help/self-hosting/) |

## Your responsibilities

When you self-host, you're the operator. That means:

- **Backups.** Back up your database regularly and test that you can restore it.
- **Updates.** Apply new releases, including their database changes, in order.
- **Secrets.** Keep server keys (the Supabase service-role key, Stripe secret keys) out of the browser and out of your repository.
- **Email.** Configure an email server in Supabase so password resets reach people.

## Licence

The apps are open source. OpenCharterApp is licensed under the AGPL-3.0: you may run and modify it freely, and if you offer a modified version to others as a network service, you must share your changes. Check each repository for its licence terms.
