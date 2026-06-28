# starters

A local pnpm-workspace monorepo of frontend starters that share **one design layer**.
Clone the shell you need and start building — no re-assembling the stack each time.

## Structure
```
starters/
├── packages/
│   └── design/          @starters/design — shared brand token VALUES (:root/.dark)
└── apps/
    ├── landing/         Astro + Tailwind v4 + shadcn islands + GSAP   (light)
    ├── dashboard/       Next.js + Tailwind v4 + shadcn + Framer Motion (full)
    └── app/             Vite + React + Tailwind v4 + shadcn + Motion   (full)
```

## The shared design layer
`packages/design/src/theme.css` holds the brand token VALUES (`:root` + `.dark`).
Every shell imports it (`@import "@starters/design/theme.css"`) and keeps only its
own shadcn `@theme inline` mapping. **Change a color there → all three shells update.**
The base is neutral on purpose; brand it per project.

## Which shell to use
- **landing** — marketing pages. Stays light: your real landing concept comes from the
  Claude-design → redesign-prompt workflow; this only proves the stack + animation.
- **dashboard** — app shells with repetitive structure (sidebar, tables, forms).
- **app** — lightweight SPA, no SSR.

## Animation rule
One animation library per project by default (GSAP for landing, Framer Motion for the
React shells). Add a second only if it owns a distinct concern, with a clear boundary.

## Run
```bash
pnpm install
pnpm dev:landing      # or dev:dashboard / dev:app
```

## Conventions
- Tailwind v4 across all shells (CSS-first, `@theme inline`).
- shadcn/ui (base-ui flavor) — components live per shell in `components/ui/`.
- Class-based dark mode (`.dark`), values from the shared layer.
- TypeScript everywhere.
