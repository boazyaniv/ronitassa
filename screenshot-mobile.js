const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Mobile viewport
  await page.setViewportSize({ width: 375, height: 667 });

  await page.goto('http://localhost:4321/');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000); // Extra wait for images

  await page.screenshot({ path: 'homepage-mobile.png', fullPage: true });
  console.log('✓ Mobile screenshot saved to homepage-mobile.png');

  // Now check the beef product page
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:4321/products/beef');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);

  await page.screenshot({ path: 'beef-page.png', fullPage: true });
  console.log('✓ Beef page screenshot saved to beef-page.png');

  await browser.close();
})();
