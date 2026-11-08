---
title: "Self-hosting OpenBoardApp"
description: "Running OpenBoardApp yourself: requirements and where the instructions are."
sidebar:
  order: 4
---

OpenBoardApp is open source. See the repository for its licence.

## What it runs on

- **Supabase** for the database, sign-in and private file storage.
- **Cloudflare Workers** for the web app (TanStack Start).
- **npm** only. Don't use Bun, Yarn or pnpm for this app.
- **Google sign-in** (optional), configured in your Supabase project.

PDFs and ZIP exports are built in the browser, so no extra document server is needed.

## Instructions

See the [OpenBoardApp repository](https://github.com/Nox-Mob/OpenBoardApp):

- `README.md` and `docs/architecture.md`
- `docs/migration/`: setting up your own Supabase project, Google sign-in, email and domain
- `supabase/migrations/`: the database, applied in order

## Good to know

- The demo organization is rebuilt by a scheduled database job every six hours. Leave it out of a private install if you don't want a public demo.
- Configure SMTP email in Supabase so password resets are delivered.
- Back up your database regularly. In-app exports are not restorable backups.
