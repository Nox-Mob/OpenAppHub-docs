---
title: "Using data from earlier steps"
description: "Insert data, what each kind of data is, lists and the items of a loop, variables, and how data is written."
sidebar:
  order: 5
---

The designer's key idea: **anything a step finds or makes can be used by any step after it.** A lookup of members gives a list; a loop goes through it; an email inside the loop uses each member's name.

## Insert data

Next to text fields there's **Insert data**. It lists what you can use **at that point in the workflow**, grouped by where it comes from:

| Group | What's in it | Example |
|---|---|---|
| **What started the run** | The trigger's data | *Member name*, *Amount*, *Meeting date* |
| **Each earlier step** (by its name) | What that step gave later steps | *Find members → Members* (a list), *How many* |
| **Each item of "…"** | Inside a **For each**: the current item's fields | *Each of Find members → Email* |
| **Variables** | Variables made before this step | *total* |
| **Today's date** | The date the step runs, in your organization's time zone | — |

Select an item and it's put where your cursor is. You can mix data with your own words, for example *Time to renew, * followed by the member's name. Under the field, each piece of data is shown in words, so *Hi {{items.each.name}}* reads *Hi [Each of Find members → Name]*.

Only what's available is offered: a step can't use a step after it, and **Each item of …** is only there inside its loop.

For settings that need a list (**For each**, **Filter a list**, **Reshape a list**, **Join a list into text**, **Count, sum, min, max**, and **Everyone in a list** as a recipient), the button is **Choose a list**, and only lists are offered.

## Kinds of data

| Kind | Examples | Notes |
|---|---|---|
| Text | Names, emails, levels, titles | *is*, *is not*, *contains* and *is one of* ignore capitals |
| Number | Amounts, days away, counts | Compared as numbers: 10 is more than 9 |
| Date | Paid through, meeting date | Compared as dates. Written as year-month-day in data, shown in your format in emails |
| Yes or no | *Approved*, *Books closed for it* | Use in conditions with *is* yes / no |
| List | Members, meetings, action items | Use with For each, Filter, Join, Count |

Ordered lists your organization defines, such as ranks, compare by their place in the list: *Rank is at most PFC* means PFC and every rank below it.

## How data is written

Data is written in double braces. **Insert data** writes it for you, but it helps to recognise it:

| Written | Means |
|---|---|
| `{{trigger.member.name}}` | The trigger's *Member name* |
| `{{steps.ending.rows}}` | The list *Members* from the step with id *ending* |
| `{{steps.totals.net}}` | *Net* from the step *totals* |
| `{{items.each.email}}` | Inside the loop *each*: the current item's *Email* |
| `{{item.name}}` | Inside **Filter** or **Reshape**: the item being looked at |
| `{{vars.total}}` | The variable *total* |
| `{{today}}` | Today's date |

If a piece of data is empty when the step runs (a member with no chapter, say), it's left blank. Check for that with a condition (*is empty* / *is filled in*) when it matters.

## A whole example

> **Find members** (named *Ending soon*): standing *current*, membership ends within *30* days.
> **For each** item in *Ending soon → Members*:
> - **Send an email** to *An email address*: *Each of Ending soon → Email*. Subject: *Time to renew, [Each of Ending soon → Name]*. Message: *Your [Each of Ending soon → Level] membership ends on [Each of Ending soon → Paid through].*
> **Send an email** to the treasurer: *[Ending soon → How many] memberships end in the next 30 days.*

The first email goes to each member; the last one runs once, after the loop, and uses the lookup's count.
