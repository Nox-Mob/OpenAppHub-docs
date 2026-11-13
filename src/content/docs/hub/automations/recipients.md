---
title: "Who gets it"
description: "Choosing who an email, a task or an approval goes to: roles, a person, the person it's about, an address from the data, a list, a board seat, an officer."
sidebar:
  order: 8
---

**Send an email**, **Give someone a task** and **Ask for approval** all have **To**. The choices:

| To | Who | Email | Task / approval |
|---|---|---|---|
| **People with a role** | Everyone in your organization with the OpenAppHub roles you tick: owners, admins, members, viewers | ✓ | ✓ |
| **A particular person** | Someone you pick from your organization | ✓ | ✓ |
| **The person it's about** | The trigger's person: the member who paid, joined or lapsed; the person an overdue action item is assigned to | ✓ | ✓ if they have an account in your organization |
| **An email address** | An address from the data (such as *Each of Find members → Email*) or typed in | ✓ | ✓ if it belongs to someone in your organization |
| **Everyone in a list** | Each item of a list from the data (such as a lookup's results), by its account or email | ✓ | ✓ for those with an account in your organization |
| **Whoever holds a board seat** (OpenCharterApp) | The current holder of a **Seat** in **Whose seat**: *unit* (the member's own chapter), *parent* (the level above it), *region*, or *national* | ✓ | ✓ |
| **An officer of the board** (OpenBoardApp) | The **chair**, **secretary** or **treasurer** | ✓ | ✓ |

## Seats and offices follow who holds them

**Whoever holds a board seat** and **An officer of the board** are worked out **when the step runs**: when a new treasurer takes office, the next run goes to them, without anyone editing the workflow. Prefer them to **A particular person** for anything tied to a role in the organization.

If nobody holds the seat on the day, nobody can be emailed, and the step fails with *Nobody to email (is that seat or office filled…?)*. Handle it with **Run after: failed** to email someone else instead ([Retries and "run after"](/hub/automations/steps/#retries-and-run-after)).

## One email per person

A step sends each person one email, even when they're matched more than once by the same choice (an owner listed under two ticked roles, say). Two separate steps send two emails, so put everyone in one step's **To** where you can, or use **Everyone in a list**. In a loop, each pass is separate: a loop over 30 members with an email inside sends 30 emails, one to each.

## Tasks and approvals need an account

Tasks appear on someone's OpenAppHub dashboard, and approvals are answered signed in, so they only go to people **with an account in your organization**. Email addresses that aren't anyone in the organization are skipped for tasks and approvals; if that leaves nobody, the step fails with *Nobody to give it to* or *Nobody to ask*.

## Privacy

Recipients see the email or task only: they don't see who else got it. Data you insert into a message (amounts, member details) goes to everyone the step sends to, so choose **To** with that in mind. For example, don't put a member's payment details in an email to everyone with the member role.
