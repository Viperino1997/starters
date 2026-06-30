import path from "node:path";
import { getViteConfig } from "astro/config";

// Astro provides the Vite config (React integration, Tailwind, Vite 8) via
// getViteConfig, so islands resolve and transform exactly as in the build.
// Only React islands are unit-testable here; .astro pages are covered by E2E.
export default getViteConfig({
  resolve: {
    // Mirror the "@/*" -> "src/*" alias from tsconfig.json. Astro injects this
    // for its own pipeline but not for a plain Vitest run.
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./test/setup.ts"],
    include: ["src/**/*.test.{ts,tsx}"],
    exclude: ["e2e/**", "node_modules/**"],
    css: false,
  },
});
