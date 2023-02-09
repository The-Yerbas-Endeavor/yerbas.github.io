---
layout: page-w-banner
title: Pools
bannerTitle: Mining Pools
bannerImage: /assets/img/pages/exchanges/exchange-banner.jpg
permalink: /pools/
---

<div class="page-content">
  <div class="wrapper mb-32 m-auto">
    <h2>How can I mine Yerbas?</h2>
    <p>Designed to be mined on readily available consumer-grade hardware, Yerbas uses a new algorithm known as GhostRider. It’s designed to be Application Specific Integrated Circuit (ASIC) resistant and is designed to be efficient on consumer CPU hardware.</p>
    <p>To start mining YERB, you will first need to create a wallet and generate a wallet address that your YERB can be paid into. Next, choose a mining pool.</p>
    <p>To learn how to mine, visit: <a href="https://wiki.yerbas.org/wiki/Yerbas" target="_blank" rel="noopener">https://wiki.yerbas.org/wiki/Yerbas</a></p>
    <p class="mb-8">Yerbas (YERB) is supported by the following mining pools:</p>
    <div class="flex flex-wrap">
      {% assign n = site.data.pools | size %}
      {% assign random_sorted_pools = site.data.pools | sample: n %}
      {% for pool in random_sorted_pools %}
      <div class="mb-2 px-2 sm:w-1/2 md:w-1/3 text-center">
        <div class="max-w-sm rounded overflow-hidden shadow-md hover:text-white">
          <span class="mb-0"><a class="block p-4 btn btn-primary mx-2 mt-4 mb-3 px-3 py-3 font-medium text-base rounded hover:text-white" href="{{ pool.url }}" target="_blank">{{ pool.name }}</a></span>
        </div>
      </div>
      {% endfor %}
    </div>
  </div>
</div>
