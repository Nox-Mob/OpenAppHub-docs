---
title: "Two-step sign-in"
description: "Protect your account with a code from your phone: how to turn it on, backup codes, a recovery email, what to do if you lose your phone, and how an organization can require it."
sidebar:
  order: 2
---

Two-step sign-in makes your account much harder to break into. When it's on, signing in takes two things:

1. **Something you know:** your password.
2. **Something you have:** your phone, which shows a new 6-digit code every 30 seconds.

Even if someone learns your password, they still can't get in without your phone. Many people call this two-factor authentication, 2FA or MFA. It's the same thing.

We recommend two-step sign-in for everyone. It's especially important for owners and admins, because they can change everything in an organization.

## What you need

You need an **authenticator app** on your phone. It's free. Popular ones are:

- Google Authenticator
- Microsoft Authenticator
- 1Password, Bitwarden, or another password manager with codes

Any app that shows 6-digit codes (sometimes called "TOTP" codes) will work.

## Turn it on

1. In OpenAppHub, open your **Account** page. (Select your name at the top, then **Account**.)
2. Find **Two-step sign-in** and select **Set up two-step sign-in**.
3. A QR code appears. Open your authenticator app, choose to add an account, and scan the code with your phone's camera.
   - Can't scan it? The page also shows a key, a long string of letters and numbers. Type that key into your app instead.
4. Your app now shows a 6-digit code for OpenAppHub. Type that code into the page.
5. Select **Turn on**.
6. **Save your backup codes.** Ten codes appear straight away. See [Backup codes](#backup-codes) below.

That's it. The page now says two-step sign-in is **On**.

It works in **every app**: OpenAppHub, OpenCharterApp, OpenBoardApp and OpenLedgerApp. You set it up once.

## Signing in with it

1. Sign in with your email and password as usual.
2. The page says **One more step** and asks for a code.
3. Open your authenticator app and type the 6-digit code for OpenAppHub.
4. Select **Continue**.

The code changes every 30 seconds. If one doesn't work, wait for the next code and try again.

**Why does everything look empty until I type the code?** Until you type your code, the apps don't show any of your organizations' information. That's on purpose. It means a stolen password alone can't reveal anything.

## Backup codes

Backup codes are your spare keys. If you lose your phone, one backup code gets you back in.

- You get **ten** codes when you turn two-step sign-in on. They look like `K7QXM-2RTPA`.
- **Each code works once.** The page shows how many you have left.
- **Save them now.** You won't see them again. Select **Copy** or **Download**, and keep them somewhere safe: a password manager, or a printed page at home. Don't keep them only on the phone you might lose.
- To get new codes, select **Make new codes** on your **Account** page. You'll be asked for a fresh code from your authenticator app first. Your old codes stop working.
- If you set up two-step sign-in again on a new phone, your old codes stop working. Make new ones.

## Recovery email

A recovery email is a second email address, different from the one you sign in with. If you lose your phone and have no backup codes, we can send a link there that turns off two-step sign-in, so you can set it up again.

**Add one:**

1. On your **Account** page, under **Two-step sign-in**, find **Recovery email**.
2. Type the address and select **Save**.
3. A [Confirm it's you](/hub/accounts/confirm-its-you/) box opens. Type your password (or a code we email you) and, if asked, your authenticator code.
4. We send a link to the new address. **Open it and select Confirm.** Until you do, the address can't be used.

We also email your sign-in address whenever a recovery email is added or removed, so you'll know if someone else tries.

To change it, type a new address and save. To stop using one, select **Remove**.

## If you lose your phone

1. Sign in with your email and password.
2. When you're asked for the code, select **Can't use your authenticator app?**
3. Choose one:
   - **Type a backup code**, then select **Use backup code**; or
   - select **Email my recovery address**, then open the link in your recovery email (it works once, for 30 minutes) and select **Turn off two-step sign-in**.
4. Two-step sign-in is now off, and **every other place you were signed in is signed out**. Set it up again on your new phone right away, and make new backup codes.

Each time this happens, we email your sign-in address (and your recovery address), and it's listed in **Recent security activity** on your **Account** page.

**No backup codes and no recovery email?** Email support@openapphub.org from the address you sign in with. We'll check that it's really you before we help. This takes longer, because we have to be careful. On a [self-hosted](/hub/hosting/hosted-vs-self-hosted/) install, ask whoever runs it.

**Tip:** many authenticator apps can back up your codes, or sync them to a new phone. Turn that on in your app, so a lost phone is less of a problem.

**Safety limits:** after 10 wrong backup codes or links in an hour, recovery stops for an hour. You can ask for at most 3 recovery links an hour.

## Turn it off

On your **Account** page, under **Two-step sign-in**, select **Turn off**. You'll be asked for a code from your authenticator app first, so nobody can turn it off on a computer you left signed in.

If your organization requires two-step sign-in (see below), turning it off means you can't open that organization until you turn it back on.

## When your organization requires it

The owner or an admin chooses who in the organization must use two-step sign-in. The setting is in OpenAppHub, under **Settings** > **Security**:

| Choice                                | Who must use it                                                          |
| ------------------------------------- | ------------------------------------------------------------------------ |
| **Not required**                      | Nobody has to. Everyone may, and we recommend it.                        |
| **Required for the owner and admins** | The people who can change everything. Members may choose for themselves. |
| **Required for everyone**             | Every person in the organization, including the owner and admins.        |

- To choose either "Required" setting, you must have two-step sign-in yourself and have signed in with your code. This stops anyone from locking themselves out by mistake.
- The page tells you how many people haven't set it up yet. Before you save, it asks you to confirm, because those people can't open the organization until they do.

**What someone without two-step sign-in sees:** a yellow message saying the organization requires two-step sign-in, with a link to set it up. Until they set it up and sign in with a code, they can't open that organization in any app. Their other organizations still work as usual.

## Recent security activity

Your **Account** page lists the last 20 security events on your account, with the date and time. Examples: confirming it's you, making backup codes, using a backup code, adding or confirming a recovery email, and turning two-step sign-in off to recover.

Don't recognize something? Change your password and check your two-step sign-in right away.

## Extra checks for big actions

Deleting an organization, handing over ownership, deleting your account and changing your recovery email each ask you to [confirm it's you](/hub/accounts/confirm-its-you/) first. If you use two-step sign-in, that includes a code from your authenticator app.

## Questions

**Do I need a smartphone?** You need some device that runs an authenticator app. Most people use a phone. Some password managers on a computer can show codes too.

**Does it cost anything?** No. Authenticator apps are free, and so is this feature.

**Can I use text messages (SMS) instead?** Not right now. Codes from an app are safer than text messages, which can be redirected to someone else's phone.

**Will I need the code every time?** You need it each time you sign in. Once you're signed in, you won't be asked again until you sign out or your session ends.

**Are my backup codes stored somewhere?** Only a scrambled fingerprint of each one, never the code itself. That's why we can't show them to you again.
