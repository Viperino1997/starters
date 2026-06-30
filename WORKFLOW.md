# Landing workflow

How a landing goes from idea to shipped, using the three tools that already exist in this
setup. They are **not** competing tools — they are three layers. Keep them in their layer
and the process is obvious; mix them and they fight over who owns the tokens.

## The three layers

| Layer | Tool | Decides | Does NOT do |
|-------|------|---------|-------------|
| **0 — Visual language** | Claude Design + `DESIGN.md` | Per-brand design direction: tokens, type, concept | Write into this repo directly |
| **1 — Skeleton** | `apps/landing` shell (degit) | Structure: routing, build, token wiring, tests, CI | Decide aesthetics |
| **2 — Execution** | the redesign prompt (`~/prompts/redesign-landing.md`) | The real visual work, components-first, self-critique | Reinvent tokens or scaffold |

**One source of truth for tokens:** `packages/design/src/theme.css` is canonical (see
`README.md` → *The shared design layer*). Claude Design *proposes* the language; you bring it
down by hand into `packages/design`, then `pnpm sync:tokens`. Never the other way around.
Two token owners = drift, and `scripts/sync-tokens.mjs` will (correctly) fail CI.

## New landing

```
DESIGN.md  →  packages/design  →  degit landing shell  →  run redesign prompt
(language)     (tokens, synced)    (skeleton)              (execution)
```

1. **Language (Layer 0).** Write the brand's `DESIGN.md` with Claude Design — the 9 blocks
   (theme, palette, typography, components, layout, depth, do/don'ts, responsive, agent guide).
   This is the versioned aesthetic brief. Upload it manually via "Create here".
2. **Bring tokens down.** Translate `DESIGN.md` into `packages/design/src/theme.css`, then:
   ```bash
   pnpm sync:tokens
   ```
   Only now are the tokens law across shells.
3. **Skeleton (Layer 1).** Pull the landing shell — it already ships tokens, tests, CI:
   ```bash
   npx degit Viperino1997/starters/apps/landing my-landing
   cd my-landing && pnpm install && pnpm dev
   ```
4. **Execution (Layer 2).** Run the redesign prompt against the shell with
   *Input: from scratch + `DESIGN.md` as reference*. It runs its 8 phases: sourcing
   (reactbits / 21st.dev Magic / shadcn), bold concept, double self-critique with screenshots.

## Redesign an existing landing

Skip step 3 (the skeleton already exists). In the prompt, set *Input: current code*. Everything
else is identical. The prompt's Phase 2 (brutal critique of the current UI) is the starting point.

## Guardrails

1. **Never let Claude Design "Create using Claude Code" read this GitHub repo.** That option
   reads the *current* implementation "for fidelity" and bakes the look you are trying to escape
   into the system. `DESIGN.md` is uploaded clean and manual. Language feeds the repo; the repo
   never feeds the language.
2. **Do not duplicate the token owner.** One direction only:
   `DESIGN.md → packages/design → sync:tokens → shells`.
3. **One animation library per project.** Landing defaults to **GSAP** (scroll-driven). A second
   library only if it owns a distinct concern, with a clear boundary (see `README.md` →
   *Animation rule*).

## Where each tool plugs in

| Tool | Layer / phase |
|------|---------------|
| reactbits / 21st.dev Magic (MCP) | Layer 2 — signature pieces (hero, backgrounds, text-effects) |
| shadcn (islands) | Layer 2 — structural pieces (forms, dialogs) |
| GSAP | Animation default of the landing shell |
| impeccable / ui-ux-pro-max | Cross-cutting criteria — Layers 0 and 2 |
| last30days + WebSearch | Prompt Phase 3 — current patterns |
| playwright | Evidence — Prompt Phases 2 and 7 |

**In one line:** Claude Design defines the language (`DESIGN.md`) → you bring it down to
`packages/design` → degit the landing shell → run the redesign prompt on top. Language, frame,
finish — each tool in its own layer, tokens with a single owner.

See also: `README.md` (structure, design layer, animation rule), `AGENTS.md` (conventions, testing).
