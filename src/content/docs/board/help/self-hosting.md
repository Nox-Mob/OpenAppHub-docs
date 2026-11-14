---
title: "Self-hosting"
description: "Run OpenBoardApp on your own server."
sidebar:
  order: 4
---

OpenBoardApp is open source and runs on its own, with its own sign-in, on your own Supabase database. The current
set-up guide is in the repository: [github.com/Nox-Mob/OpenBoardApp](https://github.com/Nox-Mob/OpenBoardApp).

## Email

A self-hosted server sends its own email: meeting reminders, action items that are due, and test emails.
The owner of the server's first organization sets it up under **Email** in the menu:

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

## Two-step sign-in and getting back in

On your own server, two-step sign-in, backup codes, the recovery email and **Recent security activity** are under **Security** in the menu. They work like they do on OpenAppHub: see [Two-step sign-in](/hub/accounts/two-step-sign-in/) and [Confirm it's you](/hub/accounts/confirm-its-you/).

For this to work fully, the server needs:

- the `SUPABASE_SERVICE_ROLE_KEY` secret. The server uses it for two things only. It removes a lost authenticator, but only after a backup code or recovery link is accepted. Then it signs the person out everywhere else. Without the key, the recovery page says recovery isn't set up.
- working [email](#email). This server sends codes, recovery links and security notices right away. Their links open this server.
- **TOTP** turned on in your Supabase project (**Authentication** > **Multi-factor**).

Did someone lose their phone, with no backup codes and no recovery email? The person who runs the server can remove their authenticator. In the Supabase dashboard, open **Authentication** > **Users**, choose the person, then **Multi-factor**.
