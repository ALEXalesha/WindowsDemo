// Кадры для README: безголовый Chromium, страницы по файловому адресу, без сети.
//   node tools/screenshots.js   ->  docs/screens/*.png
const path = require('path');
const fs = require('fs');
const { chromium } = require('@playwright/test');
const { pageUrl, fakePointerLock } = require('../tests/helpers');

const OUT = path.join(__dirname, '..', 'docs', 'screens');

async function open(browser, name) {
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
  await page.addInitScript(fakePointerLock);
  await page.route(/^https?:\/\//, (r) => r.abort());
  await page.goto(pageUrl(name));
  return page;
}

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await chromium.launch({ headless: true, args: ['--allow-file-access-from-files'] });

  // win11_3: рабочий стол, потом «Пуск» и окна
  let page = await open(browser, 'win11_3');
  await page.waitForFunction(() => document.body.dataset.ready === '1');
  await page.waitForTimeout(800);
  await page.screenshot({ path: path.join(OUT, 'win11_3-desktop.png') });
  await page.evaluate(() => { openApp('explorer'); });
  await page.waitForTimeout(600);
  await page.evaluate(() => { openApp('weather'); });
  await page.waitForTimeout(600);
  await page.click('#btn-start');
  await page.waitForTimeout(700);
  await page.screenshot({ path: path.join(OUT, 'win11_3-start.png') });
  await page.close();

  await browser.close();
  console.log('кадры в', OUT);
})().catch((e) => { console.error(e); process.exit(1); });
