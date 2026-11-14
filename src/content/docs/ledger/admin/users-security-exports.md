---
title: "Users, security and exports"
description: "People, two-step sign-in and backups."
sidebar:
  order: 1
---

Under **Settings**:

- **Users & roles**: who can use the books, and who is treasurer.
- **Security**: on OpenAppHub, a link to your account and organization security settings, which cover every app. On your own server: two-step sign-in, backup codes, the recovery email, and who must use two-step sign-in.
- **Exports and backup**: export your data.
- **History**: the record of changes.

## Roles

Every Settings section is described in [Settings](/ledger/admin/settings/).

| Role          | Can                                                |
| ------------- | -------------------------------------------------- |
| **Admin**     | Everything (owners and admins of the organization) |
| **Treasurer** | A member who can also close the books              |
| **Member**    | Record and change transactions                     |
| **View only** | See, but not change                                |

Each person's OpenLedgerApp role is separate from their OpenAppHub role: an OpenAppHub admin isn't a Ledger
admin unless given that role. Changing someone's role under **Users & roles** changes it in OpenLedgerApp
only. On OpenAppHub's **Members** page you can set it for every app at once, or give a named role that sets
it ([Roles](/hub/accounts/organizations-and-roles/#roles)); a named role can also let a member close the
books without being the treasurer. Anyone with nothing set can view only. A treasurer needs a member role
in OpenLedgerApp. If your organization lets app admins change roles in their own app, OpenLedgerApp admins can change
roles here too. On OpenAppHub you can give someone **No access** to OpenLedgerApp, for example a
volunteer who shouldn't see the books ([No access](/hub/accounts/organizations-and-roles/#no-access)).

## Two-step sign-in

Two-step sign-in asks for a 6-digit code from an app on your phone, as well as your password. It's the
best way to protect your books.

- **Your own account:** on OpenAppHub, set it up on your [OpenAppHub account page](/hub/accounts/two-step-sign-in/).
  It works in every app. On your own server, set it up under **Settings** > **Security**.
- **Who must use it:** an owner or admin chooses **Not required**, **Required for the owner and admins**, or
  **Required for everyone**. On OpenAppHub that's under **Settings** > **Security** in OpenAppHub, for every
  app at once; on your own server, under **Settings** > **Security** here. People it covers see a message
  explaining how to set it up, and they can't see the books until they do.
- **Lost your phone?** Use a backup code, or a link sent to your recovery email. See
  [If you lose your phone](/hub/accounts/two-step-sign-in/#if-you-lose-your-phone).

OpenLedgerApp used to have its own switch, "Require it for your books". It's now part of the setting above.
Organizations that had it on now have **Required for everyone**.

Once someone has set up two-step sign-in, they must type their code each time they sign in before any app
shows their organizations' information.

Deleting the organization, handing over ownership and deleting your account ask you to
[confirm it's you](/hub/accounts/confirm-its-you/) first.

## The first time you open OpenLedgerApp

OpenLedgerApp asks you to confirm that it doesn't give financial or tax advice. If you use OpenLedgerApp
through openapphub.org, that's all it asks: you agreed to the Terms of Service and Privacy Policy when you
created your OpenAppHub account. On your own server it also asks you to accept them.
