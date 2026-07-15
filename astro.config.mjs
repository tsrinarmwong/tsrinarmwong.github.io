import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://tsrinarmwong.github.io',
  integrations: [mdx(), sitemap()],
  // The site is a single page now; keep old inbound URLs working.
  redirects: {
    '/work': '/#work',
    '/about': '/#about',
  },
});
