---
title: "Ready-made reminders"
description: "The reminders the apps send on their own (meetings and action items), their settings, and how they relate to workflows and each person's choices."
sidebar:
  order: 13
---

Some automations come ready-made. They start **switched on**, so they work without anyone building anything; owners and admins can change or switch them off.

They're under **Ready-made automations** on the Automations page, and in OpenBoardApp under **Email**, then **Reminders for** your organization.

Everyone in the organization can see them and what they last did. Only **owners and admins** can change them.

## What each one shows

| Part | Meaning |
|---|---|
| **Name and description** | What it does and who it emails |
| **On / Off** | Switch it off to stop it completely for this organization |
| **Settings** | When it runs, for example *Days before the meeting*. Shown when it's on |
| **Using the defaults** / **Changed for this organization** | Whether someone changed it; the defaults are listed alongside |
| **Last did something** | When it last sent anything, and what: *"2 meeting reminders emailed"*. *"Hasn't done anything yet"* until it first does |

Change a setting and select **Save**. **Use the defaults** undoes your changes.

## OpenBoardApp: Meeting reminders

Emails each current board member (everyone with a current term and an account) before every scheduled meeting, with the meeting's title, date, start time, place and a link.

| Setting | Default | You can choose |
|---|---|---|
| **Days before the meeting** | 7 and 1 | Up to 5 numbers from 0 to 60, separated by commas. Each is one email; 0 sends it on the day |

If a meeting is scheduled inside one of those windows (5 days ahead, with reminders at 7 and 1 days), the board gets that window's reminder right away, then the next one when it comes. If the meeting moves to a new date, reminders are sent again for the new date. Cancelled and draft meetings get no reminders.

## OpenBoardApp: Action item reminders

Emails the person an open action item is assigned to before it's due. The email says the item is waiting for them and, if your organization allows it, has a **Mark it done** button ([Actions from email](/hub/automations/actions-from-email/)).

| Setting | Default | You can choose |
|---|---|---|
| **Days before it's due** | 2 | 0 to 30 (0 sends it on the due date) |
| **Once more when it's overdue** | On | Sent the day after the due date; items more than a week overdue are left alone |

## Ready-made reminders, workflows, and each person's choice

- **Ready-made reminders** do one job well, with a few settings. Start here.
- **Workflows** are for anything else, or for a different reminder alongside, such as a second nudge a week later ([Templates](/hub/automations/templates/)).
- **Each person** can turn reminders off for themselves on their **Account** page ([Your account](/hub/accounts/account-settings/)). A ready-made automation decides *when* reminders go out for the organization; each person decides *whether* they get them. Workflow emails are your organization's own messages and aren't affected by that choice.
- **Nothing is sent twice.** Changing the days doesn't resend reminders that already went out.
