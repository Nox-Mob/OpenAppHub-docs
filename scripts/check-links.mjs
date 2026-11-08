// Checks every internal link in the built site (dist/) points to a page that exists.
// Run after `npm run build`: `npm run check:links`. Exits 1 if any link is broken.
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';

const dist = new URL('../dist/', import.meta.url).pathname;
if (!existsSync(dist)) {
  console.error('dist/ not found. Run `npm run build` first.');
  process.exit(1);
}

const htmlFiles = [];
(function walk(dir) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) walk(path);
    else if (name.endsWith('.html')) htmlFiles.push(path);
  }
})(dist);

const exists = (href) => {
  const clean = decodeURIComponent(href.split('#')[0].split('?')[0]);
  if (clean === '' || clean === '/') return existsSync(join(dist, 'index.html'));
  const target = join(dist, clean);
  return (
    existsSync(join(target, 'index.html')) ||
    (existsSync(target) && statSync(target).isFile()) ||
    existsSync(`${target}.html`)
  );
};

const broken = [];
for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  for (const [, href] of html.matchAll(/href="(\/[^"]*)"/g)) {
    if (href.startsWith('//') || href.startsWith('/_astro/') || href.startsWith('/pagefind/')) continue;
    if (!exists(href)) broken.push(`${relative(dist, file)} → ${href}`);
  }
}

if (broken.length) {
  console.error(`Broken internal links (${broken.length}):`);
  for (const b of [...new Set(broken)]) console.error(`  ${b}`);
  process.exit(1);
}
console.log(`Checked ${htmlFiles.length} pages: no broken internal links.`);
