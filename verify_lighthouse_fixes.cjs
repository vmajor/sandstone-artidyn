const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  try {
    console.log('Navigating to http://localhost:4321/');
    await page.goto('http://localhost:4321/');

    // 1. Verify Mobile Menu
    console.log('Verifying Mobile Menu state...');
    const menu = await page.locator('#mobile-menu');
    const toggle = await page.locator('#mobile-menu-toggle');

    // Initial state: should be aria-hidden="true" and invisible
    const isHidden = await menu.getAttribute('aria-hidden');
    console.log('Menu aria-hidden:', isHidden);

    const visibility = await menu.evaluate(el => window.getComputedStyle(el).visibility);
    console.log('Menu visibility:', visibility);

    await toggle.click();
    await page.waitForTimeout(500); // Wait for animation

    const isHiddenOpen = await menu.getAttribute('aria-hidden');
    console.log('Menu aria-hidden after click:', isHiddenOpen);

    const visibilityOpen = await menu.evaluate(el => window.getComputedStyle(el).visibility);
    console.log('Menu visibility after click:', visibilityOpen);

    // 2. Verify Footer Logo Dimensions
    console.log('Verifying Footer Logo dimensions...');
    const footerLogo = await page.locator('footer img');
    const width = await footerLogo.getAttribute('width');
    const height = await footerLogo.getAttribute('height');
    console.log('Footer logo width:', width, 'height:', height);

    // 3. Verify CSS Preload
    console.log('Verifying CSS preload links...');
    const preloadLinks = await page.locator('link[rel="preload"][as="style"]').count();
    console.log('Found', preloadLinks, 'preload style links');

    // 4. Verify Favicon/Icon 404s (actually just check if they are reachable)
    console.log('Checking favicon.ico and icon.svg...');
    const faviconResponse = await page.request.get('http://localhost:4321/favicon.ico');
    console.log('favicon.ico status:', faviconResponse.status());

    const iconResponse = await page.request.get('http://localhost:4321/icon.svg');
    console.log('icon.svg status:', iconResponse.status());

    // 5. Screenshot for visual check
    await page.screenshot({ path: 'frontend_verification.png', fullPage: true });
    console.log('Screenshot saved to frontend_verification.png');

  } catch (error) {
    console.error('Verification failed:', error);
    process.exit(1);
  } finally {
    await browser.close();
  }
})();
