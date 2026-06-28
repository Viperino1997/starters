import { test, expect } from "@playwright/test";

// Smoke E2E: the SPA boots, renders the home route, and client-side
// navigation to Settings works. This is the pattern to extend per project.
test("home page renders", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", { name: "Build fast, stay consistent" }),
  ).toBeVisible();
});

test("navigates to settings", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("link", { name: "Settings" }).click();

  await expect(page).toHaveURL(/\/settings$/);
});
