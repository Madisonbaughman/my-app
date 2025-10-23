// sitemap-generator.cjs
const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream, mkdirSync, existsSync } = require('fs');
const { resolve } = require('path');

const HOSTNAME = 'https://www.mbodybetter.com';

// Add your site's public routes below
const routes = [
  '/',                 // homepage
  '/about',            // example route — delete if you don’t have it
  '/services',         // example route — delete or rename
  '/training',         // example route — delete or rename
  '/contact'           // example route — delete or rename
];

const publicDir = resolve(__dirname, 'public');
if (!existsSync(publicDir)) mkdirSync(publicDir);

const sitemapStream = new SitemapStream({ hostname: HOSTNAME });

routes.forEach((url) => {
  sitemapStream.write({ url, changefreq: 'monthly', priority: url === '/' ? 1.0 : 0.8 });
});

sitemapStream.end();

streamToPromise(sitemapStream).then((data) => {
  const outPath = resolve(publicDir, 'sitemap.xml');
  const out = createWriteStream(outPath);
  out.write(data);
  out.end();
  console.log('✅ Sitemap created at public/sitemap.xml');
}).catch((err) => {
  console.error('❌ Error generating sitemap:', err);
  process.exit(1);
});
