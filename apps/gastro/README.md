# gastro — landing template for restaurants & bars

A content-driven landing for gastro venues, built on the `landing` shell
(Astro + Tailwind v4 + shadcn islands + GSAP) and the shared `@starters/design`
token layer. Self-contained: pull it out with `degit` per client.

## The idea: one mockup in minutes

Everything visible is driven by a single file: **`src/content/site.ts`**.
To spin a mockup for a new restaurant/bar you edit three things:

1. **`src/content/site.ts`** — name, hero copy, WhatsApp number, menu, hours,
   location, gallery, socials. Typed, fill-in-the-blank.
2. **`src/styles/theme.css`** — brand colors/radius (override the token values).
3. **`public/gallery/`** — drop the real photos, point `site.gallery` at them.

No component edits needed for a standard mockup.

## What it ships

- Sticky header with `Reservar` CTA
- Hero with "Reservar por WhatsApp" (click-to-chat, prefilled message) + "Ver carta"
- About / story section
- Menu (`carta`) grouped by category, with prices
- Hours + location (with "Cómo llegar" maps link)
- Gallery grid
- Footer with social links
- Floating WhatsApp button
- GSAP scroll reveals, respects `prefers-reduced-motion`
- No-flash dark mode

## WhatsApp reservation

`site.whatsapp.number` (international, digits only — e.g. `5493517684603`) and
`site.whatsapp.reservationMessage` build a `wa.me` link with a prefilled message.
Every CTA (header, hero, floating button) points at it. This is the core value
prop: the venue owns its reservation funnel instead of renting it from a
third party.

## Run (from the monorepo root `~/starters`)

```bash
pnpm install
pnpm dev:gastro        # or: pnpm --filter gastro dev
pnpm build:gastro      # static build → apps/gastro/dist
```

## Extract for a real client (self-contained, no monorepo)

```bash
npx degit <your-repo>/starters/apps/gastro mi-cliente
cd mi-cliente && pnpm install && pnpm dev
```

## Deploy a preview to send by WhatsApp

The close promises a working sample. Get a shareable URL fast:

```bash
pnpm build:gastro
npx vercel deploy apps/gastro --prebuilt   # or `vercel` from the extracted project
```

(Or drag `apps/gastro/dist` into any static host — Netlify, Cloudflare Pages.)

## Icons

Icons in the `.astro` server context use `src/components/Icon.astro` (inline SVG,
zero JS) to avoid the `lucide-react` CJS/ESM interop error during SSR. React
islands (e.g. `ThemeToggle`) can still import `lucide-react` directly.

## Design tokens

Brand values live in `packages/design/src/theme.css` (monorepo source). Each
shell carries a vendored copy; run `pnpm sync:tokens` from the root to refresh.
For a single client, just edit this shell's `src/styles/theme.css`.

## Tests

```bash
pnpm --filter gastro test     # unit (vitest)
pnpm --filter gastro e2e      # e2e (playwright)
```
