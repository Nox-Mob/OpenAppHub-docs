---
title: "Automations"
description: "What automations are, the three kinds (your workflows, ready-made reminders, and notifications), and where to start."
sidebar:
  order: 1
  label: "Overview"
---

**Automations** are the things the apps do on their own for your organization, so nobody has to remember to. They all live on the **Automations** page in OpenAppHub's side menu.

There are two kinds of automation, and one related feature that isn't an automation:

|                                       | What it is                                                                                                | Who sets it up                                        | Example                                                                                    |
| ------------------------------------- | --------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| **Your workflows**                    | Automations your organization builds for itself, to fit how it works                                      | Owners, admins, and people they choose                | "When a membership is 30 days from ending, email the member and give the treasurer a task" |
| **Ready-made automations**            | Reminders the apps already send, which you can adjust or switch off                                       | Already on; owners and admins can change them         | "Email the board 7 days and 1 day before each meeting"                                     |
| **Notifications** (not an automation) | What OpenAppHub tells each person about: payments that didn't go through, someone joining, a task for you | Nobody builds them; each person chooses what they get | "A payment didn't go through" under the bell                                               |

Notifications are explained in [Notifications](/hub/accounts/notifications/). This section is about workflows and the ready-made automations.

## What a workflow is

A workflow is a short list of instructions: **when** something happens, **do** these things. For example:

> **When** someone becomes a member, **send** them a welcome email, **then** give the membership chair a task to call them.

Every workflow has:

- **One thing that starts it** (a _trigger_): something happening in one of your apps, such as a payment, a meeting coming up, or the books being closed for a month; or a schedule, such as every Monday at 9.
- **Steps**, in order: send an email, give someone a task, ask for an approval, look something up, add the financial reports to a meeting, and more. Steps can be inside conditions ("only if the amount is over $500"), loops ("for each member whose membership ends this month") and groups.

Anything a step finds or makes can be used by the steps after it. A step that looks up members gives later steps a list of members; a loop goes through that list; an email inside the loop uses each member's name and email address.

## Where to start

1. **Start from a template.** The Automations page has ready-made workflows (renewal reminders, a welcome email, nudging overdue action items, reports before meetings) that you adjust and save. See [Templates](/hub/automations/templates/).
2. **Follow the walkthrough.** [Your first workflow](/hub/automations/first-workflow/) builds one from scratch, step by step.
3. **Learn the pieces.** [How workflows run](/hub/automations/how-workflows-run/), [The designer](/hub/automations/designer/), [Using data from earlier steps](/hub/automations/using-data/), then the references for [triggers](/hub/automations/triggers/), [steps](/hub/automations/steps/) and [who gets it](/hub/automations/recipients/).
4. **Build them well.** [Building workflows that work well](/hub/automations/good-practice/) and [Examples](/hub/automations/examples/).

## Two ways to build

- **New workflow** opens the [designer](/hub/automations/designer/): steps you add and drag into order, with conditions, loops, variables, waits, approvals and retries. Use it for anything beyond a single "when this, do that".
- **Simple workflow** opens a short form: **When** something happens, **If** it matches, **Then** do these things. See [Simple workflows](/hub/automations/simple-workflows/). You can open a simple workflow in the designer later.

## Things to know before you build

- **Workflows run as the organization**, not as the person who built them. Their steps can read and change information in every app your organization uses. See [Who can build workflows](/hub/automations/who-can-build/).
- **Nothing runs until you save**, and a **Test run** shows what a workflow would do without doing anything. See [Testing, history and fixing problems](/hub/automations/testing-and-history/).
- **Each workflow runs once for each thing that starts it**: the same payment never sends two welcome emails, even if the workflow is saved again.
- **Times follow your organization's time zone**, set in **Organization settings**.
