---
title: "How workflows run"
description: "When a workflow starts, how often OpenAppHub checks, running once per thing, waiting, editing while runs are waiting, and limits."
sidebar:
  order: 3
---

Knowing how a workflow runs helps you build one that does exactly what you expect.

## A run

Each time something starts a workflow, OpenAppHub makes a **run**: one pass through the workflow's steps for that one thing (one payment, one new member, one meeting, one Monday morning). Runs are listed under **What happened** on the Automations page, newest first, with what each step did.

A run goes through the steps in order, top to bottom. Steps inside a condition, a loop or a group run where they are, then the run carries on after them.

A run ends:

- **Done**: every step that should run ran.
- **Failed**: a step failed and nothing handled it (see [Retries and "run after"](/hub/automations/steps/#retries-and-run-after)), or a **Stop the run** step ended it as failed. The owner is told under the bell ([Notifications](/hub/accounts/notifications/)).
- **Waiting**: a **Wait**, an **Ask for approval**, a retry, or an app's job (such as building the financial reports) paused it. It carries on by itself when the time comes or the answer arrives.

## When workflows start

OpenAppHub checks for things to do **every 5 minutes**. Expect a workflow to start within about 5 minutes of the thing that starts it.

| Kind of trigger | Examples | When it starts |
|---|---|---|
| **Something happens** | A payment is received, someone becomes a member, a meeting is scheduled, the books are closed | Within about 5 minutes of it happening |
| **Something is due** | A board meeting is coming up, an action item is overdue, a membership lapses | Once the thing reaches the point you chose (for example 5 days before the meeting), checked every 5 minutes |
| **On a schedule** | Every day at 7, every Monday at 9, the 1st of every month at 8 | At about the chosen hour, in your organization's time zone |

## Once for each thing

A workflow runs **once for each thing that starts it**:

- Each payment, new member or lapsed membership starts it once.
- *A board meeting is coming up* runs once per meeting, and again if the meeting moves to a new date.
- *An action item is overdue* runs once per item and due date.
- A schedule runs once per day, week or month.

Saving the workflow again doesn't make it run again for things it already ran for. So you can safely fix a typo in a message.

:::note[Switching on picks up what's already due]
Triggers like *A board meeting is coming up, 5 days before* start for anything **already** inside that window when the workflow is switched on: a meeting 3 days away gets its run straight away. Things that *happened* (a payment, a new member) while a workflow was off aren't gone back over when you switch it on.
:::

## Waiting and carrying on

A **Wait**, an **Ask for approval**, an app's job and a retry pause the run. OpenAppHub checks paused runs every 5 minutes and carries each on from exactly where it stopped: steps that already ran don't run again, and their results are still there for later steps.

### Editing a workflow while runs are waiting

A paused run carries on with the workflow **as it's saved when it carries on**, not as it was when the run started. That's usually what you want (a fixed message is used from then on), but:

- Don't delete or rename a step that runs are waiting on, such as an **Ask for approval** that people haven't answered yet: the run can't find where it was and may fail.
- Switching a workflow off doesn't stop runs that are already waiting.
- **Deleting** a workflow deletes its runs, including waiting ones, and any approvals they asked for.

## Workflows run as the organization

A workflow acts for the organization, not as the person who built it. Its lookups see your organization's information in every app, whatever the builder's own role, and its actions are done on the organization's behalf. Only owners, admins and people they choose can build workflows for that reason. See [Who can build workflows](/hub/automations/who-can-build/).

Each organization's workflows only ever see and change **that organization's** information. A national's workflow never reads a chapter's records, and a chapter's workflow never touches the national's ([Nationals and chapters](/hub/automations/who-can-build/#nationals-and-chapters)).

## Limits

| Limit | Value | What happens past it |
|---|---|---|
| Steps in one run | 10,000 (each time a step runs counts, including inside loops) | The run fails |
| Items in a **For each** | 5,000 | The step fails, saying how many items the list had: narrow the list first (for example with **Filter a list**) |
| Members a **Find members** returns | 500 by default, up to 5,000 (its **At most** setting) | The rest aren't included; **How many matched** still counts them all |
| Retries of one step | 10 | The step fails |
| Days to answer an approval | 365 | — |

If you're near a limit, narrow the lookup (by level, chapter or date) or split the work into separate workflows.
