import { useEffect } from 'react';
import { SITE_URL, DEFAULT_IMAGE, DEFAULT_TITLE, buildTitle } from './routeMeta';

function setMeta(attr, attrName, name, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${attrName}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, attrName);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function setJsonLd(data) {
  if (!data) return;
  const el = document.createElement('script');
  el.type = 'application/ld+json';
  el.textContent = JSON.stringify(data);
  el.dataset.seoJsonLd = 'true';
  const old = document.head.querySelector('script[data-seo-json-ld="true"]');
  if (old) old.remove();
  document.head.appendChild(el);
}

/**
 * Lightweight SEO manager for the SPA. Updates the document head
 * (title, description, canonical, Open Graph, Twitter cards) on route change.
 */
export default function SEO({
  title,
  description,
  path = '/',
  image = DEFAULT_IMAGE,
  type = 'website',
  jsonLd,
}) {
  useEffect(() => {
    const fullTitle = buildTitle(title) || DEFAULT_TITLE;
    const url = path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`;

    document.title = fullTitle;
    setMeta('name', 'description', 'content', description);
    setMeta('property', 'og:title', 'content', fullTitle);
    setMeta('property', 'og:description', 'content', description);
    setMeta('property', 'og:url', 'content', url);
    setMeta('property', 'og:image', 'content', image);
    setMeta('property', 'og:type', 'content', type);
    setMeta('name', 'twitter:title', 'content', fullTitle);
    setMeta('name', 'twitter:description', 'content', description);
    setMeta('name', 'twitter:image', 'content', image);
    setLink('canonical', url);

    const prevJsonLd = document.head.querySelector('script[data-seo-json-ld="true"]');
    if (prevJsonLd) prevJsonLd.remove();
    setJsonLd(jsonLd);

    return () => {
      const el = document.head.querySelector('script[data-seo-json-ld="true"]');
      if (el) el.remove();
    };
  }, [title, description, path, image, type, jsonLd]);

  return null;
}