---
title: "Automations"
description: "Reminder emails and other things the apps do on their own, and how to change them."
sidebar:
  order: 6
---

**Automations** are the things the apps do on their own for your organization, like sending reminder emails before a board meeting. Each one starts switched on with sensible defaults, so you don't have to set anything up. Owners and admins can switch one off or change when it runs.

## Where to find them

- In OpenAppHub: **Settings** (your organization's settings), then **Automations**. You see every automation from every app your organization uses.
- In OpenBoardApp: **Email** in the menu, then **Reminders for** your organization. You see OpenBoardApp's automations.

Everyone in the organization can see the automations and what they last did. Only **owners and admins** can change them; for everyone else the settings are shown but can't be edited.

## What each one shows

| Part | Meaning |
|---|---|
| **Name and description** | What it does and who it emails |
| **On / Off** | Switch it off to stop it completely for this organization |
| **Settings** | When it runs, for example *Days before the meeting*. Shown when it's on |
| **Using the defaults** / **Changed for this organization** | Whether someone changed it; the defaults are listed alongside |
| **Last did something** | When it last sent anything, and what, for example *"2 meeting reminders emailed"*. *"Hasn't done anything yet"* until it first does |

Change a setting and select **Save**. To undo your changes, select **Use the defaults**.

## Today's automations

### OpenBoardApp: Meeting reminders

Emails each current board member (everyone with a current term and an account) before every scheduled meeting. The email has the meeting's title, date, start time, place and a link to it.

| Setting | Default | You can choose |
|---|---|---|
| **Days before the meeting** | 7 and 1 | Up to 5 numbers from 0 to 60, separated by commas. Each is one email; 0 sends it on the day of the meeting |

If a meeting is scheduled inside one of those windows (for example 5 days ahead, with reminders at 7 and 1 days), the board gets that window's reminder right away, then the next one when it comes. If the meeting moves to a new date, reminders are sent again for the new date. A cancelled or draft meeting gets no reminders.

### OpenBoardApp: Action item reminders

Emails the person an open action item is assigned to before it's due.

| Setting | Default | You can choose |
|---|---|---|
| **Days before it's due** | 2 | 0 to 30 (0 sends it on the day it's due) |
| **Once more when it's overdue** | On | On or off. Sent the day after the due date; items more than a week overdue are left alone |

## Things to know

- **People choose too.** Each person can turn reminders off for themselves on their **Account** page ([Your account](/hub/accounts/account-settings/)). An automation decides *when* reminders go out for the organization; each person decides *whether* they get them.
- **Times follow the organization's time zone** (set in **Settings**).
- **Nothing is sent twice.** Changing the days doesn't resend reminders that already went out.
- **More are coming.** Membership renewal reminders, scheduled board packages and more will appear here as the apps add them.
