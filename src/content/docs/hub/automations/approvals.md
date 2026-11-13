---
title: "Approvals"
description: "Asking people to approve or decline something from a workflow: how it's decided, time limits, what approvers see, answering by email, and using the outcome."
sidebar:
  order: 9
---

**Ask for approval** pauses a workflow until the people you ask approve or decline something, then carries on with their answer. Use it wherever something shouldn't happen until a person says yes: an award, a reimbursement, a member transfer, publishing a document.

## Setting it up

Add **Ask for approval** (in the _Do_ group) and fill in:

| Setting                           |                                                                                                                                                                                                                     |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **To**                            | Who's asked: a seat, an officer, a role, a person, or a list ([Who gets it](/hub/automations/recipients/)). Only people with an account in your organization can answer                                             |
| **What needs approving**          | What it is, said as "**… is pending your approval**". Write it so it makes sense on its own, with data: _An award submission from [Member name]_, _A reimbursement of [Amount] for [Member name]_                   |
| **Details (optional)**            | Anything that helps them decide: the amount, the reason, a link                                                                                                                                                     |
| **When several people are asked** | **The first answer decides**: whoever answers first decides for everyone. **Everyone must approve (one decline declines)**: it's approved only when all of them have approved, and declined as soon as one declines |
| **Days to answer (optional)**     | If nobody decides in time, the outcome is **timed_out** and the workflow carries on. Without it, the workflow waits until it's decided                                                                              |

## What the people asked see

Each person asked gets:

- **A notification** under the bell: _An award submission from Pat Lee is pending your approval_.
- **An email** saying the same, with your details, how it's decided ("Everyone asked must approve it") and the date to answer by, if there is one.
- **A task** on their dashboard, under **Your tasks**: _An award submission from Pat Lee: pending your approval_, linking to its page.

The approval's page shows what it is, the details, who was asked and what each has answered, and **Approve** and **Decline** with an optional comment. Answering is final: each person answers once.

If your organization allows it, the email also has **Approve** and **Decline** buttons, so people can answer straight from the email. They sign in, see what they're about to do, add a comment if they like, and confirm. See [Actions from email](/hub/automations/actions-from-email/).

## Using the outcome

The steps after **Ask for approval** can use:

| Data                                         |                                                                           |
| -------------------------------------------- | ------------------------------------------------------------------------- |
| **Outcome**                                  | _approved_, _declined_ or _timed_out_                                     |
| **Approved**                                 | Yes or no                                                                 |
| **Who answered**                             | Names, in the order they answered                                         |
| **Their comments**                           | Everyone's comments, separated by " / "                                   |
| **How many approved**, **How many declined** |                                                                           |
| **Each answer**                              | A list: name, answer (_approved_, _declined_, or _no answer_) and comment |

The usual pattern is a **Condition** (or a **Switch** on _Outcome_) right after it:

> **Ask for approval** (named _Award OK_): to _the national's president_, what: _An award submission from [Member name]_, 14 days to answer.
> **Switch** on _Award OK → Outcome_:
>
> - _approved_: email the member "Your award was approved", and give the awards chair a task to order it.
> - _declined_: email the member "Your award wasn't approved this time: [Award OK → Their comments]".
> - _Anything else_ (timed out): give the national secretary a task to follow up.

## Chains and escalation

Approvals can follow one another. For example, a chapter president first, then the region:

> **Ask for approval** (_Chapter OK_) to _the member's chapter president_, 7 days.
> **Condition**: _Chapter OK → Approved_ is yes →
>
> - **Ask for approval** (_Region OK_) to _the region's president_, 7 days.

To escalate when nobody answers, check for _timed_out_ and ask someone else:

> **Condition**: _Chapter OK → Outcome_ is _timed_out_ → **Ask for approval** to _the national's president_.

## Testing

A **Test run** asks nobody and carries on **as if approved**, so you can check the rest of the workflow. To check the declined path, temporarily change the condition while testing.

## Good to know

- Who's asked is worked out when the step runs. Changing a seat's holder later doesn't change who was asked.
- Owners and admins can open any approval's page to see where it stands; only the people asked can answer.
- Once an approval is decided (or times out), any remaining email buttons for it stop working.
- Deleting the workflow deletes its approvals, including unanswered ones.
