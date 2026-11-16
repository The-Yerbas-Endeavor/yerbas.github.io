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

        const exchangeTiles = page.locator('#exchanges .yb-exchange-tile');
        assert.equal(await exchangeTiles.count(), 5, 'Homepage should show five Yerbas exchange listings');
        const exchangeLinks = await exchangeTiles.evaluateAll(links => links.map(a => ({name:a.textContent.trim(),url:a.getAttribute('href')})));
        for (const [name,url] of [
          ['NeoxEX','https://neoxa.exchange/trade/YERB_USDT'],
          ['SpotEX','https://spotex.trade/trade/YERB-USDT'],
          ['Filodex','https://filodex.xyz/trade/YERB_USDT']
        ]) {
          assert.ok(exchangeLinks.some(x => x.name.includes(name) && x.url === url), 'Missing '+name+' link');
        }
        const exchangeStyle = await exchangeTiles.first().evaluate(el => ({
          display: getComputedStyle(el).display,
          bg: getComputedStyle(el).backgroundColor,
          border: parseFloat(getComputedStyle(el).borderTopWidth),
          width: el.getBoundingClientRect().width
        }));
        assert.equal(exchangeStyle.display, 'flex', 'Exchange tiles must have layout styling');
        assert.ok(exchangeStyle.border >= 1 && exchangeStyle.width >= 150,
          'Exchange tiles must have visible borders and usable size');
        assert.notEqual(exchangeStyle.bg,'rgba(0, 0, 0, 0)', 'Exchange tiles must have a background');

        assert.equal(await page.locator('.yb-start-grid .yb-start-card').count(), 3, 'Three clear onboarding paths');

        // Catch stale/missing stylesheet where cards exist but render as plain stacked text.
        const cssLink = await page.locator('link[href*="yerbas-modern.css"]').getAttribute('href');
        assert.match(cssLink, /[?&]v=[0-9]+/, 'Modern stylesheet URL must include a build cache-buster');
        const visual = await page.locator('.yb-start-grid').evaluate(grid => {
          const cards = [...grid.querySelectorAll('.yb-start-card')];
          const g = getComputedStyle(grid), c = cards.map(el => ({
            style: getComputedStyle(el),
            rect: el.getBoundingClientRect()
          }));
          return {
            display: g.display,
            template: g.gridTemplateColumns,
            backgrounds: c.map(x => x.style.backgroundColor),
            borders: c.map(x => x.style.borderTopWidth),
            radius: c.map(x => x.style.borderTopLeftRadius),
            x: c.map(x => x.rect.x),
            y: c.map(x => x.rect.y),
            width: c.map(x => x.rect.width),
            padding: c.map(x => x.style.paddingLeft)
          };
        });
        assert.equal(visual.display, 'grid', 'Starter items must be rendered as a CSS grid');
        assert.ok(visual.backgrounds.every(bg => bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent'),
          'Each starter card needs a visible card background');
        assert.ok(visual.borders.every(b => parseFloat(b) >= 1), 'Each starter card needs a border');
        assert.ok(visual.radius.every(r => parseFloat(r) >= 12), 'Each starter card needs rounded corners');
        assert.ok(visual.padding.every(p => parseFloat(p) >= 20), 'Each starter card needs internal padding');
        if (viewport.width >= 1000) {
          assert.ok(visual.x[1] > visual.x[0] + 100 && visual.x[2] > visual.x[1] + 100,
            'Desktop starter cards must appear in three columns, not stacked text');
          assert.ok(Math.abs(visual.y[0] - visual.y[2]) < 5, 'Desktop starter cards share a row');
        }
        if (viewport.width <= 590) {
          assert.ok(visual.y[1] > visual.y[0] + 40, 'Mobile starter cards stack vertically');
          assert.ok(visual.width.every(w => w > 250), 'Mobile cards use available content width');
        }

        assert.equal(await page.locator('#yb-start-heading').count(), 1, 'Starter section is present');
        assert.ok(await page.locator('.yb-hero-refresh a[href="/wallet/"]').count() === 1, 'Primary wallet CTA');
        assert.ok(await page.locator('.yb-hero-refresh a[href="https://explorer.yerbas.org/"]').count() === 1, 'Explorer CTA');
        assert.ok(await page.locator('.yb-ecosystem-grid a[href="/projects/"]').count() === 1, 'Projects CTA');
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
        if (['/wallet/','/smartnode-setup/','/pools/','/community/','/projects/','/buy-yerbas/','/halving/','/whitepaper/'].includes(route)) {
          await auditInternalLinks(page, route);
          await auditAccessibility(page, 'page-' + route.slice(1,-1));
        }
        if (route === '/buy-yerbas/' || route === '/pools/' || route === '/watch-yerbas/') {
          const noteSelector = route === '/buy-yerbas/' ? '.yb-market-note' : '.yb-notice';
          const safety = await page.locator(noteSelector).innerText();
          assert.ok(safety.length > 60, route + ' must include a substantial operational-data caution');
          assert.equal(await page.locator('main a[href^="https://"]').count() > 0, true, route + ' should expose external references');
        }
        if (route === '/buy-yerbas/') {
          const rows = page.locator('.yb-market-list .yb-market-row');
          assert.equal(await rows.count(),5,'Five compact market rows must be displayed');

          assert.equal(await page.locator('.yb-market-logo').count(), 5, 'All exchange rows must include a brand image');
          const brandChecks = await rows.evaluateAll(elements => elements.map(el => {
            const img = el.querySelector('.yb-market-logo');
            const fallback = el.querySelector('.yb-market-monogram-letter');
            return {name:el.querySelector('h3')?.textContent.trim(),image:!!img,
              source:img?.getAttribute('src'),width:img?.getBoundingClientRect().width,
              fallback:!!fallback,srcLoaded:!!(img?.complete && img?.naturalWidth > 0)};
          }));
          assert.ok(brandChecks.every(x => x.image && x.fallback && x.width > 24),
            'Exchange brand images must occupy the logo area and retain initials as fallback');
          assert.ok(brandChecks.find(x=>x.name==='NestEx')?.srcLoaded,
            'Local NestEx branding must be available in the generated site');
          console.log('EXCHANGE LOGOS',JSON.stringify(brandChecks));

          assert.equal(await page.locator('h1').innerText(),'Trade Yerbas.');
          const styles = await rows.evaluateAll(elements => elements.map(el => {
            const rect=el.getBoundingClientRect();
            const css=getComputedStyle(el);
            return {height:rect.height,width:rect.width,display:css.display,padding:css.paddingTop,bg:css.backgroundColor};
          }));
          assert.ok(styles.every(x=>x.display==='grid' && x.height<125 && x.width>400),
            'Directory must render compact grid rows, not oversized article cards');
          assert.ok(styles.every(x=>parseFloat(x.padding)<=22),'Rows should remain compact');
          const links=await page.locator('.yb-market-link').evaluateAll(els=>els.map(e=>e.getAttribute('href')));
          for (const target of ['https://neoxa.exchange/trade/YERB_USDT',
            'https://spotex.trade/trade/YERB-USDT',
            'https://filodex.xyz/trade/YERB_USDT']) {
            assert.ok(links.includes(target),'Exchange destination missing: '+target);
          }
          const oldCards = await page.locator('.yb-market-page .yb-card').count();
          assert.equal(oldCards,0,'Generic bulky cards must not appear in exchange directory');
          const toggle=page.locator('#yb-theme-toggle');
          if ((await page.locator('html').getAttribute('data-theme')) !== 'dark') await toggle.click();
          await auditAccessibility(page,'page-exchanges-dark');
          await page.screenshot({path:path.join(out,'exchanges-desktop-dark.png'),fullPage:true,animations:'disabled'});
          await toggle.click();
          assert.equal(await page.locator('html').getAttribute('data-theme'),'light');
          await auditAccessibility(page,'page-exchanges-light');
          await page.screenshot({path:path.join(out,'exchanges-desktop-light.png'),fullPage:true,animations:'disabled'});
          const mobile=await browser.newPage({viewport:{width:375,height:812},reducedMotion:'reduce'});
          try {
            await mobile.goto(base + route,{waitUntil:'load',timeout:30000});
            if ((await mobile.locator('html').getAttribute('data-theme')) !== 'dark')
              await mobile.locator('#yb-theme-toggle').click();
            const noOverflow=await mobile.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 2);
            assert.ok(noOverflow,'Exchange directory must not overflow mobile viewport');
            const mobileRows=mobile.locator('.yb-market-row');
            assert.equal(await mobileRows.count(),5);
            await auditAccessibility(mobile,'page-exchanges-mobile-dark');
            await mobile.screenshot({path:path.join(out,'exchanges-mobile-dark.png'),fullPage:true,animations:'disabled'});
          } finally { await mobile.close(); }
        }
        if (route === '/whitepaper/') {
          const documents = page.locator('a[href$=".pdf"]');
          assert.equal(await documents.count(),4,'Only four repository-verified PDFs should be linked');
          for (const href of await documents.evaluateAll(els => els.map(el=>el.getAttribute('href')))) {
            const response = await page.request.get(base + href, { timeout: 12000 });
            assert.equal(response.status(),200,'Whitepaper document must exist: ' + href);
            assert.match(response.headers()['content-type'] || '',/pdf|octet-stream/,'Document content type should be PDF: ' + href);
          }
          await page.screenshot({path:path.join(out,'whitepapers-desktop.png'),fullPage:true,animations:'disabled'});
        }
        if (route === '/smartnode-setup/') {
          const table = page.locator('#yb-collateral-table');
          assert.equal(await table.locator('tbody tr').count(), 8, 'Mainnet collateral schedule has eight tiers');
          const values = await table.locator('tbody tr').allTextContents();
          assert.ok(values[6].includes('1,096,421–1,369,420') && values[6].includes('69,000'), '69k boundary');
          assert.ok(values[7].includes('1,369,421 and later') && values[7].includes('100,000'), '100k boundary');
          await page.screenshot({path:path.join(out,'smartnodes-desktop.png'),fullPage:true,animations:'disabled'});
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
