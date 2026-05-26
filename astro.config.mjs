import { defineConfig } from "astro/config";
import webmanifest from 'astro-webmanifest';
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
  integrations: [
    tailwindcss(), 
    sitemap(), 
    mdx(),
    webmanifest({
      name: "Artidyn Robotics LLC",
      short_name: "Artidyn",
      // Point this to where your master SVG actually lives in your project
      icon: "public/artidyn_corporate_green_logo.svg", 
      config: {
        insertFaviconLinks: true,
        insertThemeColorMeta: true,
        insertAppleTouchLinks: true,
      }
    })
  ],
  image: {
    domains: ["www.artidyn.ai", "artidyn.ai"],
  },
});
