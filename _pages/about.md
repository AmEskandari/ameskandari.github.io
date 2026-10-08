---
permalink: /
layout: paper
title: "Amir Eskandari"
description: "Amir Eskandari is a PhD candidate at Queen's University working on the personalization of large language models, graph machine learning and LLM post-training."
redirect_from:
  - /about/
  - /about.html
  - /research/
---

<header class="masthead prose" id="introduction">
<h1 class="masthead__name">Amir Eskandari</h1>
<figure class="plate">
<img src="{{ '/images/portrait.jpg' | relative_url }}" width="596" height="640" alt="Portrait of Amir Eskandari">
<figcaption>Plate I. The author.</figcaption>
</figure>
<p>I am a PhD candidate in the School of Computing at <a href="https://www.queensu.ca">Queen’s University</a> in Ontario, Canada, working on the personalization of large language models. I am supervised by Dr.&nbsp;<a href="https://www.cs.queensu.ca/people/Farhana/Zulkernine">Farhana Zulkernine</a> and Dr.&nbsp;<a href="https://www.queensu.ca/psychology/people/jordan-poppenk">Jordan Poppenk</a>. I am also a PhD trainee at Connected Minds CFREF.</p>
<p>Prior to my PhD, I was a graduate research assistant at AUT. I proudly hold an M.Sc. degree from <a href="https://aut.ac.ir/en/">Amirkabir University of Technology</a> and a B.Sc. degree from <a href="https://ikiu.ac.ir/en/">IKIU</a>, both in Electrical Engineering. During my master’s, I worked on multivariate time-series imputation using GNNs, supervised by Dr.&nbsp;<a href="https://aut.ac.ir/cv/2519/VAHID%20POURAHMADI">Vahid Pourahmadi</a>.</p>
<p><i>I love talking about science and technology. Shoot me an <a href="mailto:amir.eskandari@queensu.ca">email</a> if you’d like to discuss!</i> You can also find me on <a href="https://scholar.google.ca/citations?user=7RNTKkAAAAAJ&amp;hl=en">Google Scholar</a>, <a href="https://github.com/AmEskandari">GitHub</a>, <a href="https://www.linkedin.com/in/ameskandari/">LinkedIn</a> and <a href="https://x.com/Amireskndri">X</a>.</p>
</header>

<section class="prose" id="news">
<h2>I. News</h2>
{% assign news_shown = 5 %}
<table class="news">
<thead><tr><th scope="col">Date</th><th scope="col">Event</th></tr></thead>
<tbody>
{% for item in site.data.news limit: news_shown %}<tr><td>{{ item.date }}</td><td>{{ item.text }}</td></tr>
{% endfor %}</tbody>
</table>
{% assign news_rest = site.data.news.size | minus: news_shown %}
{% if news_rest > 0 %}
<details class="news-more">
<summary><span class="news-more__show">Show {{ news_rest }} earlier entries</span><span class="news-more__hide">Hide earlier entries</span></summary>
<table class="news">
<tbody>
{% for item in site.data.news offset: news_shown %}<tr><td>{{ item.date }}</td><td>{{ item.text }}</td></tr>
{% endfor %}</tbody>
</table>
</details>
{% endif %}
</section>

<section class="prose" id="research">
<h2>II. Research</h2>
<p>My goal is one model that gives each person the answer that suits them. I am exploring different approaches to personalization, including retrieval, post-training (RL and SFT) and test-time scaling (Fig.&nbsp;1). Personalization also comes with practical constraints, such as efficiency and local deployment on the user’s own device; I keep these in view and work toward methods that respect them. My research broadly spans graph machine learning and LLM post-training.</p>

{% include paper/fig-personalization.html %}

<div class="definition">
<p><span class="definition__head">Definition 1</span> (Personalization). Given a query <i>x</i> and what we know about a user <i>u</i>, a personalized model aims for the answer that this user prefers,</p>
<p class="equation"><span><i>y</i><sub><i>u</i></sub><sup>*</sup> = <span class="limits"><span>arg&thinsp;max</span><i class="limits__sub">y</i></span>&ensp;<i>r</i><sub><i>u</i></sub>(<i>x</i>,&thinsp;<i>y</i>),</span><span class="equation__num">(1)</span></p>
<p>where <i>r</i><sub><i>u</i></sub> is the user’s own reward, rather than one answer for everyone.</p>
</div>
</section>

<section class="prose" id="publications">
<h2>III. Selected Publications</h2>
<ol class="references">
{% for pub in site.data.publications %}{% if pub.selected %}{% include paper/reference.html pub=pub %}{% endif %}{% endfor %}
</ol>
<p class="references-note">All papers are listed on the <a href="{{ '/papers/' | relative_url }}">publications page</a>.</p>
</section>
