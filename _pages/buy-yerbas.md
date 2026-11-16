---
layout: page-w-banner
title: Buy Yerbas
bannerTitle: Where to Find Yerbas
bannerImage: /assets/img/pages/exchanges/exchange-banner.jpg
permalink: /buy-yerbas/
description: "Community-listed Yerbas exchange links with independent verification guidance."
---
<section class="wrapper yb-section">
  <p class="yb-eyebrow">Third-party markets</p>
  <h2>Find YERB trading venues</h2>
  <p class="yb-intro">These venues are listed for discovery. A trading page being online does not prove its YERB order book, deposits, withdrawals, or wallet synchronization are functioning. Confirm everything on the venue before transferring funds.</p>
  {% assign exchanges = site.data.exchanges | sort: 'name' %}
  <div class="yb-grid">
  {% for exchange in exchanges %}
    <article class="yb-card"><h3>{{ exchange.name | escape }}</h3>
      {% if exchange.pair %}<p class="yb-exchange-pair">{{ exchange.pair | escape }}</p>{% endif %}
      <p>Third-party listing. Verify the trading pair, activity, fees, identity requirements, deposits and withdrawals directly with the operator.</p>
      <a href="{{ exchange.url | escape }}" target="_blank" rel="noopener noreferrer nofollow" aria-label="Open {{ exchange.name | escape }} external {{ exchange.pair | escape }} market">Open market ↗</a>
    </article>
  {% endfor %}
  </div>
  <aside class="yb-notice"><strong>Trading involves risk:</strong> YERB pairs may have limited liquidity or outdated quotes. Compare bid/ask spreads and available balances, and independently validate a receiving address before sending coins. Listing does not constitute endorsement.</aside>
</section>