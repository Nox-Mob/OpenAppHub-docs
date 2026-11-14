---
title: "Security and privacy"
description: "How OpenAppHub keeps your organization's information safe, what you can do to help, and how to report a security problem."
sidebar:
  order: 6
---

Your organization trusts OpenAppHub with important information: member names, email addresses, board decisions and money. This page explains, in plain words, how we protect it. It also explains what you can do to help, and how to tell us if you find a problem.

## How we protect your information

### Only the right people can see it

Every piece of information belongs to one organization. The database itself checks, on every single request, whether you're allowed to see or change it. This check isn't just in the screens you use; it's built into where the data is stored. So even if someone built their own program to talk to our servers, they still couldn't see another organization's information.

What each person can do depends on their **role**, which the owner and admins choose. A person can even have **No access** to one app, like a volunteer who helps with events but shouldn't see the books. See [Organizations and roles](/hub/accounts/organizations-and-roles/).

### Your password isn't enough on its own (if you want)

With [two-step sign-in](/hub/accounts/two-step-sign-in/), signing in needs your password **and** a code from your phone. Once you turn it on, the database won't show any organization's information until you've typed your code. An organization can also require it for its owner and admins.

### Big actions need a recent sign-in

Deleting an organization, handing over ownership and deleting an account need a sign-in from the last 15 minutes. A computer someone forgot to sign out of can't be used for them.

### Everything travels encrypted

Every page and every bit of data goes over an encrypted connection (HTTPS). Your browser is told to always use HTTPS for our sites, so nobody on the same Wi-Fi can read or change what you send.

Stored information, including backups, is encrypted too. Sensitive settings, like a Stripe key or an email server password, are encrypted again before they're saved.

### We never see card numbers

Dues and plan payments go through Stripe. People type their card details on Stripe's own secure page, so card numbers never reach our servers.

### We record who changed what

The **History** (audit log) lists important changes and who made them: people joining and leaving, role changes, security settings and more. In OpenLedgerApp, every change to the books is recorded at the same moment it happens. Audit logs are never automatically deleted.

### We keep only what we need

Some information is cleaned up on a schedule: sent emails after 180 days, used email buttons after 30 days, and old notifications after a year.

### We check our own work

- Every change to the apps is tested before it goes live, including tests that try to break the access rules.
- We scan our code for common security mistakes, and our software libraries for known problems, every week.
- The pages tell your browser to block common attacks, like other websites showing our pages inside theirs (clickjacking).

## What you can do

These steps make a big difference:

1. **Turn on [two-step sign-in](/hub/accounts/two-step-sign-in/).** It's the best single thing you can do.
2. **If you're an owner or admin, require it for admins.** In **Settings** > **Security**, turn on **Require two-step sign-in for the owner and admins**.
3. **Use a strong, unique password.** Don't reuse a password from another website. A password manager makes this easy.
4. **Give people only the roles they need.** A volunteer who only plans events doesn't need access to the books. Use **No access** for apps someone shouldn't open.
5. **Remove people who leave.** When someone leaves your organization, remove them on the **Members** page.
6. **Sign out on shared computers.** On a library or office computer, always sign out when you're done.
7. **Be careful with emails.** Our emails come from openapphub.org. Our buttons only work after you sign in, and they always ask you to confirm. If an email asks for your password, it's not from us.

## Reporting a security problem

If you think you've found a security problem in any of the apps, please tell us privately first.

- **Email:** support@openapphub.org. Put "Security" in the subject.
- Tell us what you found, how to see it happen, and how to reach you.
- Please don't share it with anyone else until we've had time to fix it. We'll keep you updated and thank you for your help.
- Please don't access other people's information, change data that isn't yours, or disrupt the service while you look.

Our [security.txt](https://openapphub.org/.well-known/security.txt) file has the same information, in a standard format that security researchers use.

## More

- [Two-step sign-in](/hub/accounts/two-step-sign-in/)
- [Organizations and roles](/hub/accounts/organizations-and-roles/)
- [Your data: ownership and export](/hub/data/ownership-and-export/)
- [Privacy policy](https://openapphub.org/privacy)
