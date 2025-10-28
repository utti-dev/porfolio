# Portfolio (React + Vite + Tailwind)

This repository is a minimal portfolio scaffold built with React, Vite and Tailwind CSS. It contains placeholder content you can replace with your own name, bio, projects and images.

Summary of final outputs (what you have now)
- Local dev server: `npm run dev` (Vite)
- Production build: `npm run build` → output in `dist/` (verified successful build)
- Unit tests: `npm run test` (Vitest) — tests pass locally
- Repo pushed to: https://github.com/utti-dev/porfolio

Quick start

```powershell
npm install
npm run dev        # start dev server
npm run build      # production build (output in dist/)
npm run test       # run unit tests (Vitest)
```

Project structure highlights

- `src/App.jsx` — main app layout and placeholder content
- `src/components/*` — Header, Footer, ProjectCard, Contact
- `src/pages/About.jsx` — About page placeholder
- `src/index.css` — includes Tailwind directives and some custom styles
- `tailwind.config.js` — Tailwind configuration
- `postcss.config.cjs` and `postcss.config.js` — PostCSS config (both present; `.cjs` avoids ESM problems when `package.json` sets `type: "module"`)

Contact form

The contact form posts to an endpoint configured with the environment variable `VITE_FORM_ENDPOINT`. Recommended: use Formspree for fastest setup:

1. Create a free account at https://formspree.io/ and create a new form.
2. Copy the form endpoint URL (looks like `https://formspree.io/f/xxxxxxxx`).
3. In Vercel: Project → Settings → Environment Variables → Add
   - Name: `VITE_FORM_ENDPOINT`
   - Value: the Formspree URL
   - Environment: Production (and Preview/Development if desired)
4. Redeploy the project in Vercel so the env var is available at runtime.

Testing

Unit tests are written with Vitest + Testing Library. Run `npm run test` to execute tests. The test environment is configured to use `jsdom` so DOM APIs are available (Vitest is invoked with `--environment jsdom`).

Issues I encountered and how I fixed them (detailed)

1) "could not determine executable to run" when running `npx tailwindcss init -p`
   - Cause: On your environment npm/npx failed to resolve the tailwindcss binary (this can happen with some npm versions and package export patterns).
   - Fix: I avoided invoking the Tailwind CLI. Instead I installed `tailwindcss` and the PostCSS adapter and configured Tailwind to run via Vite's PostCSS pipeline.
     Commands used:
     ```powershell
     npm install -D tailwindcss postcss autoprefixer @tailwindcss/postcss
     ```
     Files added: `tailwind.config.js`, `postcss.config.cjs`, and I added `@tailwind` directives to `src/index.css`.

2) PostCSS config error: "module is not defined in ES module scope"
   - Cause: `package.json` contains `"type": "module"`, so files with `.js` are treated as ESM. `postcss.config.js` used CommonJS `module.exports` which raised the error.
   - Fix: Added `postcss.config.cjs` (CommonJS) as the authoritative config and updated `postcss.config.js` to an ESM `export default` form to be compatible.

3) Tailwind v4 PostCSS integration change
   - Cause: Tailwind v4 moved the PostCSS plugin into a separate package; using `tailwindcss` directly as a PostCSS plugin produced an error.
   - Fix: Installed `@tailwindcss/postcss` and updated PostCSS config to use it.

4) Peer dependency conflicts (Testing libs vs React 19)
   - Cause: @testing-library/react had a peer dependency targeting React 18 while this project uses React 19.
   - Fix: Installed testing libs with `--legacy-peer-deps` and later used `npm audit fix --force` to resolve dev dependency advisories. This used force/legacy flags to accept peer overrides. Tests and build were validated after this.

5) Vitest test setup issues
   - Problems encountered: `test is not defined`, `expect is not defined`, `document is not defined` and import style issues with `@testing-library/jest-dom`.
   - Fixes:
     - Updated `package.json` test script to run Vitest with `--environment jsdom`.
     - Imported and extended Vitest's `expect` with jest-dom matchers: `import * as matchers from '@testing-library/jest-dom/matchers'; expect.extend(matchers)`.
     - Adjusted tests to use `getAllByText` when multiple elements matched.

6) Duplicate export in `Header.jsx`
   - Cause: During multiple edits a duplicate `export default function Header()` block existed, causing esbuild transform errors.
   - Fix: Removed the duplicate and kept a single default export.

7) npm audit advisories
   - Action: I ran `npm audit fix --force` to fix advisories. Note: `--force` may upgrade packages and override peerDependencies; I validated build and tests afterwards.

Why some of these choices are safe
- Using Vite's PostCSS pipeline (instead of calling the Tailwind CLI) is standard for Vite projects and avoids `npx` binary resolution issues.
- Using `@tailwindcss/postcss` is required for Tailwind v4 integration with PostCSS.
- Using `--legacy-peer-deps` and `--force` for dev dependencies is acceptable for local dev/test tooling when you're using bleeding-edge React versions; for production packages be cautious and prefer compatible versions.

Deployment (Vercel) — exact settings

- Import the GitHub repo `utti-dev/porfolio` into Vercel (New Project → Import Git Repo)
- Framework Preset: Vite (auto-detected)
- Build Command: `npm run build`
- Output Directory: `dist`
- Environment variable (for contact form): `VITE_FORM_ENDPOINT` = `https://formspree.io/f/xxxxxx`

After deploy, test the production URL and submit the contact form (if endpoint is configured).

Security notes

- Do not commit secrets or API keys to the repository. Use Vercel Environment Variables for secrets.
- `VITE_` prefixed variables are embedded in client bundle by Vite — do not put sensitive secrets there. For secret server-only keys use serverless functions and server-side env vars.

Next steps I can take for you (pick any)

1. Wire Formspree end-to-end: I provide the exact steps for creating the Formspree form and you add the endpoint to Vercel env vars (recommended).
2. Polish UI and accessibility: add skip links, ARIA attributes, and keyboard focus styles.
3. Add images for projects and lazy loading with <img loading="lazy"> and optimized formats.
4. Add CI (GitHub Actions) to run tests and builds on push.
5. Run Lighthouse audits and provide improvements.

If you want me to continue and perform (1) and (2), tell me and I will proceed. If you'd prefer to do the Vercel import yourself, say "I imported" and paste the production URL and I will verify and finish the contact form wiring.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
