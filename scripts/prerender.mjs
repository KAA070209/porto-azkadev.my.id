import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import {
  buildTitle,
  canonicalUrl,
  getRoutePaths,
  getSeoProps,
  getSitemapEntries,
} from '../src/routeMeta.js';

const distDir = path.resolve('dist');
const templatePath = path.join(distDir, 'index.html');
const serverEntryPath = path.resolve('dist-ssr', 'entry-server.js');

if (!fs.existsSync(templatePath)) {
  throw new Error(`Missing client build: ${templatePath}`);
}

if (!fs.existsSync(serverEntryPath)) {
  throw new Error(`Missing server build: ${serverEntryPath}`);
}

const template = fs.readFileSync(templatePath, 'utf8');
const { render } = await import(pathToFileURL(serverEntryPath).href);

function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function escapeAttr(value = '') {
  return escapeHtml(value).replace(/"/g, '&quot;');
}

function replaceTag(html, regex, replacement) {
  if (!regex.test(html)) return html;
  return html.replace(regex, replacement);
}

function injectSeo(html, routePath) {
  const seo = getSeoProps(routePath);
  const title = buildTitle(seo.title);
  const url = canonicalUrl(routePath);

  let output = html;

  output = replaceTag(output, /<title>[^<]*<\/title>/, `<title>${escapeHtml(title)}</title>`);
  output = replaceTag(
    output,
    /<meta name="description" content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${escapeAttr(seo.description)}" />`
  );
  output = replaceTag(
    output,
    /<link rel="canonical" href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${escapeAttr(url)}" />`
  );

  const metaTags = [
    ['property', 'og:title', title],
    ['property', 'og:description', seo.description],
    ['property', 'og:url', url],
    ['property', 'og:image', seo.image],
    ['property', 'og:image:alt', seo.title],
    ['property', 'og:type', seo.type],
    ['name', 'twitter:title', title],
    ['name', 'twitter:description', seo.description],
    ['name', 'twitter:image', seo.image],
  ];

  for (const [attr, name, content] of metaTags) {
    const escapedName = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    output = replaceTag(
      output,
      new RegExp(`<meta ${attr}="${escapedName}" content="[^"]*"\\s*\\/?>`),
      `<meta ${attr}="${name}" content="${escapeAttr(content)}" />`
    );
  }

  if (seo.jsonLd) {
    const jsonLd = JSON.stringify(seo.jsonLd).replace(/</g, '\\u003c');
    output = replaceTag(
      output,
      /<script type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/,
      `<script type="application/ld+json" data-seo-json-ld="true">${jsonLd}</script>`
    );
  }

  return output;
}

function outputFileFor(routePath) {
  if (routePath === '/') return path.join(distDir, 'index.html');
  return path.join(distDir, `${routePath.replace(/^\//, '')}.html`);
}

function buildSitemap() {
  const today = new Date().toISOString().slice(0, 10);
  const entries = getSitemapEntries();

  const urls = entries
    .map((entry) => {
      const loc = canonicalUrl(entry.path);
      const lines = [
        '  <url>',
        `    <loc>${loc}</loc>`,
        `    <lastmod>${today}</lastmod>`,
        `    <changefreq>${entry.changefreq}</changefreq>`,
        `    <priority>${entry.priority}</priority>`,
      ];
      if (entry.image) {
        lines.push('    <image:image>');
        lines.push(`      <image:loc>${entry.image}</image:loc>`);
        lines.push('    </image:image>');
      }
      lines.push('  </url>');
      return lines.join('\n');
    })
    .join('\n');

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
    '        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">',
    urls,
    '</urlset>',
    '',
  ].join('\n');
}

const routes = getRoutePaths();

for (const routePath of routes) {
  let html = injectSeo(template, routePath);
  const appHtml = render(routePath);

  if (!html.includes('<div id="root"></div>')) {
    throw new Error('Unable to find the root container in the built index.html');
  }

  html = html.replace(
    '<div id="root"></div>',
    `<div id="root" data-prerendered-path="${escapeAttr(routePath)}">${appHtml}</div>`
  );

  const file = outputFileFor(routePath);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html, 'utf8');
  console.log(`prerendered ${routePath} -> ${path.relative(distDir, file)}`);
}

fs.writeFileSync(path.join(distDir, 'sitemap.xml'), buildSitemap(), 'utf8');
console.log(`wrote sitemap.xml (${routes.length} routes)`);
