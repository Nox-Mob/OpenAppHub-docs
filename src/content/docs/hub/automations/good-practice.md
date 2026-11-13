---
title: "Building workflows that work well"
description: "Practical advice for workflows that do what you mean, are easy to change, and don't surprise anyone."
sidebar:
  order: 16
---

## Start small, then grow

Build the simplest version that's useful, test it, save it, and watch **What happened** for a week. Then add the next piece. A workflow that emails the treasurer a weekly count is worth more running today than a perfect one next month.

Prefer a [template](/hub/automations/templates/) or a [ready-made reminder](/hub/automations/ready-made/) when one does the job.

## One job per workflow

"Welcome new members" and "Remind members to renew" are two workflows, not one with a switch. Small workflows are easier to understand, test, switch off and hand over. If two need the same steps, build both; don't try to make one workflow do everything.

## Choose the right trigger

| You want | Use |
|---|---|
| To react to something as it happens | The app's event: *A payment is received*, *Someone becomes a member* |
| To act some time before or after something | *A board meeting is coming up* (days before), *An action item is overdue* (days after) |
| To act on many things at once, regularly | *On a schedule* plus a lookup, such as *Find members* ending within 30 days |

A schedule with a lookup is the most flexible pattern: "every Monday, find …, for each …". Make the lookup's window match the schedule (weekly runs, a 6-day window) so each thing is acted on once.

## Name everything

- Give the workflow a name that says what it does: *Renewal reminder, 30 days*, not *Workflow 3*.
- Name every step whose results you use: *Ending soon*, *Month totals*, *Award OK*. **In plain words** and **Insert data** become much easier to read.
- Use the description to say *why* it exists and who asked for it.

## Send to roles, not people

Use **Whoever holds a board seat** or **An officer of the board** rather than **A particular person** whenever the job belongs to a role. When officers change, the workflow follows without anyone editing it. See [Who gets it](/hub/automations/recipients/).

## Write emails people will act on

- Put the action in the subject: *Your membership ends on 30 November*, not *Membership update*.
- Say who it's from and why they're getting it, in the first line.
- Insert the data that makes it personal (name, date, amount) and check how it reads in **In plain words**.
- Keep it short. Link to where they act rather than explaining everything.
- For approvals, write **What needs approving** so it makes sense alone: *A reimbursement of $120 for Pat Lee*.

## Expect missing information

Members without a chapter, meetings without a start time, seats nobody holds. For anything the workflow depends on:

- Check it with a condition (*is filled in*) before using it, or
- Add a step that runs **after the step failed** to tell someone instead, and
- Give the approval a **time limit**, with a path for *timed_out*.

## Test with real data, then watch

- Use **Test run** after each meaningful change. Open what the lookups found.
- After saving, check **What happened** after the first real runs.
- If a workflow emails many people, try it first with **To** set to yourself, or with a narrow lookup (one chapter, one level), then widen it.

## Keep loops lean

- Filter in the lookup (level, chapter, dates) rather than looping over everyone and checking inside.
- Use **Join a list into text** or **Count** to send one summary email instead of one email per item, when that's what the reader needs.
- Avoid loops inside loops unless the lists are small.

## Change carefully

- Runs that are already waiting carry on with the saved workflow when they resume. Don't delete a step runs are waiting on.
- Switch a workflow **off** (untick **On**) rather than deleting it while you think; deleting removes its history and any approvals it asked for.
- For a big change, build the new version as a new workflow, switch it on, and switch the old one off.

## Decide who builds

Workflows run as the organization ([Who can build workflows](/hub/automations/who-can-build/)). Keep the list of builders short, and agree who looks after each workflow.
