# Demo presets

Portfolio demos showing the gastro template across segments. Each preset is a
**self-contained drop-in** for the two files that define a brand:

```
demos/<name>/
├── site.ts      → copied to src/content/site.ts
└── theme.css    → copied to src/styles/theme.css
```

| Preset | Segment | Style | Demo content |
|--------|---------|-------|--------------|
| `bodegon` | Parrilla / bodegón | Bodegón cálido (rojo + oro) | Fanfarrón |
| `cocteleria` | Wine bar / coctelería | Oscuro elegante (negro + oro) | Vinatería |
| `cafe` | Café / brunch | Fresco moderno (terracota + oliva) | Casa Simona |

## Apply a preset

```bash
pnpm --filter gastro demo cocteleria   # swap content + theme
pnpm --filter gastro dev               # preview
pnpm --filter gastro demo bodegon      # restore default
```

> Presets carry their own copy of the `SiteContent` interface so they drop in
> cleanly. They are snapshots — if the interface changes, refresh the presets.

## Deploy each as its own portfolio demo

Copy the app to a uniquely-named folder, apply the preset, deploy (Vercel uses
the folder name as the project name → distinct URL):

```bash
rsync -a --exclude node_modules --exclude dist --exclude .astro \
  --exclude .vercel --exclude demos ./ /tmp/vinateria-demo/
cp demos/cocteleria/site.ts  /tmp/vinateria-demo/src/content/site.ts
cp demos/cocteleria/theme.css /tmp/vinateria-demo/src/styles/theme.css
cd /tmp/vinateria-demo && vercel deploy --prod --yes
```
