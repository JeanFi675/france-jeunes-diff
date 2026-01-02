import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'static',
  site: 'https://fjd2026.caflarochebonneville.fr',
  base: '/',

  build: {
    inlineStylesheets: 'auto',
  },

  integrations: [sitemap()],
});