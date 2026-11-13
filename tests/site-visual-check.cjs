// Browser smoke tests against a locally served Jekyll build.
// Run from CI with PLAYWRIGHT_BASE_URL=http://127.0.0.1:8765 node tests/site-visual-check.cjs
const { chromium } = require('playwright');
const axe = require('axe-core');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const base = process.env.PLAYWRIGHT_BASE_URL || 'http://127.0.0.1:8765';
const out = path.join(process.cwd(), 'visual-previews');
fs.mkdirSync(out, { recursive: true });

async function auditAccessibility(page, label) {
  await page.addScriptTag({ content: axe.source });
  const result = await page.evaluate(async () => window.axe.run(document, {
    runOnly: { type: 'tag', values: ['wcag2a','wcag2aa','wcag21a','wcag21aa'] },
    rules: { 'color-contrast': { enabled: true } }
  }));
  const issues = result.violations.map(v => ({
    id: v.id,
    impact: v.impact,
    description: v.help,
    nodes: v.nodes.slice(0, 12).map(n => ({ target: n.target, failure: n.failureSummary }))
  }));
  fs.writeFileSync(path.join(out, 'accessibility-' + label + '.json'), JSON.stringify({
    url: page.url(),
    violations: issues,
    incomplete: result.incomplete.map(x => ({ id:x.id, nodes:x.nodes.length }))
  }, null, 2));
  if (issues.length) throw new Error('Accessibility issues: ' + issues.map(x => x.id + '[' + x.impact + '] (' + x.nodes.map(n=>n.target).join(', ') + ')').join('; '));
}
async function auditInternalLinks(page, label) {
  const local = new URL(base);
  const links = await page.locator('a[href]').evaluateAll(elements => elements.map(a => ({
    href: a.getAttribute('href'),
    text: a.textContent.trim()
  })));
  const paths = new Set();
  const issues = [];
  for (const link of links) {
    try {
      const url = new URL(link.href, page.url());
      if (url.origin !== local.origin) continue;
      const location = url.pathname + url.search;
      paths.add(location);
      if (url.hash && url.pathname === new URL(page.url()).pathname) {
        const id = decodeURIComponent(url.hash.slice(1));
        const target = await page.locator('[id]').evaluateAll((els, id) => els.some(el => el.id === id), id);
        if (!target) issues.push('Missing same-page anchor ' + url.hash + ' on ' + label);
      }
    } catch(e) { issues.push('Invalid URL ' + link.href + ': ' + e.message); }
  }
  for (const pathname of paths) {
    const response = await page.request.get(base + pathname, { timeout: 12000 });
    if (response.status() >= 400) issues.push('Broken internal URL ' + pathname + ' on ' + label + ': HTTP ' + response.status());
  }
  if (issues.length) throw new Error(issues.join('; '));
  console.log('PASS internal links',label,paths.size);
}
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
        await auditAccessibility(page, 'home-' + viewport.name + '-' + initial);
        if(viewport.name === 'desktop') await auditInternalLinks(page, 'home');
        await theme.click();
        await auditAccessibility(page, 'home-' + viewport.name + '-' + next);
        console.log('PASS', viewport.name, viewport.width + 'x' + viewport.height, 'theme, navigation, layout');
      } catch(e) {
        failures.push(viewport.name + ': ' + e.message);
      } finally { await page.close(); }
    }
    for (const route of ['/wallet/','/assets/','/smartnode-setup/','/pools/','/community/','/projects/','/buy-yerbas/','/whitepaper/','/halving/']) {
      const page = await browser.newPage({viewport:{width:1280,height:800}, reducedMotion:'reduce'});
      try {
        const response = await page.goto(base + route, {waitUntil:'load', timeout:30000});
        assert.equal(response.status(),200, route + ' must return 200');
        assert.ok(await page.locator('h1').count() >= 1, route + ' must have a heading');
        assert.equal(await page.locator('#yb-theme-toggle').count(), 1, route + ' must have theme toggle');
        if (['/wallet/','/smartnode-setup/','/pools/','/community/','/projects/','/buy-yerbas/','/halving/'].includes(route)) {
          await auditInternalLinks(page, route);
          await auditAccessibility(page, 'page-' + route.slice(1,-1));
        }
        if (route === '/halving/') {
          assert.equal(await page.locator('.yb-reward-table tbody tr').count(), 18, 'Subsidy schedule must have 18 tiers');
          assert.ok((await page.locator('.yb-reward-table tbody').innerText()).includes('10,000,000–10,999,999'));
          await page.screenshot({path:path.join(out,'subsidy-desktop.png'),fullPage:true,animations:'disabled'});
        }
        if (route === '/wallet/') await page.screenshot({path:path.join(out,'wallet-desktop.png'),fullPage:true,animations:'disabled'});
        console.log('PASS route',route);
      } catch (e) { failures.push(route + ': '+e.message); }
      finally { await page.close(); }
    }
  } finally { await browser.close(); }
  if (failures.length) { console.error(failures.join('\n')); process.exitCode = 1; }
}
run().catch(error => { console.error(error); process.exitCode = 1; });
