#!/usr/bin/env node
// Checks every internal link in the built site (dist/) points at a page or file
// that exists. Run after `npm run build`. External links aren't fetched.
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const DIST = "dist";
if (!existsSync(DIST)) {
  console.error("dist/ is missing. Run `npm run build` first.");
  process.exit(1);
}

const walk = (dir) =>
  readdirSync(dir).flatMap((n) => {
    const p = join(dir, n);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });

function exists(pathname) {
  const clean = decodeURIComponent(pathname.split("#")[0].split("?")[0]);
  const target = join(DIST, clean);
  return (
    existsSync(target) && statSync(target).isFile() ||
    existsSync(join(target, "index.html")) ||
    existsSync(`${target}.html`)
  );
}

const broken = [];
let checked = 0;
for (const file of walk(DIST).filter((f) => f.endsWith(".html"))) {
  const html = readFileSync(file, "utf8");
  const page = "/" + relative(DIST, file).replace(/index\.html$/, "").replace(/\.html$/, "");
  for (const [, href] of html.matchAll(/<a\s[^>]*href="([^"]+)"/g)) {
    if (/^(https?:|mailto:|tel:|#|javascript:)/.test(href)) continue;
    const url = new URL(href, `https://docs.openapphub.org${page}`);
    if (url.host !== "docs.openapphub.org") continue;
    checked++;
    if (!exists(url.pathname)) broken.push(`${page} → ${href}`);
  }
}

if (broken.length) {
  console.error(`${broken.length} broken internal link(s):\n  ${[...new Set(broken)].join("\n  ")}`);
  process.exit(1);
}
console.log(`Checked ${checked} internal links: none broken.`);
