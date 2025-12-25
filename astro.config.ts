import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

export default defineConfig({
  output: 'static',
  adapter: node({
    mode: 'standalone',
  }),
  site: 'https://fjd2026.caflarochebonneville.fr',
  base: '/',
  build: {
    inlineStylesheets: 'auto',
  },
});
