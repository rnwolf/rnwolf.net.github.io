import { defineConfig } from 'astro/config';
import { remarkReadingTime } from './remark-reading-time.mjs';
import remarkToc from 'remark-toc';
import rehypeExternalLinks from 'rehype-external-links';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.rnwolf.net',
  integrations: [mdx()],
  markdown: {
    remarkPlugins: [remarkReadingTime],
    remarkPlugins: [remarkToc],
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          content: { type: 'text', value: ' 🔗' }
        }
      ],
    ]

  },
});