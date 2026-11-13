---
title: "Simple workflows"
description: "The When, If, Then form: one trigger, optional conditions, and steps. When to use it, and moving to the designer."
sidebar:
  order: 11
---

**Simple workflow** on the Automations page opens a short form for the most common kind of workflow: **when** something happens, **if** it matches, **then** do these things. It reads back **in plain words** as you build it.

Use a simple workflow for one trigger and a few steps, perhaps routed by a condition: a reminder, a thank-you, routing a request by rank. Use the [designer](/hub/automations/designer/) when you need lookups, loops, approvals, waits, variables or error handling.

## When: what starts it

Choose a trigger and its settings. They're the same as in the designer: see [What starts a workflow](/hub/automations/triggers/).

## If: only when it matches (optional)

Select **Add If** to run steps only when conditions are true, for example _Rank is at most PFC_. Each condition is a **Field** (anything the trigger carries: the member's level, their chapter, the amount, and your own member fields like Rank or Branch), a **Comparison** and a **Value**. Choose whether **all of these** or **any of these** must be true.

- **Add Else if** adds another branch: the first branch that matches runs, and the rest are skipped.
- **Otherwise** runs when no branch matched.
- **Always** runs every time, before any If.

Lists with an order, like rank, compare by their place in the list: _between SPC and SFC_ means every rank from SPC up to SFC.

## Then: what to do

Add steps with **Add a step**; they run in order. Use the arrows to move one up or down.

| Step                                         | What it does                                                                                                                                        |
| -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Send an email**                            | To the people you choose, with your **Subject** and **Message**                                                                                     |
| **Give someone a task**                      | A task on their OpenAppHub dashboard (and in their task summary email), with an optional note and due date                                          |
| **Add the financial reports to the meeting** | OpenLedgerApp's board package into the meeting's documents. **As of**: the last closed month, today, or a date. Only with a trigger about a meeting |

**Who gets it** is chosen the same way as in the designer: see [Who gets it](/hub/automations/recipients/).

Messages and task titles can include data from the trigger, written in double braces, such as `{{member.name}}`. The form lists what you can use.

## Two examples

**Award recommendations routed by rank.** When _a payment is received_. If _Rank is at most PFC_: give _their chapter's president_ a task. Else if _Rank is between SPC and SFC_: give _their region's president_ a task. Otherwise: give _the national's president_ a task.

**Reports before every board meeting.** When _a board meeting is coming up_, 5 days before. Always: _add the financial reports to the meeting_, as of the last closed month.

## Moving to the designer

**Open in designer** on a simple workflow's card converts it. _Always_ becomes the first steps, each _If_ / _Else if_ becomes a condition (nested for each _Else if_), and _Otherwise_ becomes the last _If no_. Data like `{{member.name}}` becomes `{{trigger.member.name}}`. Nothing changes until you save; once saved from the designer it stays a designer workflow.
