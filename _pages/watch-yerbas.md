---
layout: page-w-banner
title: Watch Yerbas
bannerTitle: Watch Yerbas
bannerImage: /assets/img/pages/aggregators/aggregators-banner.jpg
permalink: /watch-yerbas/
---

<div class="page-content">
  <div class="wrapper mt-8 mb-32 m-auto">
    <h1><b>Aggregators</b></h1><br>
    <div class="flex flex-wrap">
      {% for aggregators in site.data.aggregators %}
            {% if aggregators.kyc == false %}
                <div class="mb-6 px-2 sm:w-1/2 md:w-1/4 text-center">
                  <div class="bg-grey max-w-sm rounded overflow-hidden shadow-md hover:by-grey">
                    <a class="block px-6 py-8" href="{{ aggregators.url }}" target="_blank"><img src="{{ aggregators.logo }}" alt="{{ aggregators.name }} aggregators"/></a>
                  </div>
                  {% if aggregators.donates_to_project == true %}
                    <span><i class="zmdi zmdi-balance"></i> &nbsp; Donates to foundation</span>
                  {% endif %}
                </div>
            {% endif %}
      {% endfor %}
    </div>
  </div>
</div>
