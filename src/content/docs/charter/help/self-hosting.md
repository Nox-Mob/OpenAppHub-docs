---
title: "Self-hosting OpenCharterApp"
description: "Running OpenCharterApp yourself: requirements and where the instructions are."
sidebar:
  order: 5
---

OpenCharterApp is open source under the **AGPL-3.0** licence. You can run it for your own association, or offer it to others; if you offer a modified version as a network service, you must share your changes.

## What it runs on

- **Supabase** for the database, sign-in and file storage (hosted at supabase.com, or your own).
- **Cloudflare Workers** for the web app (TanStack Start).
- **Bun** as the package manager. Don't use npm, Yarn or pnpm for this app.
- **Stripe** for online payments: each organization connects its own account in the app.
- **Google sign-in** (optional), configured in your Supabase project.

## Instructions

The full steps are in the repository and change with the code:

- [README: install and run](https://github.com/Nox-Mob/OpenCharterApp#install-and-run)
- `.env.example`: every setting and what it's for
- `docs/migration/`: setting up your own Supabase project, Google sign-in, email and domain
- `supabase/migrations/`: the database, applied in order

## Database changes

Apply every migration in order, and apply new ones when you update. Never edit a migration that's already applied. Until a feature's migration is applied, its screen says it "needs a database update" instead of failing.

## Secrets

Only **publishable** settings go in the browser. Keep the Supabase service-role key and any server secrets on the server, never in the repository.

## Email

Configure an email server (SMTP) in Supabase so password resets and confirmations are delivered.

## Backups

Back up your Supabase database regularly and test a restore. OpenCharterApp doesn't have an in-app backup yet.
