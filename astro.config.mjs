// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://yutalinux.github.io",
  base: "/blog",
  integrations: [tailwind(), sitemap()],
  markdown: {
    rehypePlugins: [
      "rehype-slug",
      ["@jsdevtools/rehype-toc", { headings: ["h2", "h3", "h4"] }],
      [
        "rehype-autolink-headings",
        {
          behavior: "append",
          content: {
            type: "element",
            tagName: "i",
            properties: {
              className: ["heading-anchor", "fa", "fa-link"],
            },
            children: [],
          },
        },
      ],
      ["@jsdevtools/rehype-toc", { headings: ["h2", "h3", "h4"] }],
    ],
  },
});
