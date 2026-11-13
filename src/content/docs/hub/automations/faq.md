---
title: "Questions"
description: "Short answers to common questions about workflows, approvals, emails and reminders."
sidebar:
  order: 18
---

**Does a workflow cost anything extra?**
No. Workflows are part of your plan.

**How soon does a workflow start?**
Within about 5 minutes of what starts it. Schedules run at about the chosen hour in your organization's time zone. See [How workflows run](/hub/automations/how-workflows-run/).

**Will it email someone twice?**
Not for the same thing: each payment, member or meeting starts a workflow once. Two different workflows, or two email steps, can each email the same person.

**Can I run a workflow by hand?**
Not yet. Use **Test run** to see what it would do. For something regular, use _On a schedule_.

**I changed a workflow. Do runs that already happened run again?**
No. Changes apply to the next runs, and to runs that are waiting when they carry on.

**Who sees what a workflow did?**
Everyone in the organization can see **What happened**. Emails and tasks go only to the people chosen.

**Can a workflow see information someone isn't allowed to see?**
A workflow runs as the organization, so its lookups see everything in your apps. That's why only trusted people can build them. See [Who can build workflows](/hub/automations/who-can-build/).

**Someone answered an approval by mistake. Can they change it?**
No: each person answers once, and once it's decided the workflow carries on. Undo what the workflow did by hand, and if needed run the request through again (for example by recording it again).

**Why didn't my approval email have buttons?**
Answering approvals from email is off until an owner or admin allows it. See [Actions from email](/hub/automations/actions-from-email/).

**Can people outside the organization approve?**
No. Approvals are answered signed in, by people with an account in your organization.

**Can I turn off a ready-made reminder for one person only?**
Each person turns reminders off for themselves on their account page. Owners and admins can only switch a ready-made reminder on or off for the whole organization.

**What's the difference between a notification and a workflow email?**
Notifications are OpenAppHub's own messages (a payment didn't go through, someone joined), and each person chooses what they get. Workflow emails are your organization's messages, sent by workflows you build. See [Notifications](/hub/accounts/notifications/).

**Our chapters each want the same workflow. Do they each build it?**
No. The national builds it, ticks **Share with chapters**, and each chapter selects **Use it**. See [Nationals and chapters](/hub/automations/who-can-build/#nationals-and-chapters).

**Something's wrong and I can't see why.**
Open **What happened** and look at the failed step's message, then [Testing, history and fixing problems](/hub/automations/testing-and-history/#common-problems). Still stuck? Email support@openapphub.org with the workflow's name and the time of the run.
