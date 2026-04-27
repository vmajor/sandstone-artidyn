# Agent Instructions: Sandstone Artidyn

## Project Context
- **Framework:** Astro 5.x (Static/SSG)
- **Styling:** Tailwind CSS 4.x (Vite-based)
- **Environment:** Jules Session VM

## Operational Rules
1. **Never Suicide:** If a command fails, do not exit the session or enter a debug loop. Report the error and wait for user input.
2. **Build over Test:** There is no unit test suite. To verify code, run `npm run build`. If it builds, the task is successful.
3. **Dependency Management:** Use `npm`. Do not update `package.json` unless a new integration (like an Astro sub-package) is required.
4. **Tailwind v4:** Note that this project uses `@tailwindcss/vite`. Do not attempt to use old `tailwind.config.js` patterns unless they are already present.

## Error Handling
- If `astro check` fails on TypeScript types, do not attempt to rewrite the entire component structure. Focus only on the specific line causing the break.