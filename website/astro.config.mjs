// @ts-check
// Restart trigger

import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://tassa-butchershop.co.il',
  trailingSlash: 'never',
  build: {
    format: 'file'
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});