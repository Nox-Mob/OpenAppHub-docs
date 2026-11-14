---
title: "Who can build workflows"
description: "Who can build and change workflows, why workflows act for the whole organization, and how a national shares workflows with its chapters."
sidebar:
  order: 15
---

Workflows are powerful. One workflow can email hundreds of members or change records in several apps. So OpenAppHub is careful about who can build them. This page explains who can, why, and how a national organization can share workflows with its chapters.

## Who can build and change workflows

There are three groups of people:

- **The owner and OpenAppHub admins.** They can do everything with workflows. They can build them, change them, switch them on and off, and delete them. They can also change the ready-made automations, like meeting reminders.
- **People they choose.** The owner or an admin can let anyone else build workflows too. There are two ways to do it. On the **Members** page, tick **Can build workflows** next to the person. Or on the **Automations** page, add them under **Who can build workflows**.
- **Everyone else.** Everyone else in the organization can look at the workflows. They can also see **What happened**, the history of each run. But they can't change anything.

:::caution[Workflows act for the whole organization]
A workflow doesn't act as the person who built it. It acts for the organization. That means its steps can read and change information in **every app your organization uses**. It doesn't matter what the builder's own role is in those apps.

Here's an example. Sam can only view OpenLedgerApp. Sam can't change anything in the books. But if Sam can build workflows, Sam could build one that reads the books' monthly totals and emails them out.

That's why OpenAppHub asks you to confirm before you let someone build workflows. Only give this to people you'd trust with all of your organization's information.
:::

Everything a workflow does is written down under its name in **What happened**. You can always look back and see what ran, when, and why.

## Approvals and tasks don't give anyone new rights

A workflow can ask someone to approve something, or give someone a task. Neither one gives that person any new rights in the apps.

- **Answering an approval** only tells the workflow "yes" or "no". Whatever the workflow does next, it does for the organization, not as the person who answered.
- **Buttons in an email**, like **Approve** on a join request or **Mark it done** on an action item, use that person's own rights. They can only do what they could already do in the app. See [Actions from email](/hub/automations/actions-from-email/).

## Nationals and chapters

Some organizations have chapters, like a national association with local chapters. A chapter can have its own organization in OpenAppHub, for example so it can run its own board in OpenBoardApp. Here's how workflows work between a national and its chapters.

### Sharing a workflow

A national can share a workflow with its chapters. To do that, tick **Share with chapters** on the workflow.

Each chapter then sees it on its own Automations page, under **Shared by your national**. The chapter doesn't get it automatically. An owner or admin in the chapter has to select **Use it** to turn it on.

### Each one uses its own information

A shared workflow runs on **the chapter's own information only**. Here's what that means:

- A national's workflow never reads or changes a chapter's records.
- A chapter's workflow never reads or changes the national's records.

So if the national shares a "renewal reminders" workflow, each chapter's copy emails that chapter's members. It never emails the national's members.

### Stopping, changing and deleting

- A chapter can select **Stop using** to turn a shared workflow off for itself.
- If the national changes a shared workflow, the change applies to every chapter that uses it.
- If the national deletes it, it's removed for every chapter.

### Chapters building their own

The national decides whether its chapters may build their own workflows as well. The setting is **Chapters may build their own workflows**, on the national's Automations page.

### What's worth sharing

Share things every chapter should do the same way. For example:

- reminders when a membership is about to end;
- a welcome email for new members;
- adding the financial reports to each board meeting.
