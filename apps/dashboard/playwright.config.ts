import { defineConfig, devices } from "@playwright/test";

const PORT = 4174;
const baseURL = `http://localhost:${PORT}`;

// E2E config for the Next shell. Specs live in e2e/ as *.spec.ts. The web
// server builds and serves the production output so the smoke test exercises
// the same bundle users ship.
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
    command: `pnpm build && pnpm start --port ${PORT}`,
    url: baseURL,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
