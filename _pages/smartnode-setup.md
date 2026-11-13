---
layout: page-w-banner
title: Smartnode Setup
bannerTitle: Run a Yerbas Smartnode
bannerImage: /assets/img/pages/about/about-banner.jpg
permalink: /smartnode-setup/
description: "Source-backed Smartnode collateral tiers and technical resources for Yerbas Core."
---
<section class="wrapper yb-section">
  <p class="yb-eyebrow">Network infrastructure</p>
  <h2>Operate a Yerbas Smartnode</h2>
  <p class="yb-intro">Smartnodes are part of the Yerbas network infrastructure. Before registering or changing a Smartnode, check the Core release used by the network, current chain height, collateral policy and registration requirements.</p>
  <div class="yb-notice"><strong>Version-sensitive operations:</strong> This reference is derived from Yerbas Core <code>v4.0.1.4</code>. It does not establish the current tip height or guarantee that a registration is valid. The earlier Ubuntu 20.04 / Core 3.1.2.7 installation script and 28,000 YERB example have been retired.</div>
  <h2>Collateral schedule in Core v4.0.1.4</h2>
  <p>The table below reflects <code>getCollateral(height)</code> in the mainnet consensus parameters. Each source threshold is an <strong>inclusive ending height</strong>, not the date or height when that tier begins. These are the amounts selected by the lookup for the indicated heights.</p>
  <div class="yb-table-scroll">
    <table class="yb-reward-table" id="yb-collateral-table">
      <caption>Mainnet collateral lookup by chain height (Core v4.0.1.4)</caption>
      <thead><tr><th scope="col">Height (inclusive)</th><th scope="col">Collateral (YERB)</th></tr></thead>
      <tbody>
        <tr><td>0–69,420</td><td>10,000</td></tr>
        <tr><td>69,421–100,420</td><td>16,000</td></tr>
        <tr><td>100,421–200,420</td><td>22,000</td></tr>
        <tr><td>200,421–302,420</td><td>28,000</td></tr>
        <tr><td>302,421–420,420</td><td>34,000</td></tr>
        <tr><td>420,421–1,096,420</td><td>42,000</td></tr>
        <tr><td>1,096,421–1,369,420</td><td>69,000</td></tr>
        <tr><td>1,369,421 and later</td><td>100,000</td></tr>
      </tbody>
    </table>
  </div>
  <div class="yb-notice"><strong>Existing collaterals have separate rules.</strong> The Core <code>isPayableCollateral(height, amount)</code> function accepts listed historical collateral amounts only through their corresponding inclusive end heights (with the final tier not expiring). Do not assume that every previously used amount remains payable forever, or that a scheduled amount alone establishes a currently valid Smartnode registration.</div>
  <h2>Smartnode reward rules</h2>
  <p>The v4.0.1.4 mainnet parameters specify a 20% Smartnode base-reward share after the initial 4,200-height period. The payment function separately checks that the deterministic Smartnode list contains at least 10 nodes; otherwise it returns zero. When eligible, the payment calculation also includes the configured Smartnode share of special transaction fees.</p>
  <p>These are rules in the tagged source, <strong>not</strong> a promise of a payment to any particular Smartnode or a representation of current network conditions.</p>
  <div class="yb-grid">
    <article class="yb-card"><h3>Installation reference</h3><p>Review setup concepts, but cross-check the external guide against the installed Core version. Parts of the external documentation reference older releases.</p><a href="https://docs.yerbas.org/docs/smartnodes/installation/manualsetup/">Read guide (verify version) →</a></article>
    <article class="yb-card"><h3>Core releases</h3><p>Verify the supported wallet and daemon release before operating or registering a node.</p><a href="https://github.com/The-Yerbas-Endeavor/yerbas/releases">Official releases →</a></article>
    <article class="yb-card"><h3>Network explorer</h3><p>Inspect the blockchain and Smartnode information on the network explorer.</p><a href="https://explorer.yerbas.org/masternodes">View Smartnodes →</a></article>
  </div>
  <h2>Source and verification</h2>
  <p>References: <a href="https://github.com/The-Yerbas-Endeavor/yerbas/blob/v4.0.1.4/src/chainparams.cpp">mainnet collateral and reward parameters</a>, <a href="https://github.com/The-Yerbas-Endeavor/yerbas/blob/v4.0.1.4/src/smartnode/smartnode-collaterals.cpp">collateral threshold and payability implementation</a>, and <a href="https://github.com/The-Yerbas-Endeavor/yerbas/blob/v4.0.1.4/src/validation.cpp">Smartnode payment implementation</a>. Verify the current network height and any subsequent consensus updates before sending funds.</p>
</section>