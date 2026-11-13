// Browser smoke tests against a locally served Jekyll build.
// Run from CI with PLAYWRIGHT_BASE_URL=http://127.0.0.1:8765 node tests/site-visual-check.cjs
const { chromium } = require('playwright');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const base = process.env.PLAYWRIGHT_BASE_URL || 'http://127.0.0.1:8765';
const out = path.join(process.cwd(), 'visual-previews');
fs.mkdirSync(out, { recursive: true });

async function run() {
  const browser = await chromium.launch({ headless: true });
  let failures = [];
  try {
    for (const viewport of [{width: 1440,height: 900,name:'desktop'},{width: 768,height: 1024,name:'tablet'},{width: 375,height: 812,name:'mobile'}]) {
      const page = await browser.newPage({ viewport: { width: viewport.width, height: viewport.height }, reducedMotion: 'reduce' });
      const errors = [];
      page.on('pageerror', err => errors.push(err.message));
      try {
        const response = await page.goto(base + '/', { waitUntil: 'load', timeout: 30000 });
        assert.equal(response.status(), 200, 'Home must return HTTP 200');
        assert.equal(await page.locator('h1').count(), 1, 'Home should have a single h1');
        assert.equal(await page.locator('#yb-ecosystem-heading').count(), 1, 'Ecosystem section must exist');
        assert.equal(await page.locator('.yb-ecosystem-grid .yb-card').count(), 6, 'Six ecosystem cards');
        assert.equal(await page.locator('nav[aria-label="Main navigation"]').count(), 1);
        const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 2);
        assert.equal(overflow, false, viewport.name + ' horizontal overflow');
        if (viewport.width < 880) {
          const nav = page.locator('#yb-nav');
          assert.equal(await nav.isVisible(), false, 'Mobile navigation starts collapsed');
          await page.locator('#yb-menu-toggle').click();
          assert.equal(await nav.isVisible(), true, 'Mobile menu should open');
          assert.equal(await page.locator('#yb-menu-toggle').getAttribute('aria-expanded'), 'true');
          await page.locator('#yb-menu-toggle').click();
          assert.equal(await nav.isVisible(), false, 'Mobile menu should close');
          await page.locator('#yb-menu-toggle').click();
          await page.keyboard.press('Escape');
          assert.equal(await nav.isVisible(), false, 'Escape should close mobile navigation');
          assert.equal(await page.locator('#yb-menu-toggle').getAttribute('aria-expanded'), 'false');
        }
        const theme = page.locator('#yb-theme-toggle');
        const initial = await page.locator('html').getAttribute('data-theme');
        await theme.click();
        const next = await page.locator('html').getAttribute('data-theme');
        assert.notEqual(initial, next, 'Theme toggle must change theme');
        await page.reload({ waitUntil: 'load' });
        assert.equal(await page.locator('html').getAttribute('data-theme'), next, 'Theme preference must persist');
        await page.screenshot({ path: path.join(out, 'home-' + viewport.name + '-' + next + '.png'), fullPage: true, animations: 'disabled' });
        await theme.click();
        await page.screenshot({ path: path.join(out, 'home-' + viewport.name + '-' + initial + '.png'), fullPage: true, animations: 'disabled' });
        assert.deepEqual(errors, [], 'No uncaught JavaScript errors');
        console.log('PASS', viewport.name, viewport.width + 'x' + viewport.height, 'theme, navigation, layout');
      } catch(e) {
        failures.push(viewport.name + ': ' + e.message);
      } finally { await page.close(); }
    }
    for (const route of ['/wallet/','/assets/','/smartnode-setup/','/pools/','/community/','/projects/','/buy-yerbas/','/whitepaper/']) {
      const page = await browser.newPage({viewport:{width:1280,height:800}, reducedMotion:'reduce'});
      try {
        const response = await page.goto(base + route, {waitUntil:'load', timeout:30000});
        assert.equal(response.status(),200, route + ' must return 200');
        assert.ok(await page.locator('h1').count() >= 1, route + ' must have a heading');
        assert.equal(await page.locator('#yb-theme-toggle').count(), 1, route + ' must have theme toggle');
        if (route === '/wallet/') await page.screenshot({path:path.join(out,'wallet-desktop.png'),fullPage:true,animations:'disabled'});
        console.log('PASS route',route);
      } catch (e) { failures.push(route + ': '+e.message); }
      finally { await page.close(); }
    }
  } finally { await browser.close(); }
  if (failures.length) { console.error(failures.join('\n')); process.exitCode = 1; }
}
run().catch(error => { console.error(error); process.exitCode = 1; });
