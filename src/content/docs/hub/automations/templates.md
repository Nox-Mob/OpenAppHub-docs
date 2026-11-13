---
title: "Templates"
description: "Ready-made workflows to start from: what each does, how to adjust it, and the ones coming with new features."
sidebar:
  order: 12
---

**Start from a template**, on the Automations page, lists ready-made workflows. **Use this** opens one in the designer with its name, description and steps filled in. Change anything you like and select **Save workflow**. Nothing runs until you save, and the saved workflow is yours: changing it later doesn't change the template, and new versions of the template don't change it.

Templates are shown to the people who can build workflows. A template your organization can't use yet (because it uses an app you don't have) says which app it needs.

## The templates

### Renewal reminders

_OpenCharterApp._ **Every Monday at 9**, **Find members** whose membership ends in the coming week (current members, ending within 6 days), then **for each** of them, email them: _Your membership ends on [Paid through]_, with a reminder to renew.

Adjust: the day and hour; the window (_Membership ends within_), but keep it shorter than the time between runs so nobody gets two reminders for the same end date, or add a second reminder as its own workflow; the wording.

### Lapsed membership notice

_OpenCharterApp._ **When a membership lapses**, email the member that it has lapsed and how to renew, and give the chapter's **treasurer** a task to follow up.

Adjust: the seat that gets the task (a membership chair, if you have one); the tone of the email.

### Welcome new members

_OpenCharterApp._ **When someone becomes a member**, email them a welcome.

Adjust: add a task for someone to call them (see [Your first workflow](/hub/automations/first-workflow/)).

### Nudge overdue action items

_OpenBoardApp._ **When an action item is 3 days overdue**, email the person it's assigned to.

Adjust: the number of days. OpenBoardApp's ready-made action item reminders already email once the day after the due date ([Ready-made reminders](/hub/automations/ready-made/)); this is a second, later nudge.

### Financial reports before each meeting

_OpenBoardApp and OpenLedgerApp._ **When a board meeting is 5 days away**, add the financial reports, as of the last closed month, to the meeting's documents and packet.

Adjust: the days before; **As of** (_today_ for the year so far).

### Warn the treasurer about a loss

_OpenLedgerApp and OpenBoardApp._ **When the books are closed for a month**, get the **Month totals**, and **if net is below zero**, email the board's **treasurer** with the month's income, spending and net.

Adjust: the threshold (a loss of more than an amount); who's told (the chair as well).

### Coming soon

| Template                              | Waiting for                                                                                                        |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| **Election results into board terms** | Elections in OpenCharterApp: when an election is certified, start the winners' terms in OpenBoardApp and tell them |
| **Route award requests for approval** | Awards in OpenCharterApp: send each request to its approvers in order, and tell the member the outcome             |

They appear in the gallery now, marked _Coming with …_, and become usable when those features arrive.
