// Generate a print-ready QR (SVG) pointing at a URL — e.g. the /carta page for
// table tents. Brand colors: maroon on cream.
//
//   pnpm --filter gastro qr https://tu-local.vercel.app/carta
//
import QRCode from "qrcode";
import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const url = process.argv[2];
if (!url) {
  console.error("Usage: node scripts/gen-qr.mjs <url>");
  process.exit(1);
}

const out = join(dirname(fileURLToPath(import.meta.url)), "..", "public", "carta-qr.svg");
const svg = await QRCode.toString(url, {
  type: "svg",
  margin: 1,
  color: { dark: "#450a0aff", light: "#fdf6ecff" },
});

writeFileSync(out, svg);
console.log("QR →", out, "\n   →", url);
