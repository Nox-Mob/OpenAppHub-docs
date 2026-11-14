---
title: "Two-step sign-in"
description: "Protect your account with a code from your phone, how signing in works with it, what to do if you lose your phone, and how an organization can require it."
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

That's it. The page now says two-step sign-in is **On**.

It works in **every app**: OpenAppHub, OpenCharterApp, OpenBoardApp and OpenLedgerApp. You set it up once.

## Signing in with it

1. Sign in with your email and password as usual.
2. The page says **One more step** and asks for a code.
3. Open your authenticator app and type the 6-digit code for OpenAppHub.
4. Select **Continue**.

The code changes every 30 seconds. If one doesn't work, wait for the next code and try again.

**Why does everything look empty until I type the code?** Until you type your code, the apps don't show any of your organizations' information. That's on purpose. It means a stolen password alone can't reveal anything.

## If you lose your phone

Losing your phone doesn't lock you out forever, but it takes a few steps:

- **If you're still signed in somewhere**, like on your computer, go to your **Account** page and turn two-step sign-in off. Then turn it on again with your new phone.
- **If you can't sign in at all**, email support@openapphub.org from the email address on your account. We'll check that it's really you before we help. This can take a little time, because we have to be careful.

**Tip:** many authenticator apps can back up your codes, or sync them to a new phone. Turn that on in your app, so a lost phone is less of a problem.

## Turn it off

On your **Account** page, under **Two-step sign-in**, select **Turn off**. To do this, you must have signed in with your code in this session. If OpenAppHub says you can't, sign out, sign in again with your code, and try again.

If your organization requires two-step sign-in for its owner and admins (see below), turning it off means you can't open that organization until you turn it back on.

## When your organization requires it

The owner or an admin can require two-step sign-in for **the owner and all admins**. These are the people who can change everything, so they need the most protection.

- The setting is in OpenAppHub, under **Settings** > **Security**: **Require two-step sign-in for the owner and admins**.
- To switch it on, you must have two-step sign-in yourself and have signed in with your code. This stops anyone from locking themselves out by mistake.
- Members and viewers aren't affected, but they can still turn it on for themselves.

**What an admin without two-step sign-in sees:** a yellow message saying the organization requires two-step sign-in, with a link to set it up. Until they set it up and sign in with a code, they can't open that organization in any app. Their other organizations still work as usual.

## Extra checks for big actions

Three actions can't be undone and do a lot of damage if the wrong person does them:

- deleting an organization;
- handing ownership of an organization to someone else;
- deleting your account.

For these, OpenAppHub asks for a **recent sign-in**: you must have signed in within the last **15 minutes**. If it's been longer, you'll see _"For your safety, sign out and sign in again, then try this within 15 minutes."_ Sign out, sign back in, and do it right away.

This protects you if you leave a computer signed in. Someone who walks up to it still can't delete your organization.

## Questions

**Do I need a smartphone?** You need some device that runs an authenticator app. Most people use a phone. Some password managers on a computer can show codes too.

**Does it cost anything?** No. Authenticator apps are free, and so is this feature.

**Can I use text messages (SMS) instead?** Not right now. Codes from an app are safer than text messages, which can be redirected to someone else's phone.

**Will I need the code every time?** You need it each time you sign in. Once you're signed in, you won't be asked again until you sign out or your session ends.
