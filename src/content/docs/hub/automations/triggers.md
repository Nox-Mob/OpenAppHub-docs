---
title: "What starts a workflow"
description: "Every trigger, its settings, when it starts, and the data it gives the workflow's steps."
sidebar:
  order: 6
---

Each workflow has exactly one trigger, chosen under **When** → **What starts it**. Only triggers from apps your organization uses are offered.

All the data a trigger gives is in **Insert data** under _What started the run_. In simple workflows it's written without `trigger.`, for example `{{member.name}}`.

## OpenAppHub

### On a schedule

Every day, every week on a day, or every month on a date, at an hour, in your organization's time zone.

| Setting         | Values                                                                                                     |
| --------------- | ---------------------------------------------------------------------------------------------------------- |
| **How often**   | daily, weekly, monthly                                                                                     |
| **Day**         | Weekly: 0 Sunday, 1 Monday … 6 Saturday. Monthly: 1 to 28 (so it works in every month). Not used for daily |
| **Hour (0–23)** | 0 is midnight, 13 is 1 PM                                                                                  |

| Data             | Meaning        |
| ---------------- | -------------- |
| **Today's date** | The day it ran |

A schedule has nothing "about" it: there's no member or meeting. Use a lookup step (such as **Find members**) to get the people or things to act on. That's how you do anything on a regular basis: "every Monday, find the action items that are overdue and remind each person".

## OpenCharterApp

All four member triggers give the same member data:

| Data                                      | Meaning                                                                                      |
| ----------------------------------------- | -------------------------------------------------------------------------------------------- |
| **Member name**, **Member email**         | Who it's about                                                                               |
| **Membership level**, **Membership term** | For example _Regular_, _1 year_                                                              |
| **Chapter (or unit)**                     | Their chapter, region or national                                                            |
| **Unit type (chapter, region, national)** | What kind of unit that is                                                                    |
| **Paid through**                          | When their membership ends                                                                   |
| Your own member fields                    | Fields your organization adds, such as _Rank_ or _Branch_ (`{{trigger.member.fields.rank}}`) |

### A payment is received

When a dues or other payment is paid, online or recorded by hand. Starts once per payment. Extra data:

| Data                | Meaning                                |
| ------------------- | -------------------------------------- |
| **Amount**          | In your currency                       |
| **Paid by**         | How it was paid, such as card or check |
| **What it was for** | The payment's purpose, such as dues    |

### Someone becomes a member

When a membership becomes active for someone new to that chapter or organization. Renewals don't start it.

### A membership lapses

When a membership's grace period ends without a renewal. Starts once per membership that lapses.

## OpenBoardApp

### A board meeting is coming up

When a scheduled meeting is this many days away or less. Starts once per meeting, and again if the meeting moves to a new date.

| Setting                     | Values                  |
| --------------------------- | ----------------------- |
| **Days before the meeting** | 0 to 60 (0: on the day) |

| Data                                                              | Meaning                                      |
| ----------------------------------------------------------------- | -------------------------------------------- |
| **Meeting title**, **Meeting date**, **Start time**, **Location** | The meeting                                  |
| **Days away**                                                     | How many days until it, when the run started |

This trigger is **about a meeting**, so steps that need a meeting (such as OpenLedgerApp's **Add the financial reports to the meeting**) can be used with it.

### A board meeting is scheduled

As soon as a meeting is scheduled (a draft doesn't count until it's scheduled). Same meeting data, except start time. Also about a meeting.

### An action item is overdue

When an open action item is this many days past its due date. Starts once per item and due date, so a new due date starts it again.

| Setting           | Values  |
| ----------------- | ------- |
| **Days past due** | 0 to 60 |

| Data                           | Meaning                                                   |
| ------------------------------ | --------------------------------------------------------- |
| **Action item**                | Its title                                                 |
| **Due date**, **Days overdue** |                                                           |
| **Assigned to**                | The person's name. _The person it's about_ is that person |

## OpenLedgerApp

### The books are closed for a month

When the books are locked through a later date (closing a month locks them through its last day). Starts once each time the lock date moves forward.

| Data                | Meaning                                   |
| ------------------- | ----------------------------------------- |
| **Locked through**  | The date the books are now locked through |
| **Month (YYYY-MM)** | For example _2026-10_                     |
| **Month name**      | For example _October 2026_                |

Use **Month totals** (last closed month) as the first step to get that month's income, spending and net.

## Coming later

Triggers for forms, award requests and certified elections arrive with those features in OpenCharterApp. The Automations page's templates show which ones are waiting for them.
