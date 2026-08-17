# AGENTS.md

## Project overview

Single-page Next.js portfolio site for Aftab Khalid (www.aftabkhalid.com). Static export only — no server runtime.

## Commands

```bash
npm install          # install deps
npm run dev          # dev server on localhost:3000
npm run build        # production static export → out/
npm run lint         # eslint (next/core-web-vitals + typescript)
```

There are no tests, no typecheck script (use `npx tsc --noEmit` if needed), no CI workflows, and no formatter.

## Architecture

- **Static export** — `next.config.ts` sets `output: "export"` with unoptimized images (`images.unoptimized: true`).
- **Single route** — `src/app/page.tsx` is the primary page composing all section components.
- **Path alias** — `@/*` maps to `src/*`.

### Key directories

| Path | Purpose |
|---|---|
| `src/app/` | App router entry, `layout.tsx`, `page.tsx`, global SCSS, design tokens |
| `src/app/tokens/` | SCSS design tokens: colors, typography, spacing, layout, breakpoints |
| `src/components/` | One subfolder per page section (hero, navigation, case-studies, etc.) |
| `src/lib/animations/` | GSAP animation utilities and helper functions |
| `public/` | Static assets (images, SVGs, `.nojekyll`) |

### Tech stack specifics

- **CSS & Layout Framework**: Bootstrap 5.3 (Grid system, Flexbox, Utilities, Navbar) integrated with custom SCSS. **Tailwind CSS is NOT used.**
- **Bootstrap 5.3**: Imported globally. Layouts must rely on the Bootstrap grid (`container`, `container-fluid`, `row`, `col-*`) and standard Bootstrap 5 utility classes (`d-flex`, `align-items-center`, `justify-content-between`, `p-4`, `p-md-5`, `mb-5`, `position-sticky`, `top-0`, `rounded-4`, `bg-dark`, `text-light`, etc.).
- **SCSS tokens**: `src/app/tokens/` contains SCSS maps for colors, typography, and custom design variables. Always import via `@use "@/app/tokens"` (or relative `@use "./tokens"`) in `.scss` files. Do not hardcode raw hex values when design tokens or Bootstrap CSS variables (`var(--bs-*)`) are available.
- **GSAP**: All animations must use `gsap`, `ScrollTrigger`, and `@gsap/react` (`useGSAP()` hook). Always pass a container `scope` (`scope: containerRef`) to ensure proper context reverting and memory cleanup in React 19.
- **Lenis**: Smooth scrolling handled via `src/components/smooth-scroll/SmoothScroll.tsx`. MUST be rendered strictly inside `src/app/layout.tsx`. Do not duplicate inside `page.tsx`.
- **Shaders**: Client-only WebGL components (e.g. `HeroShader.tsx`).

### Component conventions

- All interactive/animated components must include `"use client";` at the top.
- Each component directory inside `src/components/` contains a `.tsx` file and a matching `.scss` or `.css` file (e.g., `CaseStudies.tsx` + `CaseStudies.scss`).
- Use path aliases when importing: `@/components/...` or `@/lib/...`.
- Combine Bootstrap 5 utility classes with custom SCSS rules for precise styling.

## Gotchas & Strict Rules

1. **NO TAILWIND**: Never generate Tailwind CSS utility classes (e.g., `flex-col`, `gap-4`, `bg-neutral-900`, `rounded-3xl`, `p-8`). Use Bootstrap 5 classes or custom SCSS instead.
2. **NO IMAGE OPTIMIZATION**: Use standard `<img>` or Next.js `<Image unoptimized />` because static export disables server-side image optimization.
3. **DO NOT MODIFY `out/`**: The `out/` folder is generated on build.
4. **GSAP REACT CLEANUP**: Always scope GSAP logic with `useGSAP(() => { ... }, { scope: containerRef })` to prevent broken animations during Next.js client renders.
5. **SINGLE LENIS INSTANCE**: Ensure `<SmoothScroll>` wraps the app strictly once inside `layout.tsx`.