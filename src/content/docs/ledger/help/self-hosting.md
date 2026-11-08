---
title: "Self-hosting OpenLedgerApp"
description: "Running OpenLedgerApp yourself on Supabase's cloud or your own server."
sidebar:
  order: 4
---

OpenLedgerApp is open source. See the repository for its licence.

## Two paths

| | Path 1: Supabase cloud | Path 2: Supabase on your own server (Docker) |
|---|---|---|
| Where data lives | supabase.com | Your own server |
| Effort | Easiest | More setup; 4 GB+ RAM |

Either way you also need **Node.js 24** (or 22.22.2+) with **npm 11+**, and Git. Use npm only.

## Instructions

The [OpenLedgerApp README](https://github.com/Nox-Mob/OpenLedgerApp#self-hosting-full-reproduction-guide) has the full step-by-step guide for both paths:

1. Create the Supabase project and collect its keys.
2. Apply every file in `supabase/migrations/` in order.
3. Configure sign-in: email (keep confirmation on), optionally Google, the site URL and the reset-password redirect.
4. Fill in `.env` from `.env.example`.
5. Run or deploy the app.

## Settings to know

| Setting | Purpose |
|---|---|
| `BACKUP_SIGNING_SEED` | Signs backups. Use 64+ random characters and **never change it**, or older backups will show as from another install. |
| `SUPABASE_SERVICE_ROLE_KEY` | Server only. Never put it in a `VITE_` setting. |
| `LOVABLE_API_KEY` | Optional; turns on reading PDF statements. |

## Sample data

`supabase/seed/demo.sql` adds a demo login and two sample organizations for testing. **Never load it into a database with real users**: it creates a publicly known login.

## Backups

Use the in-app full backup, and also back up the database itself.
