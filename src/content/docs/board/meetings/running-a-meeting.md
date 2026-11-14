---
title: "Running a meeting"
description: "Everything about a board meeting in OpenBoardApp, from planning the agenda to locking the minutes, one tab at a time."
sidebar:
  order: 1
---

A board meeting has a life: you plan it, you hold it, and then you write it up. OpenBoardApp gives each meeting a set of tabs that follow those steps in order. This page walks through each one.

## The tabs of a meeting

Open any meeting and you'll see these tabs:

1. **Agenda & notes.** Build the list of topics for the meeting. During the meeting, take notes under each topic.
2. **Attendance.** Mark who's there. OpenBoardApp shows right away whether you have a quorum, which is the smallest number of board members needed to make decisions.
3. **Motions & votes.** Write down each motion (a formal proposal), who made it (the mover), who seconded it, anyone who stepped out of the vote (a recusal), and how everyone voted.
4. **Minutes.** Turn the agenda, notes and votes into formal minutes. Send them for approval, then lock the official copy so nobody can change it later.
5. **Board packet.** Put the agenda and any documents into one PDF that board members can read before the meeting.
6. **Action items.** Write down follow-up jobs, who will do each one, and when it's due. They stay on everyone's list after the meeting until they're done.

## Scheduling a meeting

1. Select **Meetings** in the side menu.
2. Select **New meeting**.
3. Fill in the form:

| Field                       | What to put                                                                                                                                                                                                   |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Start from**              | Choose a [meeting template](#meeting-templates) if you have one. Or choose the standard agenda: call to order, approval of the last minutes, treasurer's report, old business, new business, and adjournment. |
| **Title**                   | A name like _Monthly board meeting_ or _Annual meeting_.                                                                                                                                                      |
| **Date** and **Start time** | The time uses your organization's time zone. You can check or change the time zone in **Settings & export**.                                                                                                  |
| **Location**                | Where you'll meet, like a room or a video call link.                                                                                                                                                          |

4. Save it.

The meeting and its first agenda are saved together, so you'll never end up with a meeting that has no agenda. You can change the agenda as much as you like afterwards.

## Meeting templates

If you hold the same kind of meeting again and again, a template saves you typing. A **meeting template** remembers a title, a time, a place and an agenda.

There are two ways to make one:

- **Write it.** Type the agenda one item per line, like this: `Title | Presenter | Minutes`. For example, `Treasurer's report | Tess | 10` means Tess gives the treasurer's report and it takes about 10 minutes.
- **Copy a meeting.** Open a meeting you liked and select **Save as template**.

The full guide is [Meeting templates](/board/meetings/templates/).

## Agenda items that need a vote

Some topics end in a vote, like approving the budget. You can get ready for that ahead of time.

Mark the agenda item as a **vote item**. Then write the **proposed motion**, which is the exact wording the board will vote on. The vote uses your organization's **decision rule** (for example, a simple majority). If one item needs a different rule, like a two-thirds vote, you can choose it for that item only. See [Motions and votes](/board/voting/motions-and-votes/).

## The board packet

The board packet is the set of papers members read before the meeting. OpenBoardApp makes it into one PDF.

1. Open the **Board packet** tab.
2. Choose which documents to include. The agenda always comes first.
3. Select **Generate packet PDF**.

Every time you build the packet, OpenBoardApp keeps it as a new version, like _Packet v1_ and _Packet v2_. Each version lists exactly what's inside, so you can always see what members were sent.

When you've sent the packet to the board, by email or on paper, select **Mark as distributed**. This only records that you sent it. It doesn't send anything by itself.

### Reports from the other apps

Reports from OpenCharterApp and OpenLedgerApp can go straight into a packet. In OpenCharterApp's **Reports**, or in OpenLedgerApp's reports, select **Add to a board package**. The report goes to an upcoming meeting's documents as a PDF, ready for the next packet. Nobody has to download it and upload it again.

## Action items

Action items are the jobs people agree to do at a meeting. For example, "Get three quotes for the new roof by March 1."

Add them on the meeting's **Action items** tab, or under **Action items** in the side menu. Give each one a person and a due date. Each action item:

- stays on the list after the meeting until someone marks it **Done**;
- shows up on that person's [OpenAppHub dashboard](/hub/start/dashboard/);
- is included in their [task summary](/hub/accounts/task-summary/) email.

The full guide is [Action items](/board/meetings/action-items/).

## Reminders

OpenBoardApp sends reminder emails on its own, so nobody forgets a meeting or a job:

- **Meeting reminders.** Everyone who is currently on the board gets an email 7 days before a meeting and again 1 day before.
- **Action item reminders.** The person an action item belongs to gets an email 2 days before it's due. If it becomes overdue, they get one more.

If you move a meeting or change a due date, OpenBoardApp sends a new reminder with the new date.

The owner and admins can change these days, or turn either reminder off. The setting is on the **Email** page, under **Reminders for** your organization. Each person can also turn reminders off just for themselves, on their OpenAppHub **Account** page.

Everything about email in OpenBoardApp is on [Reminders and email](/board/meetings/reminders-and-email/). To build your own reminders, see [Automations](/hub/automations/).
