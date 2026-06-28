import { defineConfig, devices } from "@playwright/test";

const PORT = 4175;
const baseURL = `http://localhost:${PORT}`;

// E2E config for the Astro landing shell. Specs live in e2e/ as *.spec.ts.
// The web server builds the static output and serves it via astro preview.
export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: process.env.CI ? "github" : "list",
  use: {
    baseURL,
    trace: "on-first-retry",
  },
  projects: [
    { name: "chromium", use: { ...devices["Desktop Chrome"] } },
  ],
  webServer: {
    command: `pnpm build && pnpm preview --port ${PORT}`,
    url: baseURL,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
