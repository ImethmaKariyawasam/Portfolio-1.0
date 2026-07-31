// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: replace with the real domain once deployed to Vercel (needed for
  // canonical URLs, the OG/Twitter meta tags, and the eventual sitemap).
  site: 'https://imethmakariyawasam.vercel.app',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});