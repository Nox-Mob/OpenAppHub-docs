---
title: "The audit log"
description: "Who changed what in the board's records, and when."
sidebar:
  order: 2
---

A board's records are official. People may need to know later what was decided, and who changed what. So OpenBoardApp writes down every change to the board's records. The **Audit log** shows them, with the newest at the top.

## What's recorded

Every change to:

- meetings and agenda items;
- attendance;
- motions and votes;
- minutes;
- documents;
- action items;
- terms and committees.

## What each entry shows

| Column     | What it means                                                                         |
| ---------- | ------------------------------------------------------------------------------------- |
| **When**   | The date and time of the change, in your organization's time zone.                    |
| **Who**    | The person who made the change.                                                       |
| **Action** | Whether something was added, changed or deleted.                                      |
| **Record** | What kind of record it was, like _Meeting_, _Motion_ or _Action item_, and which one. |

**Example:** "March 4, 7:42 PM · Pat Lee · Changed · Minutes: February board meeting" tells you Pat edited February's minutes on March 4.

## Who can see it

The owner, administrators, the chair and the secretary. Others see _Only officers can view the audit log_. A named role can also let someone read it.

## Can it be changed?

No. Nobody can edit or delete the audit log, not even the owner. It stays readable even when your plan makes OpenBoardApp read-only.

## Other logs

This log covers OpenBoardApp's records. Changes to your organization itself, like people joining, role changes and security settings, are in [OpenAppHub's audit log](/hub/accounts/audit-log/).
