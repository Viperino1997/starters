# AGENTS.md — guidance for AI agents working in this repo

This file orients an AI agent that opens this repository cold. Read it before
editing. The human-facing overview is in `README.md`; this file adds the mental
model, conventions, and the non-obvious gotchas that will bite you otherwise.

## What this repo is

A **pnpm-workspace monorepo of frontend starters** that share ONE design layer.
You clone a shell, you don't re-assemble the stack. Three shells, one shared
token package.

```
starters/
├── packages/design/      @starters/design — shared brand token VALUES only
└── apps/
    ├── landing/          Astro 7  + Tailwind v4 + shadcn (React islands) + GSAP
    ├── dashboard/        Next 16  + Tailwind v4 + shadcn + Framer Motion
    └── app/              Vite 8   + React 19 + Tailwind v4 + shadcn + Framer Motion
```

## The single most important concept: the shared design layer

Tokens are split into **values** (shared) and **mapping** (per shell):

- `packages/design/src/theme.css` holds ONLY the brand token VALUES:
  the `:root { ... }` and `.dark { ... }` blocks (colors, radius). Neutral shadcn
  base on purpose — it is meant to be re-branded per project.
- Each shell's entry CSS (`app/globals.css`, `src/index.css`, or
  `src/styles/global.css`) keeps its own shadcn `@theme inline` mapping
  (the `--color-*: var(--*)` boilerplate) and imports the shared values:

  ```css
  @import "tailwindcss";
  @import "tw-animate-css";
  @import "shadcn/tailwind.css";
  @import "@starters/design/theme.css";   /* the shared VALUES */
  ```

**Rule:** change colors/radius in `packages/design/src/theme.css` → all three
shells update. Do NOT copy token values into individual shells. Do NOT move the
`@theme inline` mapping into the shared package (it is shadcn boilerplate that
shadcn regenerates per app; keeping it per-shell avoids fighting the CLI).

## Conventions

- **Tailwind v4** everywhere (CSS-first: `@theme inline`, `@custom-variant dark`).
  No `tailwind.config.js`. The Tailwind plugin is wired via PostCSS (Next) or the
  Vite plugin (`@tailwindcss/vite`, used by app and landing).
- **shadcn/ui, base-ui flavor.** Components live PER SHELL in `components/ui/`
  (Next/Vite) or `src/components/ui/` — not shared yet (see "Don't" below).
- **Dark mode is class-based** (`.dark` on `<html>`). Values come from the shared
  layer. Mechanism differs per shell (see each README).
- **TypeScript** everywhere. The `@/*` alias points at each shell's source root.
- **One animation library per project by default** (GSAP for landing, Framer
  Motion for the React shells). A second is allowed only if it owns a distinct
  concern with a clear, non-overlapping boundary.

## How to run / build

From the repo root (`pnpm install` once):

```bash
pnpm dev:dashboard   # http://localhost:3000
pnpm dev:app         # http://localhost:5173
pnpm dev:landing     # http://localhost:4321
pnpm --filter <name> build
```

## How to add a shadcn component

```bash
cd apps/<shell> && pnpm dlx shadcn@latest add <component> -y
```
Then adapt it to the shared tokens if needed. The component is copied into the
shell — you own it.

## CRITICAL gotchas (these are version-specific and WILL trip you up)

1. **shadcn here is base-ui flavored.** Components use a `render` prop, NOT
   `asChild`. To render a menu button as a link:
   `<SidebarMenuButton render={<a href="…" />}>…</SidebarMenuButton>`.
2. **TypeScript 6 deprecates `baseUrl`.** Use `paths` in tsconfig WITHOUT
   `baseUrl` (paths resolve relative to the tsconfig).
3. **Forms: zod v4 + @hookform/resolvers v5.** Use `standardSchemaResolver`
   (from `@hookform/resolvers/standard-schema`), NOT `zodResolver` — the zod
   resolver's types expect zod v3 and won't compile.
4. **Astro needs `@astrojs/react` v6** (Astro 7 + Vite 8). v4/v5 fail island
   hydration at runtime with "react-dom/client does not provide an export named
   'createRoot'".
5. **pnpm 11 build approvals** live in `pnpm-workspace.yaml` under `allowBuilds:`
   as a boolean map (e.g. `sharp: true`), not `onlyBuiltDependencies`.
6. **`create-vite` / `create-astro` treat the target dir as RELATIVE to cwd** —
   passing an absolute path concatenates it onto cwd.

## What NOT to do

- Don't hardcode a brand into `packages/design` — it is intentionally neutral;
  brand per project.
- Don't promote shadcn components into the shared package yet. Per-shell is the
  current decision; promote a primitive only when it's genuinely reused and
  stable (cross-framework component sharing — Next RSC vs Vite client vs Astro
  islands — has real friction).
- Don't add a second animation library to a shell "for convenience."
- The `landing` shell stays intentionally light: the real landing concept is
  generated upstream (Claude-design → redesign prompt), then implemented. Don't
  build a full marketing site into the starter.
