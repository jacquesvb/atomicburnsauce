// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

import atariTheme from './src/styles/shiki-atari.json';

// https://astro.build/config
export default defineConfig({
  site: 'https://atomicburnsauce.com',
  integrations: [mdx(), sitemap()],

  markdown: {
    shikiConfig: {
      theme: /** @type {any} */ (atariTheme),
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
