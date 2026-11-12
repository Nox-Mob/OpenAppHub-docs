---
title: "Self-hosting"
description: "Run OpenCharterApp on your own server."
sidebar:
  order: 4
---

OpenCharterApp is open source and runs on its own, with its own sign-in, on your own Supabase database. The full,
current set-up guide is in the repository's README:
[github.com/Nox-Mob/OpenCharterApp](https://github.com/Nox-Mob/OpenCharterApp).

When self-hosted, the public join page works without OpenAppHub: new members sign up on your site.

## Email

A self-hosted server sends its own email: meeting reminders, action items that are due, and test emails.
The owner of the server's first organization sets it up under your **Account** page:

1. Enter your mail server's details: host, port, encryption (STARTTLS on port 587 or TLS on port 465),
   username and password, and the address and name emails come from.
2. Select **Save**, then **Send me a test email**.

Port 25 is blocked on Cloudflare Workers; use 587 or 465. The password is encrypted before it's stored.
You can set the same details on the Worker instead (`SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURITY`, `SMTP_USERNAME`,
`SMTP_PASSWORD` as a secret, `EMAIL_FROM`), or use Resend with `RESEND_API_KEY`.

The server needs two more things:

- the `SUPABASE_SERVICE_ROLE_KEY` secret, to read the outbox
- a cron trigger on the Worker, to send every few minutes: `"triggers": { "crons": ["*/5 * * * *"] }` in your
  Wrangler config

Until it's set up, email waits in the outbox; nothing is lost.
