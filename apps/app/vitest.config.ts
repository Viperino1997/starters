import path from "node:path";
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// Unit-test config, kept separate from vite.config.ts so the production build
// stays untouched. Tailwind is intentionally omitted — jsdom tests assert
// behavior and DOM structure, not computed styles.
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/test/setup.ts"],
    // Unit tests live next to source as *.test.tsx. Playwright specs live in
    // e2e/ and must never be picked up by Vitest.
    include: ["src/**/*.test.{ts,tsx}"],
    exclude: ["e2e/**", "node_modules/**"],
    css: false,
  },
});
