---
layout: page-w-banner
title: Mining Pools
bannerTitle: Mine Yerbas
bannerImage: /assets/img/pages/exchanges/exchange-banner.jpg
permalink: /pools/
description: "Mining resources and community-listed Yerbas pools."
---
<section class="wrapper yb-section">
 <div class="yb-eyebrow">Proof of work</div><h2>Start mining YERB</h2>
 <p class="yb-intro">Yerbas uses the GhostRider proof-of-work algorithm, designed for accessible CPU mining. Start with a wallet address, review the current mining documentation, then select a pool.</p>
 <div class="yb-actions"><a class="yb-button yb-button-primary" href="/wallet/">Get a wallet</a><a class="yb-button" href="https://docs.yerbas.org/docs/mining/">Mining guide</a><a class="yb-button" href="https://miningpoolstats.stream/yerbas">Network pool statistics</a></div>
 <h2 style="margin-top:3rem">Community-listed pools</h2>
 <div class="yb-grid">{% assign pools = site.data.pools | sort: 'name' %}{% for pool in pools %}<article class="yb-card"><h3>{{ pool.name | escape }}</h3><p>Compare fees, payouts, connection settings and operating status on the pool website.</p><a href="{{ pool.url }}" rel="noopener noreferrer nofollow" target="_blank">Visit mining pool →</a></article>{% endfor %}</div>
 <p class="yb-small" style="margin-top:2rem">Pool operators can submit listing changes to <a href="https://github.com/The-Yerbas-Endeavor/yerbas.github.io/blob/gh-pages/_data/pools.yml">the site data file</a>.</p>
</section>