---
title: "Troubleshooting"
description: "Fixes for common problems in OpenCharterApp."
sidebar:
  order: 2
---

| Problem | Likely cause | What to do |
|---|---|---|
| "Email or password is incorrect" | Wrong email or password, or the account uses Google sign-in | Check both; try **Continue with Google**; or reset your password |
| No password reset email | Wrong address, spam folder, or email not configured (self-hosted) | Check spam and the address; self-hosters should check Supabase email settings |
| An invitation link says it's used or unavailable | Already accepted, expired (14 days) or revoked | Ask for a new link |
| A setting is read-only with "Locked by a parent organization" | Your national locked it | Ask the national's administrator |
| "EIN must look like 12-3456789" | EIN format | Enter nine digits as `12-3456789` |
| Can't appoint someone to a seat | They're not in good standing, or their membership was cancelled | Record or renew their membership first |
| Can't change a seat's "Used by" | Someone still holds it where it would be removed | End that term first |
| Can't remove a member | It's you, they have a role, or it's a chapter record in the home-chapter model | Remove the role first, or remove them at the national |
| A chapter price is refused | It's outside the national's chapter price range | Use a price inside the range shown |
| Join page says joining opens once payments are connected | Stripe isn't connected | Connect it on Settings → Payments |
| "Rank is required" (or another field) on the join page | A required member field is empty | Fill it in |
| Payment went through but the return page keeps waiting | Stripe is slow to confirm | Wait; the page confirms by checking with Stripe. Refresh after a minute |
| Refunds don't show | The Stripe webhook isn't set up correctly | Check the webhook address, events and signing secret on Settings → Payments |
| Chapter approval says the national membership isn't active | Two-level dues | Approve at the national first, then the chapter |
| A member is missing from the export | They opted out of the directory | Tick **Include … who opted out**, if allowed |
| Import check lists problems | Dates, unknown levels or duplicate emails | Fix the rows listed and check again; nothing was saved |
| A screen says it "needs a database update" | A new feature's database change hasn't been applied (self-hosted) | Apply the latest database migrations |

Still stuck? See [Getting help](/hub/help/support/).
