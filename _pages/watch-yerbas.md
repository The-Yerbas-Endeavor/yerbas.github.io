---
layout: page-w-banner
title: Watch Yerbas
bannerTitle: Yerbas Market Resources
bannerImage: /assets/img/pages/aggregators/aggregators-banner.jpg
permalink: /watch-yerbas/
description: "Third-party Yerbas market trackers, which may contain delayed or stale prices."
---
<section class="wrapper yb-section">
  <p class="yb-eyebrow">Third-party listings</p>
  <h2>Track Yerbas across market directories</h2>
  <p class="yb-intro">These links are an external resource directory, not a live price feed. Listed prices, trading volumes, and circulation figures may be outdated or incomplete.</p>
  <aside class="yb-notice"><strong>Check data freshness:</strong> Some directories display a last-trade date months in the past or report missing market data. Verify timestamps and compare with exchange order books before using any price or volume figure. No market data displayed here is guaranteed to be current.</aside>
  <div class="yb-grid">
  {% for item in site.data.aggregators %}
    <article class="yb-card"><h3>{{ item.name | escape }}</h3><p>Third-party listing. Verify the last update timestamp and its data sources.</p><a href="{{ item.url }}" rel="noopener noreferrer nofollow" target="_blank">Open {{ item.name | escape }} ↗</a></article>
  {% endfor %}
    <article class="yb-card"><h3>Blockchain explorer</h3><p>See on-chain transactions, blocks, and assets. The explorer is not a substitute for an exchange order book.</p><a href="https://explorer.yerbas.org/">Explore the blockchain ↗</a></article>
  </div>
</section>