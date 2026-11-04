# AGENTS.md

## Project overview

Portfolio site for Aftab Khalid (www.aftabkhalid.com). Next.js 16 App Router with React 19, statically exported to GitHub Pages — **no server runtime, no API routes, no ISR**. All data is read at build time from local files (e.g. Markdown posts) or hardcoded in component arrays.

## Commands

```bash
npm install          # install deps
npm run dev          # dev server on localhost:3000
npm run build        # production static export → out/
npm run lint         # eslint (next/core-web-vitals + typescript)
npm run typecheck    # tsc --noEmit (added for AI verification)
```

Before declaring any task done, run `npm run lint`, `npm run typecheck`, and when structure/build config touched, `npm run build`. There are no tests and no formatter.

## Architecture

- **Static export** — `next.config.ts` sets `output: "export"` with `images.unoptimized: true`. Every route must be statically generateable (`generateStaticParams` for dynamic segments, no server actions, no `fetch` to internal APIs).
- **Path alias** — `@/*` maps to `src/*`.

### Routes (src/app)

| Route | Purpose |
|---|---|
| `page.tsx` | Home page; composes all section components from `src/components/` |
| `about/page.tsx` | About page |
| `resume/page.tsx` | Résumé page (links to `/public/aftab-resume.pdf`) |
| `writing/page.tsx` | Blog index |
| `writing/[slug]/page.tsx` | Blog post detail; renders Markdown → HTML via `src/lib/posts.ts` (`gray-matter` + `remark`); `generateMetadata` per post |
| `sitemap.ts` / `robots.ts` | SEO metadata routes generated into `out/` at build time (include all published posts) |

### Key directories

| Path | Purpose |
|---|---|
| `src/app/` | App router entry, `layout.tsx`, routes, `globals.scss`, local fonts |
| `src/app/tokens/` | SCSS design tokens: `_colors`, `_typography`, `_spacing`, `_layout`, `_breakpoints`, forwarded by `_index.scss` |
| `src/components/` | One subfolder per page section (hero, navigation, case-studies, services, engagement, footer, etc.) |
| `src/lib/posts.ts` | Markdown post loader (front matter via `gray-matter`, body via `remark-html`); posts live in `content/posts/*.md` |
| `src/lib/seo.ts` | `SITE_URL`, `OG_IMAGE`, and `pageMetadata()` helper (title, description, canonical, OG/Twitter) used by every route |
| `content/posts/` | Blog posts as Markdown with `title`, `category`, `date` (ISO `yyyy-mm-dd`), `author`, optional `description` and `draft: true` front matter |
| `public/` | Static assets (portfolio images in `public/portfolio/`, résumé PDF, SVGs, `.nojekyll`) |

### Layout (`src/app/layout.tsx`)

Imports, in order:

1. `bootstrap/dist/css/bootstrap.min.css` (global CSS)
2. `globals.scss`
3. `<SmoothScroll />` (Lenis, client-only) — rendered here exactly once
4. `<TextRevealProvider>` — wraps all page children
5. Fonts via `next/font`: `Google_Sans` (`--font-google-sans`) and local Rubik files (`--font-rubik`)

### Tech stack specifics

- **CSS & Layout Framework**: Bootstrap 5.3 (imported globally) integrated with custom SCSS. **Tailwind CSS is NOT used** — the Tailwind PostCSS plugin and devDependencies exist from the create-next-app scaffold, but no Tailwind utilities appear anywhere in source. Never generate them.
- **SCSS tokens**: Import via `@use "@/app/tokens"` (or relative `@use "./tokens"`). Note `_typography.scss` generates global `.fs-*` font-size utility classes and `_colors.scss` emits `--color-*` CSS custom properties. Do not hardcode raw hex values when a token or Bootstrap variable (`var(--bs-*)`) fits.
- **GSAP**: All animations use `gsap`, `ScrollTrigger`, and `@gsap/react` (`useGSAP()` hook). Always pass a container `scope` (`scope: containerRef`) and call `gsap.registerPlugin(ScrollTrigger)` at module level where needed.
- **Lenis**: Smooth scrolling handled solely by `src/components/smooth-scroll/SmoothScroll.tsx`, rendered strictly once inside `layout.tsx`. It syncs Lenis with the GSAP ticker and `ScrollTrigger.update`. Do not duplicate in `page.tsx`.
- **Shaders**: `src/components/hero/HeroShader.tsx` and `src/components/pre-footer/GLSLHills.tsx` use the `shaders` npm package (`shaders/react`: `<Shader>`, `<Swirl>`, `<ChromaFlow>`, `<FlutedGlass>`, `<FilmGrain>` …) — client-only WebGL components. `three` is also present in dependencies for shader work.

## Blog writing workflow

When writing or editing blog posts (`content/posts/*.md`):

- Always run the prose through the installed humanizer skill before committing the post for review or publication. It removes AI writing patterns from the text.
- If the skill is not already loaded in the session, fetch it with `npx skills use "https://github.com/blader/humanizer" --skill "humanizer"`.
- The skill's file-mode rules apply unchanged: keep front matter, code blocks, commands, paths, and link targets untouched; only prose gets rewritten.
- New posts start as `draft: true` and are only flipped to publishable when the owner asks.

## Component conventions

- All interactive/animated components must include `"use client";` at the top.
- Each component under `src/components/` has a `.tsx` file plus a matching `.scss` (preferred) or `.css` file, imported directly by the component (e.g. `CaseStudies.tsx` + `CaseStudies.scss`).
- Use path aliases when importing: `@/components/...`, `@/lib/...`, `@/app/tokens`.
- Combine Bootstrap grid (`container`, `row`, `col-*`) and utility classes (`d-flex`, `mb-5`, `.fs-14` …) with custom SCSS/`.ak-*` classes for styling.

## Gotchas & Strict Rules

1. **NO TAILWIND**: Never generate Tailwind utilities (`flex-col`, `gap-4`, `bg-neutral-900`, `rounded-3xl`, `p-8`). Use Bootstrap 5 utilities/custom SCSS instead.
2. **NO IMAGE OPTIMIZATION**: Use plain `<img>` or Next `<Image unoptimized />`; static export disables server-side image optimization.
3. **DO NOT MODIFY `out/`**: build artifact, regenerated by `npm run build`. Also ignore `.next/`, `tsconfig.tsbuildinfo`, `.DS_Store`, `*.tsbuildinfo`.
4. **GSAP REACT CLEANUP**: Scope GSAP work under `useGSAP(() => { ... }, { scope: containerRef })`.
5. **SINGLE LENIS INSTANCE**: `<SmoothScroll>` inside `layout.tsx` only.
6. **STATIC-EXPORT SAFE**: New routes need `generateStaticParams`/plain components; never introduce server-only runtime behavior.
7. **DO NOT DELETE junk/unused files**: `src/components/*/junk.html`, duplicated `Footer.tsx` vs `FooterSection.tsx` may contain recovered draft code the owner wants to keep. Reference only what is actually imported (e.g. `FooterSection`).
8. **ALWAYS PROVIDE A PR LINK**: Every time code is pushed to GitHub, create a PR (if one does not already exist for that branch) and send the owner the PR URL in the reply. This is a strict rule, never skip it.

## CI / Deploy

- `.github/workflows/deploy.yml` builds on push to `main` with Node 24 and deploys `./out` to GitHub Pages.
- `CNAME` = `www.aftabkhalid.com` — no `basePath` is set; root-relative asset paths (`/portfolio/...`) are correct.
- Only merge/PR to `main` if you intend to trigger the deploy.

## AI tooling config

- `opencode.json` — pins the OpenCode chat model.
- `AGENTS.md` (this file) is the single source of truth for coding agents.
