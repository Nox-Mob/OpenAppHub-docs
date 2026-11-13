---
title: "Examples"
description: "Complete workflows for common needs, step by step: renewals, approvals, board preparation, money, and summaries."
sidebar:
  order: 17
---

Each example is a complete workflow. Build it in the designer; names in _italics_ are step names you choose.

## Membership

### Renewal reminders, a month ahead and a week ahead

Two workflows, each looking at a window about as long as the time between its runs, so each member gets each reminder once. (Windows count from today up to and including the last day, so a date right on the edge can fall in two runs. Keep the window a day shorter than the gap between runs, as the weekly template does with 6 days, when that matters.)

**A month ahead.**

> **When:** On a schedule, monthly, day 1, 9.
>
> 1. **Find members** (_Next month_): standing _current_, membership ends within _30_ days.
> 2. **For each** item of _Next month → Members_: **Send an email** to the item's _Email_: "Your membership ends on [Paid through]: renew any time from your member page."

**A week ahead.** The template **Renewal reminders** as it comes: every Monday, members ending within 6 days.

### Welcome, then check in after a month

> **When:** Someone becomes a member.
>
> 1. **Send an email** to _the person it's about_: "Welcome, [Member name]".
> 2. **Wait** 30 days.
> 3. **Give someone a task** to _the chapter's secretary_: "Check in with [Member name]", due in 7 days.

### Weekly summary of new members to the board

> **When:** On a schedule, weekly, Monday, 8.
>
> 1. **Find members** (_New_): standing _any_, joined in the last _7_ days.
> 2. **Condition**: _New → How many_ is more than 0 → _If yes_:
>    1. **Join a list into text** (_Names_): _New → Members_, field _name_.
>    2. **Send an email** to _An officer of the board: secretary_: "[New → How many] new members this week: [Names → Text]".

## Approvals

### A reimbursement that needs the treasurer, then the chair over $500

> **When:** A payment is received _(or, once forms arrive, a reimbursement request)_.
>
> 1. **Ask for approval** (_Treasurer OK_) to _An officer of the board: treasurer_: "A reimbursement of [Amount] for [Member name]", 7 days.
> 2. **Condition**: _Treasurer OK → Approved_ is yes and _Amount_ is more than 500 → _If yes_:
>    1. **Ask for approval** (_Chair OK_) to _chair_: same, 7 days.
> 3. Email the member the result, using _Treasurer OK → Outcome_ (and _Chair OK → Outcome_).

### Escalate when nobody answers

> 1. **Ask for approval** (_Chapter OK_) to _the member's chapter president_, 5 days.
> 2. **Condition**: _Chapter OK → Outcome_ is _timed_out_ → _If yes_: **Ask for approval** (_National OK_) to _the national's president_, 10 days.

## Board

### Prepare every meeting

> **When:** A board meeting is coming up, 7 days before.
>
> 1. **Add the financial reports to the meeting**, as of the last closed month. **Retry** up to 3 times, 10 minutes apart.
> 2. **Give someone a task** to _secretary_: "Finish the agenda for [Meeting title]", due in 2 days.
> 3. **Send an email** to _treasurer_, **run after** step 1 **failed**: "The reports couldn't be added to [Meeting title]; please add them by hand."

### Monday list of overdue action items, one email per person

> **When:** On a schedule, weekly, Monday, 8.
>
> 1. **Find action items** (_Late_): _overdue_.
> 2. **For each** item of _Late → Action items_: **Send an email** to the item's _Their email_: "[Title] was due [Due] ([Days overdue] days ago)".

### Record a follow-up after each meeting is scheduled

> **When:** A board meeting is scheduled.
>
> 1. **Create an action item**: "Book the room for [Meeting title]", due [Meeting date], assigned to the secretary's email.

## Money

### Warn about a loss, and tell the board the month's numbers either way

> **When:** The books are closed for a month.
>
> 1. **Month totals** (_Totals_): last closed month.
> 2. **Send an email** to _treasurer_ and _chair_: "[Totals → Month]: income [Income], spending [Spending], net [Net]".
> 3. **Condition**: _Totals → Net_ is less than 0 → _If yes_: **Give someone a task** to _treasurer_: "Explain the loss in [Totals → Month] at the next meeting".

### Thank larger donors

> **When:** A payment is received.
>
> 1. **Condition**: _Amount_ is at least 250 and _What it was for_ contains "donation" → _If yes_:
>    1. **Give someone a task** to _the chapter's president_: "Thank [Member name] for their gift of [Amount]".
