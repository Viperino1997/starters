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

## Use a starter (start a new project)

Each shell is **self-contained** — pull one out with [`degit`](https://github.com/Rich-Harris/degit)
and it runs on its own, no monorepo needed:

```bash
npx degit Viperino1997/starters/apps/dashboard my-project
cd my-project
pnpm install
pnpm dev
```

Swap `dashboard` for `app` or `landing`. The extracted project carries its own copy of
the design tokens (`theme.css`) and has no dependency on this monorepo.

## The shared design layer
`packages/design/src/theme.css` is the **canonical source** for the brand token VALUES
(`:root` + `.dark`). Each shell carries a **vendored copy** (`apps/<shell>/.../theme.css`,
imported locally as `./theme.css`) so it stays self-contained for `degit`. Keep them in
sync from the source:

```bash
pnpm sync:tokens      # copies packages/design → every shell's theme.css
```

So: **edit colors/radius in `packages/design/src/theme.css`, run `pnpm sync:tokens`,
all shells update.** Each shell keeps its own shadcn `@theme inline` mapping. The base is
neutral on purpose; brand it per project (override the values in your project's `theme.css`).

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
- Class-based dark mode (`.dark`), values from each shell's vendored `theme.css`.
- TypeScript everywhere.
