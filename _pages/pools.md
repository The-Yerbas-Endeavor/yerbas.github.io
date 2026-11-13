---
layout: page-w-banner
title: Mining Pools
bannerTitle: Mine Yerbas
bannerImage: /assets/img/pages/exchanges/exchange-banner.jpg
permalink: /pools/
description: "Mining resources and community-listed Yerbas pools."
---
<section class="wrapper yb-section">
  <p class="yb-eyebrow">Proof of work</p><h2>Start mining YERB</h2>
  <p class="yb-intro">Yerbas uses GhostRider proof of work. Create and verify a wallet receiving address, review the mining documentation, and choose a compatible pool.</p>
  <div class="yb-actions"><a class="yb-button yb-button-primary" href="/wallet/">Get a wallet</a><a class="yb-button" href="https://docs.yerbas.org/docs/mining/">Mining reference</a><a class="yb-button" href="https://miningpoolstats.stream/yerbas">Pool directory</a></div>
  <aside class="yb-notice"><strong>Verify the pool before mining:</strong> A working website is not proof of working stratum connections, current block rewards or payouts. Check connection instructions, real-time pool statistics, fees, payout currency and the last successfully paid block directly with the operator.</aside>
  <h2>Community-listed mining pools</h2>
  <div class="yb-grid">
  {% assign pools = site.data.pools | sort: 'name' %}
  {% for pool in pools %}
    <article class="yb-card"><h3>{{ pool.name | escape }}</h3><p>Check GhostRider support, current pool operation, fees and payout terms before connecting miners.</p><a href="{{ pool.url }}" rel="noopener noreferrer nofollow" target="_blank">Visit pool website ↗</a></article>
  {% endfor %}
  </div>
  <p class="yb-small" style="margin-top:2rem">Pool operators can propose corrections to <a href="https://github.com/The-Yerbas-Endeavor/yerbas.github.io/blob/gh-pages/_data/pools.yml">the community pool directory</a>.</p>
</section>