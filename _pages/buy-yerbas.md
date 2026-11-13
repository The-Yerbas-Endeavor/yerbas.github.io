---
layout: page-w-banner
title: Buy Yerbas
bannerTitle: Where to Find Yerbas
bannerImage: /assets/img/pages/exchanges/exchange-banner.jpg
permalink: /buy-yerbas/
description: "View exchange links listed by the Yerbas community."
---
<section class="wrapper yb-section">
 <div class="yb-eyebrow">Markets</div><h2>Find YERB trading markets</h2>
 <p class="yb-intro">Explore community-listed venues. Verify market availability, the exact trading pair, fees, custody and withdrawal policies before transferring funds. This directory is not an endorsement of an exchange.</p>
 {% assign exchanges = site.data.exchanges | sort: 'name' %}
 <div class="yb-grid">{% for exchange in exchanges %}
  <article class="yb-card"><h3>{{ exchange.name | escape }}</h3><p>{% if exchange.kyc %}KYC may be required; verify current requirements on the venue.{% else %}Confirm account and identity requirements directly with the venue.{% endif %}</p><a href="{{ exchange.url }}" target="_blank" rel="noopener noreferrer nofollow">View trading market →</a></article>
 {% endfor %}</div>
 <div class="yb-notice"><strong>Trade carefully.</strong> Liquidity and markets can change without notice. Double-check addresses, network selection, and account restrictions.</div>
</section>