import { test, expect } from '@playwright/test';

test('click 3rd footer link and print first three words of page text', async ({ page }) => {
  // Open Wikipedia
  await page.goto('https://www.wikipedia.org/');

  // Find all links inside the footer
  const footerLinks = await page.locator('.footer a');

  const count = await footerLinks.count();
  console.log(`Total footer links: ${count}`);

  // Print all footer links
  for (let i = 0; i < count; i++) {
    const text = await footerLinks.nth(i).textContent();
    const href = await footerLinks.nth(i).getAttribute('href');
    console.log(`${i + 1}. ${text} -> ${href}`);
  }

  // Capture 6th link before clicking
  const Link = footerLinks.nth(5);
  const LinkText = await Link.textContent();
  const LinkHref = await Link.getAttribute('href');

  console.log(`Link text: ${LinkText}`);
  console.log(`Link href: ${LinkHref}`);

  // Click 6th link and wait for page load
  await Promise.all([
    Link.click(),
    await page.waitForLoadState('load')
  ]);

  // Assertion: 6th link should be visible
  await expect(Link).toBeVisible();

});