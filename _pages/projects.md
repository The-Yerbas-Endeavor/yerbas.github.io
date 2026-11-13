---
layout: page-w-banner
title: Projects
bannerTitle: Yerbas Community Projects
bannerImage: /assets/img/pages/exchanges/exchange-banner.jpg
permalink: /projects/
description: "Explore community-contributed projects related to Yerbas."
---
<section class="wrapper yb-section">
 <div class="yb-eyebrow">Open ecosystem</div><h2>Community projects</h2>
 <p class="yb-intro">Projects below are community-submitted. Their descriptions and roadmaps may be historical; check each repository or project site for current maintenance status.</p>
 <p>Have a correction or addition? <a href="https://github.com/The-Yerbas-Endeavor/yerbas.github.io/blob/gh-pages/_data/projects.yml">Suggest a project update on GitHub</a>.</p>
 {% assign sorted_projects = site.data.projects | sort: 'name' %}
 <div class="yb-grid">{% for project in sorted_projects %}
  <article class="yb-card"><h3>{{ project.name | escape }}</h3><p>{{ project.description | strip_html | truncatewords: 32 | escape }}</p>
  {% for project_link in project.project_sites limit: 2 %}<a href="{{ project_link.url }}" rel="noopener noreferrer" target="_blank">{{ project_link.name | escape }} →</a>{% endfor %}
  </article>{% endfor %}</div>
</section>