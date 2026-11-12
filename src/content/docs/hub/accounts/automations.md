---
title: "Automations"
description: "Build your own workflows in the designer (drag-and-drop steps that use each other's data) or as a simple When, If, Then; share them with chapters; change the ready-made reminders."
sidebar:
  order: 6
---

**Automations** are the things the apps do on their own for your organization. There are two kinds, both on the **Automations** page in OpenAppHub's side menu:

- **Your workflows:** ones your organization builds itself, for whatever it needs. *When* something happens, *if* it matches what you choose, *then* do these things.
- **Ready-made automations:** reminders the apps send on their own, like emails before a board meeting. They start switched on; you only change them if you want to.

## Your workflows

There are two ways to build one, both on the **Automations** page:

- **New workflow** opens the **designer**: steps you add and drag into order, where any step can use what an earlier step found. Loops, variables, waits and retries are all there. See [The designer](#the-designer) below.
- **Simple workflow** opens a short form: **When** something happens, **If** it matches, **Then** do these things. Good for a quick reminder or routing.

You can open any simple workflow in the designer later (**Open in designer** on its card). Saved from there, it becomes a designer workflow.

## Simple workflows

A simple workflow has three parts. The page reads it back to you **in plain words** as you build it, so you can check it says what you mean before you save.

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

## The designer

The designer works like Power Automate: a **When** at the top, then steps in order. The main idea is that **anything a step finds or makes can be used by any step after it**. A lookup of members gives you a list. A **For each** goes through that list, and each email inside it can use the member's name and email address.

### Adding and arranging steps

- Select **+** between two steps (or under **When**) and choose a step. Steps are grouped: *Do*, *Decide and repeat*, *Data*, *Variables*, *Time and flow*, then one group for each app.
- **Drag** a step by its handle (⋮⋮) to anywhere else, including inside a condition, a case, a loop or a group. The ↑ and ↓ buttons move it one place; ✕ deletes it.
- Select a step to open its settings. You can give it a name, such as "Ending soon"; that name is how later steps refer to it.

### Using data from earlier steps

Next to every field there's **Insert data**. It lists what you can use at that point, grouped by where it comes from:

- **What started the run:** for example the member who paid, or the meeting that's coming up.
- **Each earlier step's results:** for example *Find members → Members* (a list) and *How many*.
- **The current item** when you're inside a **For each**: for example *Each of Find members → Email*.
- **Variables** made before this step.
- **Today's date.**

Insert it where your cursor is; you can mix it with your own text, such as "Time to renew, " followed by the member's name. Underneath the field, each piece of data is shown in words so you can check it. For a step that needs a list (**For each**, **Filter**, **Join**…), the button is **Choose a list** and only lists are offered.

### The steps

| Step | What it does |
|---|---|
| **Send an email** | To a role, a seat, an office or a person; **an email address from the data** (such as the current member's); or **everyone in a list** |
| **Give someone a task** | A task on their OpenAppHub dashboard |
| **Condition (if / otherwise)** | Steps for *If yes* and steps for *If no*. Compare any data with a value or other data: is, is not, more or less than, between, one of, contains, empty |
| **Switch (cases)** | Different steps by a value, like a member's level, with steps for *Anything else* |
| **For each** | The steps inside it run once per item in a list (up to 5,000) |
| **Group (scope)** | Keeps steps together, for example so one step after it can handle a failure in any of them |
| **Compose a value** | Builds text or a value once, to use later |
| **Filter a list** | Keeps only the items that match, for example members whose level is Annual |
| **Reshape a list** | Makes a new list with the fields you choose |
| **Join a list into text** | For example every name, separated by commas |
| **Count, sum, min, max** | How many items, or the total, average, smallest or largest of a field |
| **Make a variable**, **Set**, **Add to**, **Append to** | A value steps can change as the run goes, like a running total or a list of names. Make variables at the top of the workflow |
| **Wait** | For minutes, hours or days, or until a date; the run carries on afterwards |
| **Stop the run** | Ends here, as succeeded or failed, with a message |

**Steps from your apps:**

| App | Step | Gives later steps |
|---|---|---|
| OpenCharterApp | **Find members**: by standing (current, lapsed, pending, any), level, chapter, membership ending within so many days, or joined in the last so many days | The members (name, email, level, term, paid through, joined, chapter, standing, your member fields such as rank) and how many |
| OpenBoardApp | **Find board meetings**: in a window of days, by status | The meetings (title, date, time, place, days away) |
| OpenBoardApp | **Find action items**: open, overdue, done or any | The items (title, due date, who it's assigned to and their email, days overdue) |
| OpenBoardApp | **Create an action item**: assigned by email | The new item |
| OpenLedgerApp | **Month totals**: the last closed month, this month, or a date's month | Income, spending, net, and whether the books are closed for it |
| OpenLedgerApp | **Add the financial reports to the meeting**: choose which meeting from an earlier step | What it did |

### Retries and "run after"

Open **Settings: retries and run after** on any step:

- **Retry up to (times):** if the step fails, it's tried again, up to 10 times. You choose how long to wait first, and whether each wait is the same or twice as long.
- **Run this step after:** by default a step runs when the one before it **succeeded**. You can make it run after an earlier step at the same level **failed** or was **skipped** instead. That's how you handle a problem: for example, if a lookup fails, email the treasurer. A failure handled this way doesn't fail the run.

### Testing

**Test run** runs the workflow on your organization's real information without doing anything: lookups run (they only read), but emails, tasks, the apps' actions and waits are only described ("Would email 3 people"). Each step shows how it went, and you can open what it gave later steps. If there's been a recent real event of the kind that starts the workflow, the test uses it.

Before you can save, **In plain words** lists anything to fix: a step that uses data from a step after it, a loop's items used outside the loop, a variable used before it's made, an email without a subject.

### Three examples

**Renewal reminders.** When: *On a schedule*, daily at 7. **Find members** whose membership ends within 30 days. **For each** of them: **Send an email** to *Each of Find members → Email*, subject "Time to renew, [Name]", message "Your membership ends on [Paid through]."

**Nudge late action items.** When: *On a schedule*, every Monday. **Find action items**, overdue. **For each**: **Send an email** to the item's email, "[Title] is [Days overdue] days late".

**A loss warning.** When: *The books are closed for a month*. **Month totals**, last closed month. **Condition**: *Net* is less than 0 → *If yes*: email the owner and admins "Loss in [Month]".

## Saving, switching off, history

Nothing runs until you select **Save workflow**; the page lists anything missing first. A designer workflow that waits (or retries a step) carries on by itself when the time comes, and **What happened** shows each step of a run. Each workflow has an on/off switch, **Edit** and **Delete**. **What happened** lists its latest runs, newest first; a run that couldn't do something says why (for example, nobody holds the seat). A workflow does its steps once for each thing that starts it, so the same payment never sends two emails.

## Who can build them

The owner and OpenAppHub admins, and anyone they choose: on the **Members** page, tick **Can build workflows** for that person (or add them under **Who can build workflows** on the Automations page). Everyone else in the organization can see the workflows but not change them.

:::caution[Workflows run as the organization]
A workflow acts for the organization, not as the person who built it: its steps can look up and change information in every app your organization uses, whatever the builder's own role in those apps. That's why OpenAppHub asks you to confirm before letting someone build workflows.
:::

## Nationals and chapters

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
- **More are coming.** The apps will add more Whens, lookups and actions (forms, approvals, awards).
