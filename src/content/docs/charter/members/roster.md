---
title: "Members"
description: "Your roster, standing and importing members."
sidebar:
  order: 1
---

- **Standing** shows at a glance who is in good standing, in a grace period or lapsed.
- **Import members from a spreadsheet**: the file is checked before anything is saved.
- Take records off the roster and restore them later.
- Share your join page from the **Overview**.

## Standing

| Standing | Meaning |
|---|---|
| **Good** | The membership is current (or lifetime) |
| **Grace** | It expired recently but is still within your **Grace period** (30 days unless changed in **Settings** > **General**) |
| **Lapsed** | It expired and the grace period has passed. Renewing starts a new term |

## Adding members

- **One at a time:** **Add member** with a name and an optional email. Then record their membership and payment ([Payments and receipts](/charter/money/payments/#recording-a-payment-by-hand)).
- **From a spreadsheet:** **Import members** takes a CSV file with these columns (a header row with these names; only `name` or `email` is required):

| Column | Example | Notes |
|---|---|---|
| `name` | Grace Odum | Needed for a new member without an email |
| `email` | grace@example.org | Matches existing members, so importing twice doesn't make duplicates |
| `level` | Regular | The name of an active membership level |
| `term` | 1 year | Which term of that level; needed only when the level has more than one |
| `joined_on` | 2025-03-01 | `YYYY-MM-DD`; today if left empty |
| `paid_through` | 2026-02-28 | `YYYY-MM-DD`; needed for any membership that isn't lifetime |
| `chapter` | Post 12 Austin | On a national, which chapter |

The whole file is checked first and nothing is saved until every row is right; any problem is listed by row number (for example *there's no active level called "Gold"*, or *write dates as YYYY-MM-DD*).

## Member fields

Collect the details your organization needs (rank, branch, a member number, a birthday) under **Settings** > **Member fields**. Each field has:

| Setting | Choices |
|---|---|
| **Field name** | What members and admins see |
| **Type** | **Text**, **Number**, **Date**, **Yes / no**, **Pick one**, **Pick several**, or **Ordered list (e.g. rank)**, whose order lets [pricing rules](/charter/membership/levels-and-dues/#different-prices-for-different-members) compare answers (for example a rank or above) |
| **Choices** | For the pick and ordered types; for an ordered list, from lowest to highest |
| **Who can see it** | **Admins only**, **Members of the organization** or **Anyone**. Admins always see it |
| **Members can edit their own** | Whether members may change their own answer |
| **Show in directory** | Whether it's listed next to members' names in the member directory |
| **Required** | Members must answer it (on the join page, and when admins add them). On a national's chapter fields: **Required for every chapter** |

A national's member fields apply to its chapters too. **Chapter fields** (on a national) are details about each chapter, such as a charter number or meeting place, filled in when a chapter is added.

## The member directory and privacy

Members can see each other in the member directory if they're listed. **Members are listed in the member directory** (in **Settings** > **General**) sets the default; each member can opt in or out on their own membership card. Members who opted out are left out of chapter exports unless the national allows chapter admins to include them.

## Taking a member off the roster

Remove a member's record to take them off the roster; their payments and receipts stay in the record. Restore the record later if they come back.

