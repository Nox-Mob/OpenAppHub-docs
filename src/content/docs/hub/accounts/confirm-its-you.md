---
title: "Confirm it's you"
description: "Why OpenAppHub asks for your password again right before deleting an organization, handing over ownership, deleting your account or changing your recovery email."
sidebar:
  order: 3
---

Some actions can't be undone, and they'd do a lot of damage in the wrong hands. Right before one of them, OpenAppHub opens a box called **Confirm it's you**.

## When it appears

- **Deleting an organization**
- **Handing over ownership** of an organization
- **Deleting your account**
- **Changing your recovery email** (adding, changing or removing it)

## What you type

1. **Your password.** If you sign in with Google and have no password, select **Email me a code** instead. We email a 6-digit code to your sign-in address. It works once, for 10 minutes.
2. **A code from your authenticator app**, if you use [two-step sign-in](/hub/accounts/two-step-sign-in/).

Then select the button to go ahead (for example **Delete forever**).

## Why

It protects you if you leave a computer signed in. Someone who walks up to it can't delete your organization or take it over, because they don't know your password and don't have your phone.

- Your password is checked right then. You stay signed in as before.
- What you type makes a **one-time pass** for that one action. It works once, only for you, and only for the action you started. If you don't finish within 5 minutes, it runs out, and you confirm again.
- Each time, it's listed in **Recent security activity** on your **Account** page.

## If it doesn't work

- **"That password isn't right."** Check for typing mistakes and try again. Forgot it? Use **Forgot password** on the sign-in page.
- **"That authenticator code didn't work."** The code changes every 30 seconds. Wait for the next one and type it quickly.
- **"That code has expired."** Emailed codes work for 10 minutes and allow 5 tries. Select **Send a new code**.
- **"Too many codes in the last hour."** You can ask for 5 emailed codes an hour. Wait a while, or use your password.
- **No email arrives?** Check your spam folder. On a self-hosted install, the server's email settings must be set up.
