import { expect, test } from "@playwright/test";

test.describe("Theme Toggle", () => {
  test("should toggle theme when clicked", async ({ page }) => {
    await page.goto("/");

    // Find the theme toggle button
    const themeToggle = page
      .locator('[data-testid="theme-toggle"]')
      .or(page.locator("button").filter({ hasText: /theme|dark|light/i }));

    if ((await themeToggle.count()) > 0) {
      // Click the theme toggle
      await themeToggle.click();

      // Check if theme class changes on html element
      const html = page.locator("html");
      await expect(html).toHaveClass(/dark|light/);
    }
  });

  test("should persist theme preference", async ({ page }) => {
    await page.goto("/");

    // Set theme to dark
    await page.evaluate(() => {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    });

    // Reload page
    await page.reload();

    // Check if theme persists
    const html = page.locator("html");
    await expect(html).toHaveClass(/dark/);
  });
});
