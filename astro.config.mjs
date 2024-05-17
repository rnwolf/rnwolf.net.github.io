import { defineConfig } from 'astro/config';
import { remarkReadingTime } from './remark-reading-time.mjs';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.rnwolf.net',
  integrations: [mdx()],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
});