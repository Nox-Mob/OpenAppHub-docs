---
title: "Members and officers"
description: "Who can do what in OpenBoardApp, board seats and terms, and officers that come from OpenCharterApp."
sidebar:
  order: 1
---

The **Members & terms** page is your board's list of people. It shows who is on the board, what seat each person holds (like _President_), and when their term starts and ends.

## Roles: who can do what

Everyone in your organization has **one role in OpenBoardApp**. This role is separate from their role in OpenAppHub and in the other apps. For example, someone can be an admin in OpenBoardApp but only a viewer in OpenLedgerApp.

### Who sets the role

- **The owner and OpenAppHub admins** set it here on **Members & terms**. A change here only affects OpenBoardApp.
- They can also set it on OpenAppHub's **Members** page, which shows every app at once. A _named role_, like _Treasurer_, can set it there too. See [Roles](/hub/accounts/organizations-and-roles/#roles).
- If your organization lets app admins change roles in their own app, **OpenBoardApp admins** can change roles here as well.

If nobody has set a role for someone, they are an **Observer**.

On OpenAppHub, you can also give someone **No access** to OpenBoardApp. That keeps them out of OpenBoardApp completely, while they keep their roles in the other apps. See [No access](/hub/accounts/organizations-and-roles/#no-access).

### What each role can do

| Role                     | Can                                                                                                                             |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| **Owner**                | Everything, including handing the organization over to someone else.                                                            |
| **Administrator**        | Everything except handing over ownership. This includes settings, inviting people and exports.                                  |
| **Chair**, **Secretary** | Change the official record: meetings, agendas, attendance, motions, minutes and documents. Approve minutes. Read the audit log. |
| **Treasurer**            | Read everything.                                                                                                                |
| **Board member**         | Read everything. Vote in live votes they're allowed to vote in.                                                                 |
| **Observer**             | Read everything. Never votes.                                                                                                   |

A few more things to know:

- **Offices need a member role.** To be chair, secretary or treasurer, a person must also have a member role in OpenBoardApp.
- **Named roles can add a little more.** A named role can let a board member change the official record, read the audit log or manage the board, without holding an office.
- **Inviting from here works.** If you invite someone from OpenBoardApp, they become a member of your organization in OpenAppHub with the OpenBoardApp role you chose.

## Board roles and terms

A **board role** is a seat on the board, like _President_ or _Treasurer_. Each seat has a term length, like two years.

### Making a seat

Under **Create a board role**, give it a **Title** and a **Term length**.

### Filling a seat

To put someone in a seat, **fill** it with a person and a start date. OpenBoardApp takes care of the details:

- **The old term ends for you.** If someone already holds the seat, their term ends the day before the new person starts. Both changes happen in one step. A seat can never have two people, or nobody, by accident.
- **The end date is filled in.** The new term's end date comes from the seat's term length. You can change it if you need to.
- **History is kept.** Past terms stay listed, so you can see everyone who has held the seat.

People with a current term get [meeting reminders](/board/meetings/running-a-meeting/#reminders), and they are the people who can vote in live votes.

**Example:** Maria is Treasurer until June 30. On July 1, you fill the Treasurer seat with Dev, starting July 1. Maria's term ends on June 30, Dev's two-year term ends June 30 two years later, and Maria stays in the seat's history.

## Committees

**Committees** lists your committees and who is on each one, like a finance committee or a nominating committee. The full guide is [Committees](/board/people/committees/).

## Officers from OpenCharterApp

If your organization also uses OpenCharterApp, the officers chosen there show up here under **Officers from OpenCharterApp**. The two apps stay in step:

- **Appoint or replace officers in OpenCharterApp.**
- **Ending a term here** also ends it in OpenCharterApp.
- **Adding a term here** for a position OpenCharterApp knows (like _President_) creates the matching appointment in OpenCharterApp.
