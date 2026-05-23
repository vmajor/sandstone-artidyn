import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";  
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    drafts: true,
    shikiConfig: {
      theme: "css-variables",
    },
  },
  shikiConfig: {
    wrap: true,
    skipInline: false,
    drafts: true,
  },
  site: "https://www.artidyn.ai",
  trailingSlash: "always",
  integrations: [tailwindcss(), sitemap(), mdx()],
  image: {
    domains: ["www.artidyn.ai", "artidyn.ai"],
  },
});
