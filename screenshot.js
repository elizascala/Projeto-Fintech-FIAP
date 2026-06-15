const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const filePath = 'file://' + path.resolve(__dirname, 'index.html').replace(/\\/g, '/');

  const sizes = [
    { name: 'desktop', w: 1440, h: 900 },
    { name: 'tablet',  w: 768,  h: 1024 },
    { name: 'mobile',  w: 390,  h: 844 },
  ];

  for (const s of sizes) {
    const page = await browser.newPage();
    await page.setViewportSize({ width: s.w, height: s.h });
    await page.goto(filePath);
    await page.waitForTimeout(1200);
    await page.screenshot({ path: `screenshot-${s.name}.png`, fullPage: true });
    console.log(`${s.name} (${s.w}x${s.h}) saved.`);
    await page.close();
  }

  await browser.close();
})();
