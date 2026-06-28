import { test, expect } from "@playwright/test";

// Smoke E2E: the dashboard route renders its shell (sidebar + header).
// This is the pattern to extend per project.
test("dashboard renders the overview header", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", { name: "Overview" }),
  ).toBeVisible();
});
