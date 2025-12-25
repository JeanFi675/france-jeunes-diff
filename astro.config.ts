import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://fjd2026.caflarochebonneville.fr',
  base: '/',
  build: {
    inlineStylesheets: 'auto',
  },
});
