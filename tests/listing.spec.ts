import { test, expect } from "@playwright/test";

test.describe("Airbnb Clone Listing, Photo Tour, and Lightbox", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("1. Listing page loads with header, title, gallery, details, and booking card", async ({
    page,
  }) => {
    await expect(page.locator("h1")).toContainText("Architectural Oceanfront Luxury Villa");
    await expect(page.locator("header")).toBeVisible();
    await expect(page.locator("#reserve-button")).toBeVisible();
    await expect(page.locator("#show-all-photos-button")).toBeVisible();
  });

  test("2. Show all photos opens Photo Tour", async ({ page }) => {
    const showAllBtn = page.locator("#show-all-photos-button");
    await showAllBtn.click();

    const photoTour = page.locator('div[aria-label="Photo tour"]');
    await expect(photoTour).toBeVisible();
    await expect(page.locator("#photo-tour-close-btn")).toBeVisible();
  });

  test("3. Gallery image opens Lightbox", async ({ page }) => {
    // Click the hero image button
    const heroImage = page.locator('div[aria-label^="Photo 1:"]').first();
    await heroImage.click();

    const lightbox = page.locator('div[aria-label="Photo Lightbox"]');
    await expect(lightbox).toBeVisible();
    await expect(page.locator("#lightbox-counter")).toContainText("1 / 15");
  });

  test("4. Next button changes image", async ({ page }) => {
    // Open Lightbox
    await page.locator('div[aria-label^="Photo 1:"]').first().click();

    const counter = page.locator("#lightbox-counter");
    await expect(counter).toContainText("1 / 15");

    // Click next button
    await page.locator("#lightbox-next-btn").click();
    await expect(counter).toContainText("2 / 15");
  });

  test("5. Previous button changes image", async ({ page }) => {
    // Open Lightbox
    await page.locator('div[aria-label^="Photo 1:"]').first().click();

    // Click prev from image 1 -> wraps to 15
    await page.locator("#lightbox-prev-btn").click();
    await expect(page.locator("#lightbox-counter")).toContainText("15 / 15");

    // Click next -> back to 1
    await page.locator("#lightbox-next-btn").click();
    await expect(page.locator("#lightbox-counter")).toContainText("1 / 15");
  });

  test("6. ArrowRight changes image in Lightbox", async ({ page }) => {
    await page.locator('div[aria-label^="Photo 1:"]').first().click();
    await expect(page.locator("#lightbox-counter")).toContainText("1 / 15");

    await page.keyboard.press("ArrowRight");
    await expect(page.locator("#lightbox-counter")).toContainText("2 / 15");
  });

  test("7. ArrowLeft changes image in Lightbox", async ({ page }) => {
    await page.locator('div[aria-label^="Photo 1:"]').first().click();
    await page.keyboard.press("ArrowRight");
    await expect(page.locator("#lightbox-counter")).toContainText("2 / 15");

    await page.keyboard.press("ArrowLeft");
    await expect(page.locator("#lightbox-counter")).toContainText("1 / 15");
  });

  test("8. Escape key closes Lightbox", async ({ page }) => {
    await page.locator('div[aria-label^="Photo 1:"]').first().click();
    const lightbox = page.locator('div[aria-label="Photo Lightbox"]');
    await expect(lightbox).toBeVisible();

    await page.keyboard.press("Escape");
    await expect(lightbox).not.toBeVisible();
  });

  test("9. Close button closes Lightbox and returns focus", async ({ page }) => {
    const heroImage = page.locator('div[aria-label^="Photo 1:"]').first();
    await heroImage.click();

    const lightbox = page.locator('div[aria-label="Photo Lightbox"]');
    await expect(lightbox).toBeVisible();

    const closeBtn = page.locator("#lightbox-close-btn");
    await closeBtn.click();
    await expect(lightbox).not.toBeVisible();
  });

  test("10. Photo Tour allows selecting an image to open Lightbox", async ({ page }) => {
    await page.locator("#show-all-photos-button").click();
    const photoTour = page.locator('div[aria-label="Photo tour"]');
    await expect(photoTour).toBeVisible();

    // Click on the first photo in the tour
    const tourImage = page.locator('div[aria-label^="View full photo:"]').first();
    await tourImage.click();

    // Lightbox should open
    const lightbox = page.locator('div[aria-label="Photo Lightbox"]');
    await expect(lightbox).toBeVisible();
    await expect(page.locator("#lightbox-counter")).toContainText("1 / 15");
  });
});
