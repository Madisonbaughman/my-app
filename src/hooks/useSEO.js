import { useEffect } from 'react';

export function useSEO({
  title,
  description,
  og = {},
  twitter = {},
}) {
  useEffect(() => {
    if (title) document.title = title;

    const setMeta = (selector, attr, content) => {
      if (!content) return;
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        if (selector.startsWith('meta[name=')) {
          el.setAttribute('name', selector.match(/meta\[name="(.+?)"\]/)[1]);
        } else if (selector.startsWith('meta[property=')) {
          el.setAttribute('property', selector.match(/meta\[property="(.+?)"\]/)[1]);
        }
        document.head.appendChild(el);
      }
      el.setAttribute(attr, content);
    };

    if (description) setMeta('meta[name="description"]', 'content', description);

    // Open Graph
    if (og.title) setMeta('meta[property="og:title"]', 'content', og.title);
    if (og.description) setMeta('meta[property="og:description"]', 'content', og.description);
    if (og.image) setMeta('meta[property="og:image"]', 'content', og.image);
    if (og.url) setMeta('meta[property="og:url"]', 'content', og.url);
    if (og.type) setMeta('meta[property="og:type"]', 'content', og.type);

    // Twitter
    if (twitter.card) setMeta('meta[name="twitter:card"]', 'content', twitter.card);
    if (twitter.title) setMeta('meta[name="twitter:title"]', 'content', twitter.title);
    if (twitter.description) setMeta('meta[name="twitter:description"]', 'content', twitter.description);
    if (twitter.image) setMeta('meta[name="twitter:image"]', 'content', twitter.image);

  }, [title, description, og.title, og.description, og.image, og.url, og.type, twitter.card, twitter.title, twitter.description, twitter.image]);
}
