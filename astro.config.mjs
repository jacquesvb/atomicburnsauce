// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

import atariTheme from './src/styles/shiki-atari.json';

// The workflow sets BASE_PATH and SITE; local dev defaults to the root.
const base = process.env.BASE_PATH ?? '/';
const site = process.env.SITE ?? 'https://www.atomicburnsauce.com';

// https://astro.build/config
export default defineConfig({
  site,
  base,
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
