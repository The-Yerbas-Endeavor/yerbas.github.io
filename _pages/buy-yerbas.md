---
layout: default
title: Exchanges
permalink: /buy-yerbas/
description: "Explore third-party trading markets for Yerbas (YERB), including YERB/USDT and YERB/DOGE pairs."
---
<section class="yb-market-page" aria-labelledby="yb-market-heading">
  <div class="wrapper">
    <div class="yb-market-intro">
      <div class="yb-market-headline">
        <p class="yb-eyebrow"><span class="yb-signal" aria-hidden="true"></span> YERB · Exchanges</p>
        <h1 id="yb-market-heading">Trade <span>Yerbas.</span></h1>
        <p>Browse independent markets for YERB. Choose a trading pair, then continue directly to the exchange.</p>
        <div class="yb-market-intro-actions">
          <a href="/wallet/">Get a wallet <span aria-hidden="true">↗</span></a>
          <a href="https://explorer.yerbas.org/">Block explorer <span aria-hidden="true">↗</span></a>
        </div>
      </div>
      <div class="yb-market-visual" aria-hidden="true">
        <div class="yb-market-orbit">
          <div class="yb-market-orbit-core"><img src="/assets/img/media/logo-icon-small.png" width="92" height="92" alt=""></div>
          <span class="yb-market-orbit-tag yb-market-orbit-tag-a">YERB</span>
          <span class="yb-market-orbit-tag yb-market-orbit-tag-b">USDT</span>
          <span class="yb-market-orbit-tag yb-market-orbit-tag-c">DOGE</span>
        </div>
      </div>
    </div>

    <div class="yb-market-directory" aria-label="Exchange listings">
      <div class="yb-market-directory-head">
        <div>
          <h2>Available listings</h2>
          <p>Choose a venue to open its market page.</p>
        </div>
        <span class="yb-market-count">{{ site.data.exchanges | size }} listed venues</span>
      </div>

      <div class="yb-market-list">
        {% assign exchanges = site.data.exchanges | sort: 'name' %}
        {% for exchange in exchanges %}
        <article class="yb-market-row">
          <span class="yb-market-monogram yb-market-brand" aria-hidden="true">
            <span class="yb-market-monogram-letter">{{ exchange.name | slice: 0, 1 | upcase }}</span>
            {% if exchange.logo %}
            <img class="yb-market-logo" src="{{ exchange.logo | escape }}" alt="" width="40" height="40" loading="lazy" decoding="async" referrerpolicy="no-referrer" onerror="this.hidden=true">
            {% endif %}
          </span>
          <div class="yb-market-identity">
            <h3>{{ exchange.name | escape }}</h3>
            <span>External exchange</span>
          </div>
          <div class="yb-market-pair-block">
            <span class="yb-market-col-label">Trading pair</span>
            <span class="yb-market-pair">{{ exchange.pair | default: 'YERB market' | escape }}</span>
          </div>
          <a class="yb-market-link" href="{{ exchange.url | escape }}" target="_blank" rel="noopener noreferrer nofollow" aria-label="Open {{ exchange.name | escape }} {{ exchange.pair | escape }} market in a new tab">
            Visit market <span aria-hidden="true">↗</span>
          </a>
        </article>
        {% endfor %}
      </div>
      <p class="yb-market-note"><span aria-hidden="true">ⓘ</span> Independent venues. Check liquidity, fees, and deposit/withdrawal availability before trading. Listings are not endorsements or live status indicators.</p>
    </div>
  </div>
</section>
