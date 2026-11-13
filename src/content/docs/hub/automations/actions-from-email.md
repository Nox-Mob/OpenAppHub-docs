---
title: "Actions from email"
description: "Letting people approve, decline or mark things done straight from an email: which actions, how to allow them, and how the links keep things safe."
sidebar:
  order: 10
---

Emails about something waiting for someone always **say what's waiting**: *An award submission is pending your approval*, *A task is waiting for you: Call Pat Lee*, *Max Applicant has asked to join Chapter A. This is pending your approval.* They link to where it's done in the app.

Your organization can also let people **act straight from the email**, with buttons such as **Approve**, **Decline** or **Mark it done**.

## Which actions

| Kind | Buttons | In |
|---|---|---|
| **Finish workflow tasks from email** | Mark it done | The email about a task a workflow gave someone |
| **Answer approvals from email** | Approve, Decline | The email asking for an [approval](/hub/automations/approvals/) |
| **Approve or decline join requests from email** | Approve, Decline | OpenCharterApp's email to the people who review membership applications |
| **Mark action items done from email** | Mark it done | OpenBoardApp's reminder about an action item |

## Allowing them

Each kind is **off** until an owner or admin switches it on, in OpenAppHub: **Organization settings**, **Actions from email**. Tick the kinds you want. Everyone in the organization can see which are on; only owners and admins can change them.

Self-hosted, the same settings are in OpenCharterApp's organization settings and OpenBoardApp's **Email** page.

Switching a kind off also stops buttons in emails already sent.

## How the buttons keep things safe

- **Signed in, as the right person.** A button only works signed in as the person the email was sent to. Anyone else (someone the email was forwarded to, say) is asked to sign in as that person and learns nothing about what it's for.
- **Nothing happens on opening it.** The button opens a page that says exactly what will happen (*Approve: An award submission from Pat Lee is pending your approval*), with a comment box where there is one. Only **confirming** on that page does it. Email scanners that open links can't act by accident.
- **Once, for 7 days.** Each button works once. Using one also uses up its partner (Approve uses up Decline). After 7 days the page says to open the app instead.
- **Your usual permissions apply.** Confirming does exactly what the app's own button would do, as you. If you're no longer allowed to (your role changed, or someone else already decided), it says so and nothing changes.

## When a button doesn't work

| The page says | Why | What to do |
|---|---|---|
| *This link was already used* | It, or its partner, was used | Nothing: it's done. Open the app to check |
| *This link has expired* | More than 7 days old | Open it in the app (the page links there) |
| *… doesn't allow this from email any more* | The kind was switched off | Open it in the app |
| *This link was sent to someone else* | You're signed in as someone else | Sign out and sign in as the person it was sent to |
| *This was already decided* (after confirming) | Someone else answered first | Nothing to do |
