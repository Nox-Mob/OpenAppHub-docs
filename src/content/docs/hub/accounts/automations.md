---
title: "Automations"
description: "Build your own workflows (When, If, Then), share them with chapters, and change the ready-made reminders."
sidebar:
  order: 6
---

**Automations** are the things the apps do on their own for your organization. There are two kinds, both on the **Automations** page in OpenAppHub's side menu:

- **Your workflows:** ones your organization builds itself, for whatever it needs. *When* something happens, *if* it matches what you choose, *then* do these things.
- **Ready-made automations:** reminders the apps send on their own, like emails before a board meeting. They start switched on; you only change them if you want to.

## Your workflows

A workflow has three parts. The page reads it back to you **in plain words** as you build it, so you can check it says what you mean before you save.

### When: what starts it

Choose one. The apps your organization uses add their own.

| When | From | You choose |
|---|---|---|
| **A payment is received** | OpenCharterApp | — |
| **Someone becomes a member** | OpenCharterApp | — |
| **A membership lapses** | OpenCharterApp | — |
| **A board meeting is coming up** | OpenBoardApp | How many days before the meeting |
| **A board meeting is scheduled** | OpenBoardApp | — |
| **An action item is overdue** | OpenBoardApp | How many days overdue |
| **The books are closed for a month** | OpenLedgerApp | — |
| **On a schedule** | OpenAppHub | Every day, every week on a day, or every month on a date, at an hour (your organization's time zone) |

### If: only when it matches (optional)

Select **Add If** to run steps only when conditions are true, for example *Rank is at most PFC*. Each condition is a **Field** (anything the When carries: the member's level, their chapter, the amount, and your own member fields like Rank or Branch), a **Comparison** and a **Value**. Choose whether **all of these** or **any of these** must be true.

Add more with **Add Else if**: the first one that matches runs, and the rest are skipped. **Otherwise** runs when none matched. Lists with an order, like rank, compare by their place in the list, so *between SPC and SFC* means every rank from SPC up to SFC.

**Always** runs every time, before any If.

### Then: what to do

Add steps with **Add a step**; they run in order. Use the arrows to move one up or down.

| Step | What it does |
|---|---|
| **Send an email** | To the people you choose, with your **Subject** and **Message** |
| **Give someone a task** | A task on their OpenAppHub dashboard (and in their task summary email), with an optional note and due date. They select **Done** when it's finished |
| **Add the financial reports to the meeting** | OpenLedgerApp's board package (income, balance, budget against actual, funds) into the meeting's documents, ready for its packet. Choose **As of**: the last closed month, today (the year so far), or a date. Only with a When that has a meeting |

**Who gets it** can be:

- **People with a role** in your organization (owners, admins, members, viewers).
- **The person it's about** (the member who paid, for example).
- **A particular person** you pick.
- **Whoever holds a board seat** (OpenCharterApp): the seat in the member's own chapter, the level above, their region, or the national. Whoever holds it on the day gets it, so you never edit the workflow when officers change.
- **An officer of the board** (OpenBoardApp): the chair, secretary or treasurer.

Messages and task titles can include details from the When, written in double braces, like `{{member.name}}`. The page lists the ones you can use.

### Two examples

**Award recommendations routed by rank.** When *a payment is received* (or, once forms arrive, *a form is received*). If *Rank is at most PFC*: give *their chapter's president* a task. Else if *Rank is between SPC and SFC*: give *their region's president* a task. Otherwise: give *the national's president* a task.

**Reports before every board meeting.** When *a board meeting is coming up*, 5 days before. Always: *add the financial reports to the meeting*, as of the last closed month.

### Saving, switching off, history

Nothing runs until you select **Save workflow**; the page lists anything missing first. Each workflow has an on/off switch, **Edit** and **Delete**. **What happened** lists its latest runs, newest first; a run that couldn't do something says why (for example, nobody holds the seat). A workflow does its steps once for each thing that starts it, so the same payment never sends two emails.

### Who can build them

Owners and admins, and anyone they choose: on the **Members** page, tick **Can build workflows** for that person (or add them under **Who can build workflows** on the Automations page). Everyone else in the organization can see the workflows but not change them.

### Nationals and chapters

- A national can tick **Share with chapters** on a workflow. Each chapter's own organization sees it under **Shared by your national** and selects **Use it** to turn it on. It then runs on **the chapter's own information only**: a national's workflow never reads or changes a chapter's records, and a chapter's never touches the national's. **Stop using** turns it off for the chapter.
- The national decides whether chapters may also build their own (**Chapters may build their own workflows**).

## Ready-made automations

They're under **Ready-made automations** on the same page, and in OpenBoardApp under **Email**, then **Reminders for** your organization.

Everyone in the organization can see the automations and what they last did. Only **owners and admins** can change them; for everyone else the settings are shown but can't be edited.

### What each one shows

| Part | Meaning |
|---|---|
| **Name and description** | What it does and who it emails |
| **On / Off** | Switch it off to stop it completely for this organization |
| **Settings** | When it runs, for example *Days before the meeting*. Shown when it's on |
| **Using the defaults** / **Changed for this organization** | Whether someone changed it; the defaults are listed alongside |
| **Last did something** | When it last sent anything, and what, for example *"2 meeting reminders emailed"*. *"Hasn't done anything yet"* until it first does |

Change a setting and select **Save**. To undo your changes, select **Use the defaults**.

## Today's ready-made automations

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
- **More are coming.** The apps will add more Whens and steps (forms, approvals, renewal reminders), and a drag-and-drop designer with loops, waits and variables is planned.
