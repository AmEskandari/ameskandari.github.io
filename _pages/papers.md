---
permalink: /papers/
layout: paper
title: "Publications"
description: "Publications of Amir Eskandari: personalization of large language models, graph machine learning, knowledge distillation and time-series imputation."
redirect_from:
  - /publications/
---

<header class="masthead">
<h1 class="masthead__name">Publications</h1>
<p class="masthead__lede">Most recent first. Citation counts are on <a href="https://scholar.google.ca/citations?user=7RNTKkAAAAAJ&amp;hl=en">Google Scholar</a>.</p>
</header>

<div class="prose bibliography">
{% assign by_year = site.data.publications | group_by: "year" %}
{% for group in by_year %}
<h2>{{ group.name }}</h2>
<ol class="references">
{% for pub in group.items %}{% include paper/reference.html pub=pub %}{% endfor %}
</ol>
{% endfor %}
</div>
