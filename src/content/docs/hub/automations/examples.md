---
title: "Examples"
description: "Complete workflows for common needs, step by step: renewals, approvals, board preparation, money, and summaries."
sidebar:
  order: 17
---

Each example is a complete workflow. Build it in the designer; names in *italics* are step names you choose.

## Membership

### Renewal reminders, a month ahead and a week ahead

Two workflows, each looking at a window about as long as the time between its runs, so each member gets each reminder once. (Windows count from today up to and including the last day, so a date right on the edge can fall in two runs. Keep the window a day shorter than the gap between runs, as the weekly template does with 6 days, when that matters.)

**A month ahead.**

> **When:** On a schedule, monthly, day 1, 9.
> 1. **Find members** (*Next month*): standing *current*, membership ends within *30* days.
> 2. **For each** item of *Next month → Members*: **Send an email** to the item's *Email*: "Your membership ends on [Paid through]: renew any time from your member page."

**A week ahead.** The template **Renewal reminders** as it comes: every Monday, members ending within 6 days.

### Welcome, then check in after a month

> **When:** Someone becomes a member.
> 1. **Send an email** to *the person it's about*: "Welcome, [Member name]".
> 2. **Wait** 30 days.
> 3. **Give someone a task** to *the chapter's secretary*: "Check in with [Member name]", due in 7 days.

### Weekly summary of new members to the board

> **When:** On a schedule, weekly, Monday, 8.
> 1. **Find members** (*New*): standing *any*, joined in the last *7* days.
> 2. **Condition**: *New → How many* is more than 0 → *If yes*:
>    1. **Join a list into text** (*Names*): *New → Members*, field *name*.
>    2. **Send an email** to *An officer of the board: secretary*: "[New → How many] new members this week: [Names → Text]".

## Approvals

### A reimbursement that needs the treasurer, then the chair over $500

> **When:** A payment is received *(or, once forms arrive, a reimbursement request)*.
> 1. **Ask for approval** (*Treasurer OK*) to *An officer of the board: treasurer*: "A reimbursement of [Amount] for [Member name]", 7 days.
> 2. **Condition**: *Treasurer OK → Approved* is yes and *Amount* is more than 500 → *If yes*:
>    1. **Ask for approval** (*Chair OK*) to *chair*: same, 7 days.
> 3. Email the member the result, using *Treasurer OK → Outcome* (and *Chair OK → Outcome*).

### Escalate when nobody answers

> 1. **Ask for approval** (*Chapter OK*) to *the member's chapter president*, 5 days.
> 2. **Condition**: *Chapter OK → Outcome* is *timed_out* → *If yes*: **Ask for approval** (*National OK*) to *the national's president*, 10 days.

## Board

### Prepare every meeting

> **When:** A board meeting is coming up, 7 days before.
> 1. **Add the financial reports to the meeting**, as of the last closed month. **Retry** up to 3 times, 10 minutes apart.
> 2. **Give someone a task** to *secretary*: "Finish the agenda for [Meeting title]", due in 2 days.
> 3. **Send an email** to *treasurer*, **run after** step 1 **failed**: "The reports couldn't be added to [Meeting title]; please add them by hand."

### Monday list of overdue action items, one email per person

> **When:** On a schedule, weekly, Monday, 8.
> 1. **Find action items** (*Late*): *overdue*.
> 2. **For each** item of *Late → Action items*: **Send an email** to the item's *Their email*: "[Title] was due [Due] ([Days overdue] days ago)".

### Record a follow-up after each meeting is scheduled

> **When:** A board meeting is scheduled.
> 1. **Create an action item**: "Book the room for [Meeting title]", due [Meeting date], assigned to the secretary's email.

## Money

### Warn about a loss, and tell the board the month's numbers either way

> **When:** The books are closed for a month.
> 1. **Month totals** (*Totals*): last closed month.
> 2. **Send an email** to *treasurer* and *chair*: "[Totals → Month]: income [Income], spending [Spending], net [Net]".
> 3. **Condition**: *Totals → Net* is less than 0 → *If yes*: **Give someone a task** to *treasurer*: "Explain the loss in [Totals → Month] at the next meeting".

### Thank larger donors

> **When:** A payment is received.
> 1. **Condition**: *Amount* is at least 250 and *What it was for* contains "donation" → *If yes*:
>    1. **Give someone a task** to *the chapter's president*: "Thank [Member name] for their gift of [Amount]".
