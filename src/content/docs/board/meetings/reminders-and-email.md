---
title: "Reminders and email"
description: "Meeting reminders, action item reminders, buttons in emails, and how each person chooses which emails they get from OpenBoardApp."
sidebar:
  order: 4
---

OpenBoardApp can send emails for you, so your board doesn't miss meetings or forget the jobs they agreed to do. Everything about email is on one page: open **Email** in OpenBoardApp's side menu.

## Reminders for your organization

There are two ready-made reminders. Both are **on** until someone turns them off.

**Meeting reminders** go to everyone who is currently on the board, before every scheduled meeting. By default they arrive **7 days** before and again **1 day** before.

**Action item reminders** go to the person an action item is assigned to. By default they arrive **2 days** before it's due, and once more the day after it's due if it's still not done.

The owner and admins can change the number of days, or turn either reminder off. They can do that on this page or on OpenAppHub's **Automations** page; both change the same setting. All the details are in [Ready-made reminders](/hub/automations/ready-made/).

**Example:** your board meets on the first Monday of each month. With the default settings, every board member gets an email the Monday before, and another on Sunday.

## Buttons in emails ("Actions from email")

An action item reminder can include a **Mark it done** button. With it, people can finish a job straight from the email without opening the app.

This is **off** until the owner or an admin allows it, because some organizations prefer that every change happens in the app.

- **Hosted** (you use OpenAppHub online): turn it on in OpenAppHub's **Organization settings**. The setting applies to every app.
- **Self-hosted** (you run OpenBoardApp on your own server): turn it on here, on the **Email** page.

Each button only works for the person the email was sent to, only once, and only for 7 days. Before anything happens, it asks the person to confirm. See [Actions from email](/hub/automations/actions-from-email/).

## Your own choices

Each person decides for themselves which emails they get: reminders, the task summary email, and notifications.

- **Hosted:** choose on your OpenAppHub account page. The **Email** page in OpenBoardApp has a link there. See [Your account](/hub/accounts/account-settings/) and [Notifications](/hub/accounts/notifications/).
- **Self-hosted:** choose right here on the **Email** page, under **Notifications** and your email choices.

Turning off reminders for yourself doesn't turn them off for anyone else.

## The email server (self-hosted only)

If you run OpenBoardApp on your own server, it sends email through a mail server that you set up on this page. After you set it up, send yourself a test email to check that it works. See [Self-hosting](/board/help/self-hosting/).

If you use OpenAppHub online, there's nothing to set up. OpenAppHub sends the emails for you.
