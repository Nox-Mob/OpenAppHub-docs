---
title: "Steps reference"
description: "Every step in the designer: its settings, what it gives later steps, and when to use it. Plus retries and run after."
sidebar:
  order: 7
---

Steps are listed as they're grouped in **Add a step**. Each says what it gives later steps (what you'll find under its name in **Insert data**).

## Do

### Send an email

Emails one or more people.

| Setting                  |                                                                                         |
| ------------------------ | --------------------------------------------------------------------------------------- |
| **To**                   | Who gets it. See [Who gets it](/hub/automations/recipients/)                            |
| **Subject**, **Message** | Your words, with data inserted where you want it. Leave a blank line between paragraphs |

Gives: **People emailed** (how many).

The email comes from OpenAppHub on your organization's behalf, says which workflow sent it, and links to what the trigger was about when there is something (the meeting, the member). Workflow emails are always sent: they're your organization's messages, so a person's own reminder settings don't stop them.

If nobody matches **To** (the seat is empty, the address is blank), the step fails with _Nobody to email_; see [Testing, history and fixing problems](/hub/automations/testing-and-history/).

### Give someone a task

A task on each person's OpenAppHub dashboard, under **Your tasks**, and in their task summary email.

| Setting                     |                                                                      |
| --------------------------- | -------------------------------------------------------------------- |
| **To**                      | Who gets it. Tasks go to people with an account in your organization |
| **Title**                   | What to do, such as _Call Pat Lee_                                   |
| **Note (optional)**         | Details                                                              |
| **Due in (days, optional)** | Days from the run                                                    |

Gives: **Tasks created** (how many).

Each person is told about their task under the bell, and by email unless they turned that off. The email says what the task is and, if your organization allows it, has a **Mark it done** button ([Actions from email](/hub/automations/actions-from-email/)). On the dashboard they select **Done**.

### Ask for approval

Asks one or more people to approve or decline something, **waits for their answer**, then carries on. Later steps use the outcome. Everything about approvals is in [Approvals](/hub/automations/approvals/).

| Setting                           |                                                                                              |
| --------------------------------- | -------------------------------------------------------------------------------------------- |
| **To**                            | Who's asked. Only people with an account in your organization can answer                     |
| **What needs approving**          | Said as "… is pending your approval", such as _An award submission from_ [Member name]       |
| **Details (optional)**            | Anything that helps them decide                                                              |
| **When several people are asked** | **The first answer decides**, or **Everyone must approve (one decline declines)**            |
| **Days to answer (optional)**     | After that, the outcome is _timed_out_. Without it, the workflow waits until someone answers |

Gives: **Outcome** (_approved_, _declined_ or _timed_out_), **Approved** (yes or no), **Who answered**, **Their comments**, **How many approved**, **How many declined**, and **Each answer** (a list of name, answer and comment).

## Decide and repeat

### Condition (if / otherwise)

Runs the steps in **If yes** when its conditions are true, and those in **If no** otherwise.

Each condition compares a value (usually data) with another value or data:

| Comparison                                                          | Meaning                                                                        |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| **is**, **is not**                                                  | Equal or not (text ignores capitals)                                           |
| **is less than**, **is at most**, **is more than**, **is at least** | Numbers as numbers, dates as dates; ordered lists such as ranks by their place |
| **is between**                                                      | Inclusive at both ends                                                         |
| **is one of**                                                       | One of a comma-separated list, or of a list from the data                      |
| **contains**                                                        | Text containing the value (ignoring capitals), or a list containing it         |
| **is empty**, **is filled in**                                      | Whether there's a value at all                                                 |

**Match**: whether **all** conditions must be true, or **any** of them.

Gives: **Result** (yes or no).

### Switch (cases)

Picks one set of steps by a value, such as a member's level: one list of steps for each value you list, and **Anything else** for the rest. Comparisons ignore capitals. Use a switch instead of a chain of conditions when you're choosing between several values of the same thing.

### For each

Runs the steps inside it **once for each item** in a list, such as the members **Find members** found. Inside, **Insert data** offers **Each item of "…"** with the current item's fields.

| Setting  |                                                                                        |
| -------- | -------------------------------------------------------------------------------------- |
| The list | **Choose a list**: a lookup's results, a filtered or reshaped list, or a list variable |

Gives: **Items gone through**. Up to 5,000 items; a longer list fails the step (narrow it first).

### Group

Keeps steps together. Useful so a later step can run "after the group failed" (see [Run after](#retries-and-run-after)) and handle a problem in any step inside, or just to fold related steps away.

## Data

### Compose a value

Builds text or a value once (for example a sentence with several pieces of data), so later steps can use it as **Value** instead of repeating it.

### Filter a list

Keeps only the items of a list that match conditions about each item (`{{item.…}}`), such as _Level is Annual_. Gives the filtered list (with the same fields) and **How many**.

### Reshape a list

Makes a new list with the fields you choose, each from the item, for example _name_ and _email_ only, or a new field combining two. Gives the new list and **How many**.

### Join a list into text

Turns a list into one piece of text: every item (or one field of each, such as _name_), with **Between items** (a comma and space by default). Gives **Text**, for example _Ada Ames, Bo Brown, Cy Chen_ for an email to the treasurer.

### Count, sum, min, max

**Work out** how many items, or the **Total**, **Average**, **Smallest** or **Largest** of a field (**Of the field**), for example the total amount of a list of payments. Gives **Result**.

## Variables

A variable is a value that steps can change as the run goes, like a running total or a list of names you add to inside a loop.

| Step                     |                                                                                                                                                                                               |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Make a variable**      | **Variable name** (lowercase letters, digits and underscores), **Kind** (Number, Text, List, Yes or no) and **Starts as**. Make variables at the top of the workflow, not inside another step |
| **Set a variable**       | Gives it a new value                                                                                                                                                                          |
| **Add to a variable**    | Adds a number (1 if you leave it empty) to a number variable                                                                                                                                  |
| **Append to a variable** | Adds an item to a list variable, or text to the end of a text variable                                                                                                                        |

Variables are in **Insert data** under **Variables** for every step after they're made.

## Time and flow

### Wait

Pauses the run, then carries on.

| Setting          |                                                                                             |
| ---------------- | ------------------------------------------------------------------------------------------- |
| **For a while**  | **How long** and **Unit**: minutes, hours or days                                           |
| **Until a date** | **Until**: a date (and time), often from the data, such as two days before the meeting date |

Waits are checked every 5 minutes, so a run carries on within about 5 minutes of the time. A test run doesn't wait.

### Stop the run

Ends the run here. **End the run as** **Succeeded** or **Failed**, with an optional **Message (optional)** shown in **What happened**. A run ended as failed tells the owner, like any failed run. Use it inside a condition: "if there's nothing to do, stop".

## Steps from your apps

Each app adds its own lookups and actions. **Lookups** only read, and run in a test run too. **Actions** change something, and in a test run are only described.

### OpenCharterApp: Find members (lookup)

| Setting                                      | Values                                                           |
| -------------------------------------------- | ---------------------------------------------------------------- |
| **Standing**                                 | current, lapsed, pending, any                                    |
| **Level (optional)**, **Chapter (optional)** | Exactly as named in OpenCharterApp (capitals don't matter)       |
| **Membership ends within (days, optional)**  | From today to that many days ahead. Lifetime members never match |
| **Joined in the last (days, optional)**      |                                                                  |
| **At most**                                  | 1 to 5,000 (500 if left empty)                                   |

Gives: **Members** (each with Name, Email, Level, Term, Paid through, Joined, Chapter, Standing, Account and Member fields), **How many**, and **How many matched (before the limit)**.

### OpenBoardApp: Find board meetings (lookup)

| Setting                                                                     | Values                           |
| --------------------------------------------------------------------------- | -------------------------------- |
| **From (days from today; negative for the past)**, **To (days from today)** | The window, for example 0 to 30  |
| **Status**                                                                  | scheduled, draft, completed, any |
| **At most**                                                                 |                                  |

Gives: **Meetings** (Meeting, Title, Date, Start time, Location, Days away) and **How many**.

### OpenBoardApp: Find action items (lookup)

| Setting                         | Values                   |
| ------------------------------- | ------------------------ |
| **Which**                       | open, overdue, done, any |
| **Due within (days, optional)** |                          |
| **At most**                     |                          |

Gives: **Action items** (Title, Due, Status, Assigned to, Their email, Their account, Days overdue, Meeting) and **How many**.

### OpenBoardApp: Create an action item (action)

| Setting                                               |                                                                                                                                                                                        |
| ----------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Title**; **Details (optional)**; **Due (optional)** |                                                                                                                                                                                        |
| **Meeting (optional)**                                | A meeting from the data, such as the trigger's meeting                                                                                                                                 |
| **Assign to (email, optional)**                       | The email address of the person it's for, often from the data. Left empty, or for an address that isn't anyone in your organization, it's created unassigned (**Assigned** says which) |

Gives: **Action item** and **Assigned**.

### OpenLedgerApp: Month totals (lookup)

| Setting               | Values                              |
| --------------------- | ----------------------------------- |
| **Which month**       | last_closed_month, this_month, date |
| **Date (for "date")** | The month that date falls in        |

Gives: **Month**, **Income**, **Spending**, **Net**, **Currency**, **Transactions**, and **Books closed for it** (yes or no).

### OpenLedgerApp: Add the financial reports to the meeting (action)

Builds the board package (income, balance, budget against actual and, for nonprofits, fund activity) and adds it to a meeting's documents and packet. It needs a meeting: use it with _A board meeting is coming up_ or _A board meeting is scheduled_.

| Setting   | Values                                           |
| --------- | ------------------------------------------------ |
| **As of** | last_closed_month, today (the year so far), date |
| **Date**  | For "date"                                       |

Gives: **What it did** and **Document**. OpenLedgerApp does the work, so the run waits for it (usually a minute or two).

## Retries and "run after"

Every step has **Settings: retries and run after**.

**Retry up to (times)**: if the step fails, try again, up to 10 times. **First retry after (minutes)** and **The same time each time** or **Twice as long each time** (5, 10, 20 minutes…). Use retries for steps that depend on something that can be briefly unavailable, such as building reports.

**Run this step after**: by default a step runs when the step before it **succeeded**. You can make it run after an earlier step at the same level **failed** or was **skipped** instead (or any mix). That's how you handle a problem:

> **Group** (named _Send reports_): Month totals → Add the financial reports to the meeting
> **Send an email** to the treasurer, _run after_: _Send reports_ **failed**: "The reports couldn't be added to [Meeting title]; please add them by hand."

A failure handled this way doesn't fail the run. A step whose "run after" isn't met is **skipped**, and so are the steps that depend on it.
