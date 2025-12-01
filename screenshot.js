const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1920, height: 1080 });

  await page.goto('http://localhost:4321/');
  await page.waitForLoadState('networkidle');

  await page.screenshot({ path: 'homepage-desktop.png', fullPage: true });
  console.log('✓ Desktop screenshot saved to homepage-desktop.png');

  await browser.close();
})();
