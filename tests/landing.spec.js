// Стартовая страница репозитория (index.html в корне) сразу ведёт в win11_3/.
const { test, expect } = require('@playwright/test');
const path = require('path');
const { pathToFileURL } = require('url');
const { ROOT, lockFirst } = require('./helpers');

test('стартовая страница ведёт в win11_3/ без ошибок и без сети', async ({ page }) => {
  const errors = [];
  page.on('pageerror', (e) => errors.push(String(e)));
  page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
  await lockFirst(page);
  await page.route(/^https?:\/\//, (r) => r.abort());
  await page.goto(pathToFileURL(path.join(ROOT, 'index.html')).href);
  await page.waitForURL(/\/win11_3\/index\.html$/);
  await expect(page).toHaveTitle(/не связан с Microsoft/);
  expect(errors).toEqual([]);
});
