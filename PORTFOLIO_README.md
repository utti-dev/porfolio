# Portfolio README

This repository contains a minimal portfolio site scaffolded with React + Vite + Tailwind CSS. It uses placeholders for content. Replace the placeholder text and images in `src/App.jsx` and `src/components` with your real content.

Key files added/changed:

- `tailwind.config.js` — Tailwind configuration (content paths)
- `postcss.config.cjs` and `postcss.config.js` — PostCSS configuration (both provided; `.cjs` avoids ESM issues when `package.json` sets `type: "module"`)
- `src/index.css` — includes Tailwind directives (`@tailwind base`, `components`, `utilities`) and some custom styles
- `src/components/*` — Header, Footer, ProjectCard components
- `src/App.jsx` — main app with placeholder projects and layout

Dependencies installed:

- `tailwindcss` (v4 series in this repo) — utility-first CSS framework
- `@tailwindcss/postcss` — PostCSS adapter required by Tailwind v4
- `postcss` and `autoprefixer` — PostCSS tooling

Notes about the npm/npx issue you saw:

- Older runs with `npx tailwindcss init -p` failed on your machine with "could not determine executable to run" because the project previously had Tailwind v4 installed and your npm version attempted to resolve the binary in a way that failed on your environment.
- I avoided relying on `npx` by installing `tailwindcss` and the `@tailwindcss/postcss` adapter, and I created `tailwind.config.js` and `postcss.config.cjs` manually. This allows Vite's PostCSS integration to process Tailwind directives without needing to run the Tailwind CLI as an executable.

How to run locally

```powershell
# install deps (already done in this session)
npm install

# dev server
npm run dev

# build for production
npm run build
```

Deployment (recommended: Vercel)

1. Create a GitHub repository and push this project (see commands below).
2. Sign in to Vercel and import the GitHub repo. Vercel auto-detects Vite and will build with `npm run build`.
3. Set a custom domain in Vercel if you have one.

Quick Git commands to push (replace `your-repo-url`):

```powershell
git init
git add .
git commit -m "Initial portfolio scaffold"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

If you'd like, I can create a GitHub repo for you and push these changes (I will need a GitHub token with repo permissions), or I can walk you through the Vercel import step-by-step.
