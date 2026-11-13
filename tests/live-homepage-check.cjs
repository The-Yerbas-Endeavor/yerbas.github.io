// Verify the actual public Yerbas homepage, not just a locally served Jekyll build.
// On a request failure or stale upstream cache, show the evidence rather than
// silently treating the GitHub Pages deployment status as a render check.
const { chromium } = require('playwright');
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const url = 'https://yerbas.org/';
const out = path.join(process.cwd(), 'live-homepage-evidence');
fs.mkdirSync(out, { recursive: true });

(async () => {
  const browser = await chromium.launch({headless:true});
  try {
    for (const viewport of [
      {width:1440,height:900,name:'desktop',theme:'dark'},
      {width:1440,height:900,name:'desktop',theme:'light'},
      {width:375,height:812,name:'mobile',theme:'dark'},
      {width:375,height:812,name:'mobile',theme:'light'}
    ]) {
      const page = await browser.newPage({viewport: {width:viewport.width,height:viewport.height}, reducedMotion:'reduce'});
      await page.addInitScript(theme => {
        try { localStorage.setItem('yerbas-theme', theme); } catch (_) {}
      }, viewport.theme);
      const failed = [];
      page.on('requestfailed', req => failed.push({url:req.url(),error:req.failure()?.errorText}));
      const response = await page.goto(url,{waitUntil:'load',timeout:45000});
      assert.equal(response?.status(), 200, 'Live homepage should return HTTP 200');
      assert.equal(await page.locator('html').getAttribute('data-theme'),viewport.theme,
        'Live page must honor the selected theme');
      const stylesheet = await page.locator('link[href*="yerbas-modern.css"]').getAttribute('href');
      assert.match(stylesheet || '', /[?&]v=[0-9]+/, 'Production stylesheet must have a versioned URL');
      const resolved = new URL(stylesheet,page.url()).href;
      const cssResponse = await page.request.get(resolved, {timeout:25000, headers: {'Cache-Control':'no-cache'}});
      const cssText = await cssResponse.text();
      assert.equal(cssResponse.status(), 200, 'Versioned production CSS must return HTTP 200');
      assert.ok(cssText.includes('.yb-start-grid{display:grid'), 'Production CSS must contain homepage starter grid styles');
      assert.ok(cssText.includes('.yb-start-card{position:relative'), 'Production CSS must contain starter card styles');
      const cards = await page.locator('.yb-start-card').count();
      assert.equal(cards, 3, 'Live homepage must have three starter cards');
      const metrics = await page.locator('.yb-start-grid').evaluate(grid => {
        const items = [...grid.querySelectorAll('.yb-start-card')];
        return {gridDisplay:getComputedStyle(grid).display,
          cards:items.map(item=>({x:item.getBoundingClientRect().x,y:item.getBoundingClientRect().y,
            width:item.getBoundingClientRect().width,bg:getComputedStyle(item).backgroundColor,
            padding:getComputedStyle(item).paddingLeft,border:getComputedStyle(item).borderTopWidth,
            radius:getComputedStyle(item).borderTopLeftRadius}))
        };
      });
      const evidence = {viewport,liveURL:page.url(),title:await page.title(),cssURL:resolved,
        cssHTTP:cssResponse.status(),metrics,failedRequests:failed};
      fs.writeFileSync(path.join(out,viewport.name+'-'+viewport.theme+'.json'),JSON.stringify(evidence,null,2));
      await page.screenshot({path:path.join(out,viewport.name+'-'+viewport.theme+'.png'),fullPage:true,animations:'disabled'});
      assert.equal(metrics.gridDisplay,'grid','Production starter grid must have computed display:grid');
      assert.ok(metrics.cards.every(x=>parseFloat(x.border)>=1&&parseFloat(x.padding)>=20&&parseFloat(x.radius)>=12&&x.bg!=='rgba(0, 0, 0, 0)'),'Cards need borders, background, padding and corners');
      if (viewport.theme==='dark') {
        assert.ok(metrics.cards.every(x=>x.bg!=='rgb(255, 255, 255)'),
          'Dark theme cards should not use the light theme white background');
      }
      if (viewport.name==='desktop') {
        assert.ok(metrics.cards[0].x+100 < metrics.cards[1].x && metrics.cards[1].x+100 < metrics.cards[2].x,
          'On desktop, cards must appear in three columns (not as stacked text)');
        assert.ok(Math.abs(metrics.cards[0].y-metrics.cards[2].y)<5,
          'Desktop cards should share the same row');
      } else {
        assert.ok(metrics.cards[1].y>metrics.cards[0].y+40, 'Mobile cards must stack');
      }
      console.log('PASS live', viewport.name, viewport.theme, 'stylesheet:',resolved,'layout:',JSON.stringify(metrics));
      await page.close();
    }
  } finally {await browser.close();}
})().catch(e=>{console.error('LIVE SITE CHECK FAILED / INCONCLUSIVE:',e);process.exitCode=1;});
