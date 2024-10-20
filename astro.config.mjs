// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://yutalinux.github.io",
  base: "/blog",
  integrations: [tailwind(), sitemap(), react()],
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
    ],
  },
});
