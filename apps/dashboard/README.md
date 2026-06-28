# dashboard — starter

Next.js (App Router) + Tailwind v4 + shadcn/ui + Framer Motion, wired to the shared
`@starters/design` token layer.

## Stack
- **Next.js 16** (App Router, Turbopack)
- **Tailwind v4** — tokens imported from `@starters/design/theme.css`
- **shadcn/ui** — base-ui flavored components in `components/ui/`
- **next-themes** — class-based dark mode (toggle in the topbar)
- **Framer Motion** (`motion`) — staggered content reveal, respects `prefers-reduced-motion`

## What it ships
- App shell: collapsible `Sidebar` + topbar (`SidebarTrigger`, theme toggle, avatar)
- Dashboard `page`: stat cards + recent-transactions table, animated on mount

## Run (from the monorepo root `~/starters`)
```bash
pnpm install
pnpm dev:dashboard      # or: pnpm --filter dashboard dev
```

## Design tokens
Colors/radius live in `packages/design/src/theme.css` (single source for every shell).
This app keeps only its shadcn `@theme inline` mapping in `app/globals.css`; edit brand
values in the shared package and they propagate here.
