---
title: "Audit log"
description: "A record of who changed what in your organization: people, roles, invitations and security settings."
sidebar:
  order: 6
---

The audit log is a list of important changes to your organization. Each entry says **what** changed, **who** changed it, and **when**. It helps you answer questions like "Who gave Sam admin rights?" or "When did we change our time zone?" It's also useful if you ever need to show an auditor that changes are tracked.

## Where to find it

The owner and admins can open **Audit log** in the side menu. The newest changes are at the top. Times are shown in your organization's time zone. To see earlier entries, select **Show older**.

## What's in it

- **Your organization:** when it was created or renamed, and changes to its time zone or currency.
- **People:** someone joining, leaving or being removed, and ownership being handed over.
- **Roles:** changes to someone's OpenAppHub role, their role in each app (including **No access**), and named roles being made, changed or deleted.
- **Invitations:** invitations being sent, accepted or cancelled. (The secret part of the invitation link is never written to the log.)
- **Security and settings:** turning on or off **Require two-step sign-in for the owner and admins**, letting app admins change roles in their own app, and which actions are allowed from email.

Each entry shows the value before and after the change, so you can see exactly what was different.

## Can it be changed?

No. Nobody can edit or delete entries, not even the owner. The log is kept even after an organization is deleted.

## Changes inside each app

This log covers your organization itself. Each app also keeps its own log of changes to its own records. For example, OpenBoardApp records changes to meetings and minutes, and OpenLedgerApp records every change to the books. See each app's docs:

- [OpenBoardApp's audit log](/board/records/audit-log/)
- [OpenCharterApp's records and reports](/charter/records/audit-log-and-reports/)
- OpenLedgerApp: **Settings** > **History**
