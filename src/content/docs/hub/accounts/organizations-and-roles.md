---
title: "Organizations and roles"
description: "Organizations, roles in OpenAppHub and in each app, named roles, settings and ownership."
sidebar:
  order: 2
---

Everything in OpenAppHub belongs to an **organization**: your association, board or nonprofit. You can
belong to more than one. The organization switcher at the top of each page shows which one you're working
in, and your choice carries across the apps.

## Roles

Everyone has **a role in OpenAppHub** and **a role in each app**, and they're separate: an OpenAppHub
admin isn't an admin in OpenBoardApp unless given that role there, and an OpenLedgerApp admin isn't an
OpenAppHub admin.

### In OpenAppHub

| Role | Can |
|---|---|
| **Owner** | Everything, in OpenAppHub and in every app, including deleting the organization and transferring ownership. Exactly one per organization. |
| **Admin** | Manage people, invitations, named roles, billing and the organization's settings. |
| **Member** | See the dashboard and their tasks. |
| **Viewer** | See the dashboard. |

### In each app

| Role | Can, in that app |
|---|---|
| **Admin** | Everything, including the app's settings |
| **Member** | Use the app and make changes |
| **Viewer** | See, but not change |

Someone's role in an app comes from, in order:

1. **The owner** is the owner in every app.
2. **A role set for them in that app**, on the **Members** page under **Roles in each app** (or in the
   app's own members page). It wins over a named role.
3. **Their named role** (below), if it gives that app a role.
4. Otherwise they're a **viewer** in that app, shown as **Not set: viewer** so you can spot it.

For example: an admin in OpenBoardApp but view-only in OpenLedgerApp; or a member in OpenCharterApp and
OpenBoardApp but an admin in OpenLedgerApp.

### Named roles

A **named role** is a role you name, like *Treasurer*, that says what it can do in each app at once: for
example admin in OpenLedgerApp, member in OpenBoardApp and OpenCharterApp. It can also give **extra
permissions** an app offers, without making the person an admin there. For example, a member in
OpenCharterApp who may see payments, or a member in OpenBoardApp who may edit the official record.

- Create and change them on the **Members** page, under **Named roles** (owner and OpenAppHub admins).
- Each person has **one** named role at most; pick it in the **Named role** column. Anything else they
  need in one app, set for them in that app.
- Changing a named role changes it for everyone who holds it. Deleting one leaves its people as viewers,
  except where something is set for them in a single app.

| App | Extra permissions a named role can give |
|---|---|
| OpenCharterApp | Any of its permissions, such as seeing or recording payments, managing members, appointing officers. They apply in every chapter of the organization. |
| OpenBoardApp | Edit the official record (what the chair and secretary can do); read the audit log; manage the board |
| OpenLedgerApp | Close the books (what a treasurer can do); manage the books |

Apps also have their own roles on top, set in the app: a board's chair or secretary, a treasurer, a
chapter's president. They show under the person's role on the Members page.

### Building workflows

The owner and OpenAppHub admins can build [workflows](/hub/automations/), and can let anyone else
build them: tick **Can build workflows** for that person.

:::caution[Workflows run as the organization]
A workflow acts for the organization, not as the person who built it. Someone who can build workflows can
look up and change information in every app your organization uses through a workflow, whatever their own
role in those apps. Give it only to people you trust with that.
:::

### Plans count editors

Hosted plans limit how many **editors** an organization has: the owner, OpenAppHub admins, and anyone who
is a member or admin in at least one app ([Plans](/hub/hosting/plans/)). People who are viewers everywhere
never count, and neither do the people in your chapters' own organizations.

Owners and admins change OpenAppHub roles on the **Members** page. Anyone except the owner can select
**Leave** there to leave an organization.

## Create or switch organizations

- **Create:** open the organization switcher and select **Create organization**. You become the owner, and
  the guided setup asks for the time zone, currency and who to invite.
- **Switch:** choose another organization in the switcher. Every app follows.

## Organization settings

Open **Settings** in the side menu.

| Setting | Who can change it | What it does |
|---|---|---|
| **Name** | Owner or admin | Shown in every app. |
| **Time zone and currency** | Owner or admin (others see them) | Every app shows dates in this time zone and money in this currency. |
| **Billing contact** | Owner or admin | Where invoices and receipts go, if not to the owner, plus an optional name for invoices. It also gets billing [notifications](/hub/accounts/notifications/) by email. |
| **Automations** | — | A link to the [Automations](/hub/automations/) page. |
| **Actions from email** | Owner or admin (others see them) | Which actions people may take straight from an email: finish workflow tasks, answer approvals, approve or decline join requests, mark action items done. Each is off until switched on. See [Actions from email](/hub/automations/actions-from-email/). |

## Transferring ownership

An organization always has exactly one owner. The owner can't leave, be removed or delete their account
until they transfer ownership or delete the organization.

Only the owner can transfer ownership:

1. In **Settings**, under **Transfer ownership**, choose the new owner. The list shows only **active
   members**: people who have confirmed their email address.
2. Type the new owner's name exactly as shown (or their email address if they haven't set a name).
   Capitals and extra spaces don't matter.
3. Select **Transfer ownership**.

The new owner takes over straight away and you become an admin. You can't undo it yourself: ask the new
owner to transfer it back.

Someone missing from the list? They need to accept their invitation and confirm their email address first.

## Delete an organization

Only the owner can. In **Settings**, under **Delete organization**, type the organization's name to confirm.
This deletes its data in **every** app and can't be undone, so [export](/hub/data/ownership-and-export/)
anything you need first.
