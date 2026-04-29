# Agent Instructions: Artidyn Robotics

## Project Context
- **Framework:** Astro 5.x (Strictly SSG - Static Site Generation)
- **Styling:** Tailwind CSS 4.x (Vite-based)
- **Environment:** Jules Session VM
- **Primary Domain:** https://artidyn.ai

## Architectural Constraints
1. **SSG Only:** Do not attempt to switch to SSR or Hybrid mode.
2. **No Netlify Functions:** For interactivity (like forms), use Netlify's built-in `data-netlify="true"` attribute or a third-party POST endpoint.
3. **Native APIs First:** Prioritize native HTML/CSS/JS (e.g., `<dialog>` for modals, View Transitions API) over heavy 3rd-party libraries.
4. **SEO Priority:** Ensure all content is present in the initial HTML. Use the `@astrojs/sitemap` integration and keep metadata synchronized with the Artidyn brand.
5. **Image Management:**
   - **Storage:** All images must be placed in the `public/images/` directory.
   - **Organization:** Product images should be organized in per-product subdirectories (e.g., `public/images/products/[robot-slug]/`).
   - **Referencing:** Use absolute paths starting with `/images/` (e.g., `src="/images/products/yhy-cr01-pro/cover.png"`).
   - **Astro Assets:** Avoid using `astro:assets` and the `<Image />` component due to compatibility issues with some image formats in this environment. Use standard `<img>` tags.

## Operational Rules
1. **Never Suicide:** If a command fails, do not exit the session or enter a debug loop. Report the error and wait for user input.
2. **Verification:** Use `npm run build` to verify changes. Never run `npm test` as it is a dummy script.
3. **Build Watcher:** Note that `npm run build` may hang after completion (waiting for changes). Manually exit the command once the build is successful.
4. **Dependency Management:** Use `npm`. Do not update `package.json` unless a new integration is strictly required.
5. **Tailwind v4:** This project uses `@tailwindcss/vite`. Do not use old `tailwind.config.js` patterns.

## Error Handling
- If `astro check` fails on TypeScript types, focus only on the specific line causing the break rather than refactoring the whole component.
