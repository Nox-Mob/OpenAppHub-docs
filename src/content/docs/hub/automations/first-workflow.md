---
title: "Your first workflow"
description: "Build a workflow from scratch, step by step: welcome each new member and give someone a task to call them."
sidebar:
  order: 2
---

This walkthrough builds a complete workflow in about ten minutes. It uses OpenCharterApp's members, but the same steps work for any app.

**What it will do:** when someone becomes a member, email them a welcome, and give the membership chair a task to call them within a week.

You need to be the owner, an admin, or someone allowed to build workflows ([Who can build workflows](/hub/automations/who-can-build/)).

## 1. Start a new workflow

1. In OpenAppHub, select **Automations** in the side menu.
2. Select **New workflow**. The designer opens.
3. In **Name**, type *Welcome new members*. Names are for you: choose one that says what it does, because it's what you'll see in **What happened** and in notifications if it ever can't finish.
4. Optionally, add a **Description** such as *Emails new members and asks the membership chair to call them.* Other people building workflows will thank you.

:::tip
The Automations page also has **Start from a template**, with a ready-made *Welcome new members*. Starting from it is quicker; building it yourself teaches you how the designer works.
:::

## 2. Choose what starts it

Under **When**, open **What starts it** and choose **Someone becomes a member** (from OpenCharterApp).

This trigger has no settings. It starts the workflow once for each new membership. Other triggers have settings: *A board meeting is coming up* asks how many days before. See [What starts a workflow](/hub/automations/triggers/) for all of them.

## 3. Add the welcome email

1. Select **Add the first step here** (or the **+** under **When**).
2. In **Add a step**, choose **Send an email** (in the *Do* group). The step is added and its settings open.
3. Under **To**, choose **The person it's about**. For this trigger that's the new member.
4. In **Subject**, type *Welcome, *, then select **Insert data** next to the field and choose **Member name** under *What started the run*. The subject now reads *Welcome, {{trigger.member.name}}*; under the field it's shown in words as *Welcome, [Member name]*.
5. In **Message**, write your welcome, inserting data where you want it, for example: *Welcome to [Chapter (or unit)]! Your [Membership level] membership is active until [Paid through].*

## 4. Add the task

1. Select the **+** under the email step and choose **Give someone a task**.
2. Under **To**, choose **Whoever holds a board seat**, then the **Seat** (one of your organization's board seats, for example *secretary*) and **Whose seat**: *unit*, the member's own chapter. Whoever holds that seat on the day gets the task, so you never edit the workflow when officers change.
3. In **Title**, type *Call * and insert **Member name**.
4. In **Note**, insert **Member email** so the task says how to reach them.
5. In **Due in (days, optional)**, type *7*.

The person gets the task on their OpenAppHub dashboard and is told about it under the bell (and by email, unless they turned that off). See [Notifications](/hub/accounts/notifications/).

## 5. Read it back

**In plain words**, beside the steps, reads your workflow back:

> When someone becomes a member:
> 1. Email "Welcome, [Member name]"
> 2. Task "Call [Member name]"

If something is missing, it's listed under the plain words, and you can't save until it's fixed: for example *"Send an email" needs a subject and a message.*

## 6. Test it

Select **Test run**. The workflow runs on your organization's real information **without doing anything**: no email is sent and no task is created. Each step says what it would have done ("Would email 1 person", "Would create 1 task"). If someone became a member recently, the test uses them; otherwise the trigger's data is empty and steps say so.

See [Testing, history and fixing problems](/hub/automations/testing-and-history/).

## 7. Save it

Make sure **On** is ticked, then select **Save workflow**. From now on, every new member gets the welcome and the chair gets the task. Each membership starts the workflow only once.

On the Automations page your workflow now has a card: its name, whether it's on, when it last ran, and **Edit** and **Delete**. **What happened**, lower on the page, lists every run and what each step did.

## Where to go next

- Add a condition so only some members get the task: [Steps reference](/hub/automations/steps/#condition-if--otherwise).
- Look members up on a schedule instead of waiting for an event: [Examples](/hub/automations/examples/).
- Ask someone to approve something before the workflow carries on: [Approvals](/hub/automations/approvals/).
