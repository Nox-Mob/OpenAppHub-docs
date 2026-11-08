---
title: "Troubleshooting"
description: "Fixes for common problems and messages in OpenLedgerApp."
sidebar:
  order: 2
---

Every error message tells you plainly that **nothing was recorded**, so you can fix the problem and try again safely.

| Message or problem | Cause | What to do |
|---|---|---|
| The transaction doesn't balance | Money out doesn't equal money in | Check each line's amount and side |
| More than two decimal places | Amounts are in cents at most | Round the amount yourself |
| The period is closed | The date is in a closed month or year, or before the books lock | Use another date, or ask an admin or treasurer to **reopen** with a reason |
| The statement check is off | Something's missing or wrong | Look for bank fees, interest, typos and items from next month |
| Your role doesn't allow this action | Your role is View only, Member or Treasurer | Ask an admin |
| This organization requires two-step sign-in | Two-step sign-in is required and you haven't turned it on | Settings → Security, turn it on, then sign in again |
| A name is already used | Account, fund, category, tag and project names must be unique | Use a different name, or restore the archived one |
| A restricted fund can't be archived | It still holds money | Spend or release the money first |
| Can't change a fund's restriction | It already has transactions | Create a new fund |
| A backup is rejected | The file was changed or damaged | Use another copy of the backup |
| An import row says **Already imported** | That row was imported before | Nothing to do; it's skipped |
| Dates import wrongly | Wrong date format | Choose **MM/DD/YYYY** or **DD/MM/YYYY** instead of automatic |
| PDF import refused | Over 10 per day or 50 per month, or the file is over 10 MB or 40 pages | Use CSV, OFX or QFX, or split the statement |
| "isn't available in the desktop app yet. Nothing was recorded." | That feature is web-only for now | Use the web app for it |
| Can't delete my account | You own an organization or are its only admin | Transfer ownership or add another admin first |
| Can't remove a person | They're the last admin | **Make someone else an admin first** |
| Can't delete an account | It has activity | Archive it instead |

Still stuck? Send the report from **Settings → Diagnostics** with your question. See [Getting help](/hub/help/support/).
