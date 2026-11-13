---
title: "Testing, history and fixing problems"
description: "Test runs, What happened, what each step's status means, the most common problems and how to fix them."
sidebar:
  order: 14
---

## Test run

**Test run** in the designer runs the workflow on your organization's **real** information **without doing anything**:

- **Lookups run** (they only read), so you see what *Find members* would really find today.
- **Emails, tasks, approvals and the apps' actions are only described**: "Would email 3 people", "Would create 1 task", "Would ask 2 people to approve…", "Would add the financial reports to the meeting".
- **Waits don't wait**, and an approval carries on **as if approved**.
- **The trigger's data**: if something recently started this kind of workflow (a recent payment, an upcoming meeting), the test uses it. Otherwise the trigger's data is empty, and steps that need it say so.

Each step shows its status and what it did, and **What it gave later steps** opens its results, so you can check a lookup found the right people before anyone is emailed.

Test as you build: after the first lookup, after adding a condition, before saving.

## What happened

**What happened**, on the Automations page, lists the latest runs of every workflow, newest first. Each run shows the workflow, when it started, how it ended, and each step: its status, what it did ("Emailed 12 people", "3 members found"), and for a failed step, why.

| Step status | Meaning |
|---|---|
| **Succeeded** | It did its job |
| **Failed** | It couldn't. The reason is shown. Unless a later step runs "after it failed", the run fails too |
| **Skipped** | It didn't run: its "run after" wasn't met, or it was in the branch of a condition that wasn't taken |
| **Waiting** | Paused: a wait, an approval, an app's job, or a retry |
| **Retrying** | Failed, and will be tried again at the time shown |

Each workflow's card also says when it last ran and whether something couldn't be done.

When a run fails, **the owner is told** under the bell ([Notifications](/hub/accounts/notifications/)). Admins can turn that notification on for themselves.

## Common problems

| What you see | Why | What to do |
|---|---|---|
| **Nothing happened** | The workflow is off; the trigger hasn't happened yet; or it already ran for that thing (each thing starts it once) | Check **On**; check **What happened**; remember a workflow starts within about 5 minutes |
| *Nobody to email (is that seat or office filled, or the address empty?)* | **To** matched nobody when it ran | Fill the seat or office, check the data the address comes from, or add a fallback step that runs after this one failed |
| *Nobody to give it to* / *Nobody to ask* | Tasks and approvals need people with an account in your organization | Choose people with an account, or a seat whose holder has one |
| *"For each" goes through up to 5,000 items* | The list is too long | Narrow the lookup, or **Filter a list** first |
| *This run went over 10,000 steps.* | Loops inside loops, or a very long list | Simplify: fewer nested loops, smaller lists |
| *"X" isn't available on this server.* | A step from an app that isn't (or is no longer) on your organization's server | Remove the step, or ask whoever runs your server |
| The same person got two emails | Two separate steps both sent to them | Combine them into one step's **To** |
| A message shows blank where data should be | That data was empty for this run (no chapter, no start time) | Check with a condition (*is filled in*) or reword |
| A paused run failed after you edited the workflow | You deleted or renamed the step it was waiting on | Let waiting runs finish before removing such a step |

## Fixing and re-running

A run that failed doesn't run again by itself. Fix the workflow and save: the next thing that starts it uses the fixed version. Because each thing starts a workflow once, a payment whose run failed doesn't start it again; deal with that one by hand (for example, send the email yourself).
