# AGENTS.md — OpenAppHub Docs

Rules for AI coding agents working in this repository.

## What this repo is

User documentation for the OpenAppHub suite, built with Astro Starlight and deployed to docs.openapphub.org by Cloudflare. Readers are membership secretaries, board members and treasurers, not developers (except the self-hosting pages).

## Writing rules

- **Describe what the app does today.** Check every claim against the app's repository (code, `CHANGELOG.md`, `docs/`). Never document a planned feature as available. Mark planned features with a `:::note[Not available yet]` callout or put them on the app's **Known limits** page.
- **Use the app's exact words** for buttons, menus and messages, in **bold**.
- **Plain English.** Short sentences. Second person ("you"). Explain any accounting or governance term the first time, or link to the app's glossary.
- **Task-first.** Lead each page with what the reader can do, then numbered steps.
- **One topic per page.** Link to related pages instead of repeating them.
- **No hard-coded prices.** Prices live only on `hub/hosting/plans.md`.
- **Quote** every frontmatter `title` and `description`.

## Structure

- Each app is a tab: `src/content/docs/{hub,charter,board,ledger}/`.
- Each tab's sidebar groups are its subfolders, listed in `astro.config.mjs`.
- Each app keeps a `help/` folder with: `faq.md`, `troubleshooting.md`, `known-limits.md`, `self-hosting.md` and `glossary.md`. Update them when features change.

## When an app changes

When a pull request in an app repository changes something users see, update the matching page here: the feature page, the FAQ or troubleshooting entry if a message changed, and Known limits if something new became available.

## Checks before every pull request

```sh
npm ci
npm run build
npm run check:links
```

The build must pass with no broken internal links.

## Don'ts

- Don't add analytics, trackers or third-party scripts.
- Don't include real people's personal data, real passwords or invitation links in examples. Demo credentials only where the app itself shows them publicly.
- Don't add "Generated with Claude Code" lines or Claude session links to commits, pull requests or pages.
