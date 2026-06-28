# landing — starter

Astro + Tailwind v4 + shadcn (React islands) + GSAP, wired to the shared
`@starters/design` token layer. Marketing-oriented, minimal JS.

## Stack
- **Astro 7** — static, ships zero JS except hydrated islands
- **Tailwind v4** — tokens imported from `@starters/design/theme.css`
- **shadcn/ui** — used as React islands (`@astrojs/react`); see `ThemeToggle`
- **GSAP + ScrollTrigger** — the single animation library here (no Framer Motion)

## What it ships (intentionally light)
- Header with nav + theme toggle (a React island proving shadcn works in Astro)
- Hero with entrance animation + two CTAs
- Features section with scroll-triggered reveals
- No-flash dark mode via an inline `<script>` in the layout

> This shell stays light on purpose: the real landing concept comes from your
> Claude-design → redesign-prompt workflow. The starter only proves the stack
> and the animation wiring.

## Run (from the monorepo root `~/starters`)
```bash
pnpm install
pnpm dev:landing       # or: pnpm --filter landing dev
```

## Design tokens
Colors/radius live in `packages/design/src/theme.css` (single source for every shell).
This app keeps only its shadcn `@theme inline` mapping in `src/styles/global.css`.

## Animation
GSAP runs from the inline `<script>` in `src/pages/index.astro` and respects
`prefers-reduced-motion`. Keep to one animation library per project.
