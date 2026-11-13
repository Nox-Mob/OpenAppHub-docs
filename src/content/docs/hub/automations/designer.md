---
title: "The designer"
description: "Adding, arranging and naming steps; putting steps inside conditions, loops and groups; reading a workflow back in plain words; saving and sharing."
sidebar:
  order: 4
---

**New workflow** (and **Edit** on a designer workflow) opens the designer. A workflow reads from top to bottom: **When** at the top, then its steps in order.

## The parts of the page

| Part | What it's for |
|---|---|
| **Name** and **Description (optional)** | What the workflow is called and what it does. The name appears in **What happened**, in notifications when a run can't finish, and in approval requests |
| **On** | Whether it runs. Untick to keep a workflow without it running |
| **Share with chapters** | For a national with chapters: offer it to them. See [Nationals and chapters](/hub/automations/who-can-build/#nationals-and-chapters) |
| **When** | What starts it, and that trigger's settings. See [What starts a workflow](/hub/automations/triggers/) |
| **The steps** | Each step as a card. Select one to open its settings |
| **In plain words** | The whole workflow read back as sentences, and anything that needs fixing before you can save |
| **Test run** | Runs it without doing anything, and shows what each step would do |
| **Save workflow** | Saves it. Nothing runs until you do |

## Adding a step

1. Select **+** where you want the step: under **When**, between two steps, or inside a condition, case, loop or group (**Add the first step here** when a list is empty).
2. Choose a step in **Add a step**. Steps are grouped:
   - **Do**: send an email, give someone a task, ask for approval.
   - **Decide and repeat**: condition, switch, for each, group.
   - **Data**: compose, filter, reshape, join, count / sum.
   - **Variables**: make, set, add to, append to.
   - **Time and flow**: wait, stop the run.
   - One group for each app your organization uses, with its lookups and actions.
3. The new step's settings open. Fill them in.

Every step is described in the [Steps reference](/hub/automations/steps/).

## Arranging steps

- **Drag** a step by its handle (⋮⋮) to anywhere else: before or after another step, or into a condition's *If yes* / *If no*, a switch's cases, a loop or a group. Steps inside a container move with it.
- **↑** and **↓** move a step one place within its list, for keyboards and small screens.
- **✕** deletes a step (and everything inside it, for a container). Other steps that used its results show a problem until you fix them.

## Naming steps

Each step has **Step name (optional)**. A name like *Ending soon* makes **In plain words**, **Insert data** and **What happened** much easier to read than *Find members* three times over. Name every step whose results later steps use.

Behind the scenes each step also has a short id, made from its name when you add it. Later steps refer to it by that id, so renaming a step later doesn't break them.

## Containers

Four steps hold other steps:

- **Condition (if / otherwise)** has *If yes* and *If no*.
- **Switch (cases)** has a list of steps for each case, and *Anything else*.
- **For each** runs its steps once per item in a list.
- **Group** keeps steps together, so a later step can run "after the group failed".

Containers can go inside containers: a condition inside a loop, a loop inside a group. Keep nesting shallow where you can: three levels is plenty for nearly anything, and [Building workflows that work well](/hub/automations/good-practice/) has ways to keep it simple.

## In plain words

As you build, **In plain words** reads the workflow back, for example:

> When a board meeting is coming up (5 days before):
> 1. Find board meetings
> 2. For each item in [Find board meetings → Meetings]:
>    - Email "Agenda for [Each of Find board meetings → Title]"

Underneath, it lists anything that would stop the workflow working. You can't save until the list is empty. Common ones:

| Problem | What it means | Fix |
|---|---|---|
| *"X" uses a step that comes after it.* | A field uses data from a later step | Move the step, or use data from an earlier one |
| *"X" uses a loop's items outside that loop.* | **Each item of …** is only there inside its **For each** | Move the step into the loop |
| *"X" uses variable "total" before it's made.* | Variables must be made before use | Add **Make a variable** at the top |
| *Make variables at the top of the workflow.* | **Make a variable** is inside another step | Drag it to the top level |
| *"X" needs a subject and a message.* / *needs a title.* / *needs a list.* | A required setting is empty | Fill it in |
| *"X" needs to say what is to be approved.* | An **Ask for approval** has no **What needs approving** | Fill it in |

## Saving

Select **Save workflow**. The server checks the workflow again: a step it doesn't know (an app your organization doesn't use any more, for example) is refused with a message.

After saving, the workflow's card on the Automations page shows whether it's on and when it last ran. Open it again with **Edit**.

## Simple workflows in the designer

A workflow made with **Simple workflow** opens in the short form. **Open in designer** on its card converts it: its *Always*, *If*, *Else if* and *Otherwise* become a condition and steps, and data such as `{{member.name}}` becomes `{{trigger.member.name}}`. Once saved from the designer it stays a designer workflow. See [Simple workflows](/hub/automations/simple-workflows/).
