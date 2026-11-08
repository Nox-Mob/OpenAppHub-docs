# OpenAppHub Docs

User documentation for OpenAppHub and its apps, published at **docs.openapphub.org**.

Built with [Astro Starlight](https://starlight.astro.build). Each app has its own tab with its own sidebar (via [starlight-sidebar-topics](https://github.com/HiDeoo/starlight-sidebar-topics)), and the whole site is searchable.

| Tab | Folder |
|---|---|
| OpenAppHub (the suite: accounts, hosting, data, help) | `src/content/docs/hub/` |
| OpenCharterApp | `src/content/docs/charter/` |
| OpenBoardApp | `src/content/docs/board/` |
| OpenLedgerApp | `src/content/docs/ledger/` |

## Editing

Every page is a Markdown file. To add a page, create a `.md` file in the right folder with:

```md
---
title: "Page title"
description: "One sentence shown in search results."
sidebar:
  order: 3
---
```

Pages appear in the sidebar automatically, sorted by `sidebar.order`. Sidebar groups (the folders) are listed in `astro.config.mjs`.

Callouts:

```md
:::note[Not available yet]
Text.
:::
```

Kinds: `note`, `tip`, `caution`, `danger`.

`draft: true` in a page's frontmatter keeps it off the published site. `hub/hosting/plans.md` is a draft until hosted plans launch.

## Running it

You don't need to run anything locally. Cloudflare builds the site on every push to `main`.

If you do want to preview it (Node.js 22+):

```sh
npm ci
npm run dev          # http://localhost:4321
npm run build        # builds to dist/
npm run check:links  # checks every internal link in dist/
```

## Deploying on Cloudflare

1. Create a GitHub repository `Nox-Mob/OpenAppHub-Docs` and push this folder to it.
2. In Cloudflare: **Workers & Pages → Create → Import a repository**, and pick it.
   - Build command: `npm run build`
   - Deploy command: `npx wrangler deploy` (uses `wrangler.jsonc`)
3. In the new Worker's **Settings → Domains & Routes**, add the custom domain `docs.openapphub.org`.

Every push to `main` then rebuilds and publishes the site. Pull requests get a preview link.

## Keeping the docs true

Docs describe what the apps do **today**. Anything planned is marked as not available yet.

When an app changes something a user would notice, the same change should update the matching page here. The source of truth for each app's behaviour is its repository: `docs/user-testing.md` and `CHANGELOG.md` (OpenCharterApp), `docs/architecture.md` and `roadmap.md` (OpenBoardApp), and `CHANGELOG.md`, `docs/architecture.md` and `docs/desktop.md` (OpenLedgerApp).

See `AGENTS.md` for the rules AI coding agents follow in this repository.
