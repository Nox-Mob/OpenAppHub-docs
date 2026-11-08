---
title: "Importing members"
description: "Bring in your existing roster from a spreadsheet, checked before anything is saved."
sidebar:
  order: 4
---

Import your existing members from a CSV file. The app checks the whole file first and saves nothing until it's clean.

## Steps

1. **Members → Import members → Download a template.**
2. Fill in one row per person in Excel or Google Sheets. You can include their level, start and paid-through dates, and member fields such as Rank. Use **Lifetime** for lifetime members, with no paid-through date. A row with only a name is fine.
3. Save the file as **CSV** and choose it.
4. Check the **column matching.** Columns are matched from the headings; change any that are wrong. Your member fields are offered too.
5. Press **Check the file.** Problems are listed by row number, and nothing is saved.
6. Fix the file, choose it again and check again.
7. When there are no problems, press **Import *N* members**.

## Common problems

| Problem | Fix |
|---|---|
| A date the app can't read | Use the format shown in the template |
| A level that doesn't exist | Create the level first, or correct the spelling to match exactly |
| The same email twice | Each person needs their own email, or leave it blank |
| Accents look wrong | Save as **CSV UTF-8** in Excel |

## Importing again

Importing the same people again **updates** them instead of duplicating them: the check says "3 already here (they'll be updated)". You can fix mistakes in your spreadsheet and re-import.

## Good to know

- Every import is recorded in the **Audit log**.
- In the home-chapter model, import at the **national**, with a **Chapter** column. Chapters don't have an Import button.
- Imported members have no sign-in until you invite them.
