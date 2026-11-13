---
layout: page-w-banner
title: Block Rewards
bannerTitle: Yerbas Block Subsidy Schedule
bannerImage: /assets/img/pages/halving/grass.jpg
permalink: /halving/
description: "Source-backed Yerbas block subsidy schedule, verified against Yerbas Core v4.0.1.4."
---
<section class="wrapper yb-section">
  <p class="yb-eyebrow">Protocol reference</p>
  <h2>Base block subsidy</h2>
  <p class="yb-intro">Yerbas uses a staged block subsidy schedule rather than a simple Bitcoin-style halving. This table reflects the <code>GetBlockSubsidy</code> implementation and regression tests in the tagged Yerbas Core v4.0.1.4 source.</p>
  <div class="yb-notice"><strong>Important height detail:</strong> Core calculates the subsidy using the <em>previous block height</em>. The ranges below refer to the height passed to that consensus function, not the height of the block being rewarded. For example, previous height 1,000,000 still yields 100 YERB; previous height 1,000,001 yields 80 YERB. The corresponding newly mined block heights are one greater.</div>
  <div class="yb-table-scroll">
    <table class="yb-reward-table">
      <caption>Yerbas Core v4.0.1.4 base block subsidy by previous block height</caption>
      <thead><tr><th scope="col">Previous block height (inclusive)</th><th scope="col">Base subsidy (YERB)</th></tr></thead>
      <tbody>
        <tr><td>0–419</td><td>4.20</td></tr>
        <tr><td>420–1,000,000</td><td>100</td></tr>
        <tr><td>1,000,001–1,999,999</td><td>80</td></tr>
        <tr><td>2,000,000–2,999,999</td><td>70</td></tr>
        <tr><td>3,000,000–3,999,999</td><td>50</td></tr>
        <tr><td>4,000,000–4,999,999</td><td>40</td></tr>
        <tr><td>5,000,000–5,999,999</td><td>20</td></tr>
        <tr><td>6,000,000–6,999,999</td><td>10</td></tr>
        <tr><td>7,000,000–7,999,999</td><td>9</td></tr>
        <tr><td>8,000,000–8,999,999</td><td>8</td></tr>
        <tr><td>9,000,000–9,999,999</td><td>7</td></tr>
        <tr><td>10,000,000–10,999,999</td><td>6</td></tr>
        <tr><td>11,000,000–11,999,999</td><td>5</td></tr>
        <tr><td>12,000,000–12,999,999</td><td>4.20</td></tr>
        <tr><td>13,000,000–13,999,999</td><td>3</td></tr>
        <tr><td>14,000,000–14,999,999</td><td>2</td></tr>
        <tr><td>15,000,000–15,999,999</td><td>1</td></tr>
        <tr><td>16,000,000+</td><td>0.420</td></tr>
      </tbody>
    </table>
  </div>
  <h2>Subsidy versus payouts</h2>
  <p>The values above are the <strong>base block subsidy</strong>, not an unconditional miner, Smartnode or development payout breakdown. Actual coinbase distribution depends on the applicable network rules, smartnode eligibility and any transaction or asset fees. Do not infer a fixed per-recipient payment from the base subsidy alone.</p>
  <h2>Source and verification</h2>
  <p>This schedule was checked against <a href="https://github.com/The-Yerbas-Endeavor/yerbas/blob/v4.0.1.4/src/validation.cpp">v4.0.1.4 <code>GetBlockSubsidy</code></a> and the accompanying <a href="https://github.com/The-Yerbas-Endeavor/yerbas/blob/v4.0.1.4/src/test/subsidy_tests.cpp">subsidy boundary tests</a>. For operational use, compare against the <a href="https://github.com/The-Yerbas-Endeavor/yerbas/releases">current release</a> and the chain state before relying on any future schedule.</p>
</section>