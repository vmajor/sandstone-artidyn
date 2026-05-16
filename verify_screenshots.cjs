const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Wait for dev server
  let attempts = 0;
  while (attempts < 10) {
    try {
      await page.goto('http://localhost:4321/projects');
      break;
    } catch (e) {
      attempts++;
      await new Promise(r => setTimeout(r, 2000));
    }
  }

  await page.setViewportSize({ width: 1440, height: 900 });
  await page.screenshot({ path: 'catalog.png', fullPage: true });

  await page.goto('http://localhost:4321/projects/argus-axis');
  await page.screenshot({ path: 'product_anno.png', fullPage: true });

  await page.goto('http://localhost:4321/projects/iris-max');
  await page.screenshot({ path: 'product_yhy.png', fullPage: true });

  await browser.close();
})();
