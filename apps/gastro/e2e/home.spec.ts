import { test, expect } from "@playwright/test";

// Smoke E2E: the gastro landing renders its hero, the menu anchor exists,
// and the WhatsApp reservation CTA points at wa.me. Extend per client.
test("hero renders with the reservation CTA", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("link", { name: /Reservar por WhatsApp/i }),
  ).toBeVisible();
});

test("menu anchor is present", async ({ page }) => {
  await page.goto("/");

  await expect(page.locator("#carta")).toBeAttached();
});

test("WhatsApp CTA links to wa.me", async ({ page }) => {
  await page.goto("/");

  const cta = page.getByRole("link", { name: /Reservar por WhatsApp/i });
  await expect(cta).toHaveAttribute("href", /wa\.me\//);
});
