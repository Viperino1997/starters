import { test, expect } from "@playwright/test";

// Smoke E2E: the landing page renders its hero and the in-page Features
// anchor works. This is the pattern to extend per project.
test("landing page renders the hero", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", {
      name: "Ship a landing that loads instantly and moves with intent",
    }),
  ).toBeVisible();
});

test("features anchor is present", async ({ page }) => {
  await page.goto("/");

  await expect(page.locator("#features")).toBeAttached();
});
