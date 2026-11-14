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

## Two-step sign-in and getting back in

On your own server, two-step sign-in, backup codes, the recovery email and **Recent security activity** are on your **Account** page, and who must use two-step sign-in is under the organization's **Settings**. They work like they do on OpenAppHub: see [Two-step sign-in](/hub/accounts/two-step-sign-in/) and [Confirm it's you](/hub/accounts/confirm-its-you/).

For this to work fully, the server needs:

- the `SUPABASE_SERVICE_ROLE_KEY` secret. The server uses it for two things only. It removes a lost authenticator, but only after a backup code or recovery link is accepted. Then it signs the person out everywhere else. Without the key, the recovery page says recovery isn't set up.
- working [email](#email). This server sends codes, recovery links and security notices right away. Their links open this server.
- **TOTP** turned on in your Supabase project (**Authentication** > **Multi-factor**).

Did someone lose their phone, with no backup codes and no recovery email? The person who runs the server can remove their authenticator. In the Supabase dashboard, open **Authentication** > **Users**, choose the person, then **Multi-factor**.

## The key for sensitive fields

[Sensitive member fields](/charter/members/roster/#sensitive-fields) are encrypted with a key that OpenCharterApp makes for you the first time it sets up the database. It's kept in **Supabase Vault** (**Project Settings** > **Vault**), named `charter_sensitive_fields` (later keys end in `_v2`, `_v3` and so on). On a database without Vault, it's kept in a table that nobody can read through the app.

- **Back it up with the database.** Supabase's backups include Vault. Without the key, sensitive answers can't be read.
- **Never delete or change it by hand.**

**To change the key** (for example once a year, or if you think it was exposed), open the Supabase **SQL editor** and run:

```sql
select charter.rotate_field_key();
```

It makes a new key and re-encrypts every sensitive answer and every saved join-page answer with it, all at once. It returns the new key's number and how many answers it re-encrypted. Old keys are kept, so nothing breaks.

**To delete old keys**, once you're sure you won't need them, run:

```sql
select charter.forget_old_field_keys();
```

It refuses if any answer still needs an old key. Keep old keys as long as you keep database backups you might restore: an old backup's answers need the key they were encrypted with.

Only the database owner (the SQL editor) or the service role can run these.
