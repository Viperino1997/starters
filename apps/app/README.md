# app — starter

Vite + React 19 + Tailwind v4 + shadcn/ui + Framer Motion, wired to the shared
`@starters/design` token layer. Lightweight SPA, no SSR.

## Stack
- **Vite 8 + React 19** — instant HMR, lean build
- **Tailwind v4** — tokens imported from `@starters/design/theme.css`
- **shadcn/ui** — base-ui flavored components in `src/components/ui/`
- **react-router-dom 7** — client routing
- **Custom theme provider** — class-based dark mode (no next-themes; SPA-friendly)
- **Framer Motion** (`motion`) — route transitions, respects `prefers-reduced-motion`
- **react-hook-form + zod** — validated form (via `standardSchemaResolver`)

## What it ships
- App shell: sticky header with nav + theme toggle
- `/` home with feature cards
- `/settings` real form (name, email, plan) with zod validation + sonner toast

## Run (from the monorepo root `~/starters`)
```bash
pnpm install
pnpm dev:app           # or: pnpm --filter app dev
```

## Design tokens
Colors/radius live in `packages/design/src/theme.css` (single source for every shell).
This app keeps only its shadcn `@theme inline` mapping in `src/index.css`.
