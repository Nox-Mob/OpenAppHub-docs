---
title: "Users, security and exports"
description: "People, two-step sign-in and backups."
sidebar:
  order: 1
---

Under **Settings**:

- **Users & roles**: who can use the books, and who is treasurer.
- **Security**: two-step sign-in.
- **Exports and backup**: export your data.
- **History**: the record of changes.

## Roles

| Role | Can |
|---|---|
| **Admin** | Everything (owners and admins of the organization) |
| **Treasurer** | A member who can also close the books |
| **Member** | Record and change transactions |
| **View only** | See, but not change |

Each person's OpenLedgerApp role is separate from their OpenAppHub role: an OpenAppHub admin isn't a Ledger
admin unless given that role. Changing someone's role under **Users & roles** changes it in OpenLedgerApp
only. On OpenAppHub's **Members** page you can set it for every app at once, or give a named role that sets
it ([Roles](/hub/accounts/organizations-and-roles/#roles)); a named role can also let a member close the
books without being the treasurer. Anyone with nothing set can view only. A treasurer needs a member role
in OpenLedgerApp.

## The first time you open OpenLedgerApp

OpenLedgerApp asks you to confirm that it doesn't give financial or tax advice. If you use OpenLedgerApp
through openapphub.org, that's all it asks: you agreed to the Terms of Service and Privacy Policy when you
created your OpenAppHub account. On your own server it also asks you to accept them.
