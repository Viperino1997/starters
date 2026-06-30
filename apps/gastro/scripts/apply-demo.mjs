// Apply a demo preset: copies demos/<name>/{site.ts,theme.css} over the live
// content + theme. Each preset is a self-contained drop-in.
//
//   pnpm --filter gastro demo cocteleria   # then build / deploy
//   pnpm --filter gastro demo bodegon      # restore the default
//
import { copyFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const name = process.argv[2];
const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = join(root, "demos", name ?? "");

if (!name || !existsSync(src)) {
  console.error("Usage: node scripts/apply-demo.mjs <bodegon|cocteleria|cafe>");
  process.exit(1);
}

copyFileSync(join(src, "site.ts"), join(root, "src/content/site.ts"));
copyFileSync(join(src, "theme.css"), join(root, "src/styles/theme.css"));
console.log(`Applied demo preset: ${name}`);
