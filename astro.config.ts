import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://JeanFi675.github.io',
  base: '/france-jeunes-diff',
  build: {
    inlineStylesheets: 'auto',
  },
});