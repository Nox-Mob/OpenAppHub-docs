---
title: "Who can build workflows"
description: "Who can build and change workflows, why workflows run as the organization, and sharing workflows between a national and its chapters."
sidebar:
  order: 15
---

## Building and changing workflows

- **The owner and OpenAppHub admins** can build, change, switch on and off, and delete workflows, and change the ready-made automations.
- **Anyone else they choose** can build workflows: on the **Members** page, tick **Can build workflows** for that person, or add them under **Who can build workflows** on the Automations page.
- **Everyone else** in the organization can see the workflows and **What happened**, but not change them.

:::caution[Workflows run as the organization]
A workflow acts for the organization, not as the person who built it. Its steps can look up and change information in **every app your organization uses**, whatever the builder's own role in those apps: someone who can only view OpenLedgerApp can still build a workflow that reads its totals. That's why OpenAppHub asks you to confirm before letting someone build workflows. Give it to people you'd trust with the whole organization's information.
:::

Everything a workflow does is recorded under its name in **What happened**, so you can always see what ran and why.

## Approvals and tasks aren't permissions

Being asked to approve something, or given a task, by a workflow doesn't give anyone new permissions in the apps. Answering an approval only tells the workflow the answer; what the workflow then does, it does as the organization. When an email's buttons do something in an app (approving a join request, marking an action item done), the person's own permissions apply, exactly as in the app ([Actions from email](/hub/automations/actions-from-email/)).

## Nationals and chapters

A national's chapters can each have their own organization (for example to run their own board in OpenBoardApp). Between a national and its chapters:

- **Sharing.** A national can tick **Share with chapters** on a workflow. Each chapter's own organization sees it under **Shared by your national**, and an owner or admin there selects **Use it** to turn it on.
- **Each runs on its own information.** A shared workflow runs on **the chapter's own information only**. A national's workflow never reads or changes a chapter's records, and a chapter's never touches the national's.
- **Stopping.** **Stop using** turns it off for that chapter. The national changing or deleting a shared workflow changes or removes it for every chapter using it.
- **Chapters' own workflows.** The national decides whether chapters may also build their own: **Chapters may build their own workflows** on the national's Automations page.

Good candidates for sharing: renewal reminders, a welcome email, reports before meetings: things every chapter should do the same way.
