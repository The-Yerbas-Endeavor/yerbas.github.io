---
layout: page-w-banner
title: Mining Pools
bannerTitle: Mine Yerbas
bannerImage: /assets/img/pages/exchanges/exchange-banner.jpg
permalink: /pools/
description: "Find Yerbas GhostRider mining pools, compare payout options, and get started mining YERB."
---
<style>
  .yb-mining { --pool-border: color-mix(in srgb, currentColor 16%, transparent); }
  .yb-mining .pool-lead { max-width: 64rem; }
  .yb-mining .pool-actions { display:flex; flex-wrap:wrap; gap:.7rem; margin:1.5rem 0 2rem; }
  .yb-mining .pool-feature { position:relative; overflow:hidden; border:1px solid var(--pool-border); border-radius:24px; padding:clamp(1.25rem,3vw,2.4rem); margin:1.5rem 0 2.5rem; background:color-mix(in srgb, currentColor 5%, transparent); }
  .yb-mining .pool-feature:before { content:""; position:absolute; width:14rem; height:14rem; top:-8rem; right:-5rem; border-radius:50%; background:color-mix(in srgb, currentColor 6%, transparent); pointer-events:none; }
  .yb-mining .pool-kicker { text-transform:uppercase; font-size:.72rem; letter-spacing:.12em; font-weight:750; opacity:.7; margin:0 0 .45rem; }
  .yb-mining .pool-brand { display:flex; align-items:center; gap:1rem; margin-bottom:1rem; }
  .yb-mining .pool-mark { width:3.25rem; height:3.25rem; display:grid; place-items:center; flex:none; border:1px solid var(--pool-border); border-radius:15px; font-weight:800; font-size:1rem; background:color-mix(in srgb,currentColor 8%,transparent); }
  .yb-mining .pool-brand h3 { margin:0; overflow-wrap:anywhere; }
  .yb-mining .pool-brand p { margin:.25rem 0 0; opacity:.75; font-size:.9rem; }
  .yb-mining .pool-facts { display:flex; flex-wrap:wrap; gap:.65rem; margin:1.2rem 0; }
  .yb-mining .pool-facts span { border:1px solid var(--pool-border); border-radius:999px; padding:.4rem .75rem; font-size:.85rem; }
  .yb-mining .pool-stratum { margin:1.25rem 0; }
  .yb-mining .pool-stratum code { display:block; padding:.9rem 1rem; border:1px solid var(--pool-border); border-radius:12px; background:color-mix(in srgb,currentColor 7%,transparent); color:inherit; font-size:.9rem; white-space:normal; overflow-wrap:anywhere; }
  .yb-mining .pool-grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:1rem; margin:1.2rem 0 2rem; }
  .yb-mining .pool-card { display:flex; flex-direction:column; min-width:0; border:1px solid var(--pool-border); border-radius:20px; padding:1.35rem; background:color-mix(in srgb,currentColor 3%,transparent); }
  .yb-mining .pool-card .pool-brand { align-items:flex-start; }
  .yb-mining .pool-card .pool-mark { width:2.7rem; height:2.7rem; border-radius:12px; font-size:.8rem; }
  .yb-mining .pool-card p { font-size:.94rem; }
  .yb-mining .pool-card .pool-bottom { margin-top:auto; padding-top:1rem; }
  .yb-mining .pool-card a, .yb-mining .pool-feature a { overflow-wrap:anywhere; }
  .yb-mining .pool-steps { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:1rem; margin:1.3rem 0 2rem; }
  .yb-mining .pool-step { border-top:2px solid var(--pool-border); padding-top:1rem; }
  .yb-mining .pool-step strong { display:block; margin-bottom:.4rem; }
  .yb-mining .pool-step p { margin:.25rem 0; font-size:.94rem; }
  .yb-mining .pool-number { display:inline-flex; width:1.9rem; height:1.9rem; align-items:center; justify-content:center; border:1px solid var(--pool-border); border-radius:50%; margin-bottom:.75rem; font-weight:700; }
  .yb-mining .pool-disclaimer { border-left:3px solid currentColor; padding:.75rem 1rem; background:color-mix(in srgb,currentColor 5%,transparent); border-radius:0 10px 10px 0; font-size:.92rem; }
  @media(max-width:850px) { .yb-mining .pool-grid { grid-template-columns:repeat(2,minmax(0,1fr)); } }
  @media(max-width:620px) { .yb-mining .pool-grid,.yb-mining .pool-steps { grid-template-columns:1fr; } .yb-mining .pool-feature { border-radius:18px; } }
</style>
<section class="wrapper yb-section yb-mining">
  <p class="yb-eyebrow">GhostRider proof of work</p>
  <h2>Mining YERB starts here.</h2>
  <p class="yb-intro pool-lead">Choose a pool, connect a GhostRider-compatible miner, and receive mining payouts to your own Yerbas wallet. Compare the operators below before committing your hashrate.</p>
  <div class="pool-actions">
    <a class="yb-button yb-button-primary" href="/wallet/">Get a wallet</a>
    <a class="yb-button" href="https://docs.yerbas.org/docs/mining/">Mining guide</a>
    <a class="yb-button" href="https://miningpoolstats.stream/yerbas" target="_blank" rel="noopener noreferrer">Independent pool statistics ↗</a>
  </div>

  <p class="yb-eyebrow">Community mining infrastructure</p>
  <h2>Yerbas mining pool</h2>
  <article class="pool-feature">
    <div class="pool-brand"><span class="pool-mark" aria-hidden="true">YB</span><div><h3>pool.yerbas.org</h3><p>Dedicated YERB mining dashboard</p></div></div>
    <p>Find miner configuration examples, worker activity, recently found blocks, and payout history directly on the pool dashboard.</p>
    <div class="pool-facts"><span>GhostRider</span><span>0.50% advertised fee</span><span>YERB payouts</span></div>
    <div class="pool-stratum"><p class="pool-kicker">Published stratum endpoint</p><code>stratum+tcp://pool.yerbas.org:3333</code></div>
    <div class="pool-actions"><a class="yb-button yb-button-primary" href="https://pool.yerbas.org/" target="_blank" rel="noopener noreferrer">Open mining dashboard ↗</a><a class="yb-button" href="https://pool.yerbas.org/#configure" target="_blank" rel="noopener noreferrer">Miner setup ↗</a></div>
  </article>

  <p class="yb-eyebrow">More ways to mine</p>
  <h2>Other community-listed pools</h2>
  <div class="pool-grid">
    {% assign pools = site.data.pools | sort: 'name' %}
    {% for pool in pools %}
    {% unless pool.name == 'pool.yerbas.org' %}
    <article class="pool-card">
      <div class="pool-brand">
        {% if pool.name == 'Zpool' %}<span class="pool-mark" aria-hidden="true">Z</span>
        {% elsif pool.name == 'miningdutch' %}<span class="pool-mark" aria-hidden="true">MD</span>
        {% else %}<span class="pool-mark" aria-hidden="true">KK</span>{% endif %}
        <div><h3>{{ pool.name | escape }}</h3><p>Third-party mining pool</p></div>
      </div>
      {% if pool.name == 'Zpool' %}
      <p>Multi-coin pool offering configurable payout currencies. Double-check the password's <code>c=</code> payout setting and payout address before mining.</p>
      <div class="pool-facts"><span>Multi-coin</span><span>Configurable payouts</span></div>
      {% elsif pool.name == 'miningdutch' %}
      <p>GhostRider mining with native YERB payments or optional conversion. Offers PROP, PPLNS, D-PPS, SOLO and PARTY reward modes.</p>
      <div class="pool-facts"><span>GhostRider</span><span>SOLO from 0.50%</span><span>Regional servers</span></div>
      {% else %}
      <p>Community-listed Yerbas mining option. Confirm currently active GhostRider stratum connections, payout details and recent blocks with the operator.</p>
      <div class="pool-facts"><span>Verify current availability</span></div>
      {% endif %}
      <div class="pool-bottom"><a href="{{ pool.url | escape }}" target="_blank" rel="noopener noreferrer nofollow">Visit pool website ↗</a></div>
    </article>
    {% endunless %}
    {% endfor %}
  </div>

  <p class="yb-eyebrow">Quick start</p>
  <h2>Start mining in three steps</h2>
  <div class="pool-steps">
    <div class="pool-step"><span class="pool-number">1</span><strong>Create a receiving address</strong><p>Install a compatible <a href="/wallet/">Yerbas wallet</a>, verify that it is synchronized, and copy a YERB receiving address.</p></div>
    <div class="pool-step"><span class="pool-number">2</span><strong>Choose your pool and miner</strong><p>Check the operator's latest GhostRider miner command, stratum server, fees, payout currency, and worker format.</p></div>
    <div class="pool-step"><span class="pool-number">3</span><strong>Connect and monitor</strong><p>Start with a small test, confirm accepted shares on your pool dashboard, and verify the first payout in your wallet.</p></div>
  </div>

  <aside class="pool-disclaimer"><strong>Before you mine:</strong> Pool websites, fees, ports, and payment policies may change without notice. A reachable website does not prove that stratum or payouts are operational. Verify recent blocks and payouts directly with the operator. Listed pools are independent services, not endorsements.</aside>
  <p class="yb-small" style="margin-top:1.5rem">Operate a Yerbas pool? <a href="https://github.com/The-Yerbas-Endeavor/yerbas.github.io/blob/gh-pages/_data/pools.yml">Suggest a listing correction on GitHub</a>.</p>
</section>
