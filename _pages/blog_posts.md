---
title: "Blog"
header:
  title: ""
permalink: /blog/
author_profile: false
---

<style>
body {
  font-family: Georgia, serif;
  font-size: 0.83em;
  background-color: #FFFAF0;
  color: #333333;
  line-height: 1.6;
  margin: 0;
  padding: 0;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
}

.page-title {
  font-family: Georgia, serif;
  font-size: 2em;
  color: #191970;
  margin-bottom: 1em;
  padding-bottom: 0.5em;
  border-bottom: 2px solid #191970;
}

.blog-post {
  margin-bottom: 2em;
  padding: 1.5em;
  border-left: 2px solid #191970;
  background-color: rgba(255, 255, 255, 0.5);
  transition: transform 0.2s ease;
}

.blog-post:hover {
  transform: translateX(5px);
}

.post-title {
  font-family: Georgia, serif;
  font-size: 1.2em;
  color: #191970;
  margin: 0 0 0.5em 0;
}

.post-title a {
  color: #191970;
  text-decoration: none;
}

.post-title a:hover {
  text-decoration: underline;
}

.post-date {
  color: #666;
  font-size: 0.85em;
  font-style: italic;
  margin-bottom: 1em;
}

.post-excerpt {
  font-size: 0.9em;
  margin: 1em 0;
  line-height: 1.6;
  color: #444;
}

.read-more {
  display: inline-block;
  color: #191970;
  text-decoration: none;
  font-style: italic;
  font-size: 0.9em;
  margin-top: 0.5em;
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s ease;
}

.read-more:hover {
  border-bottom-color: #191970;
}

.post-tags {
  margin-top: 0.5em;
  font-size: 0.8em;
}

.tag {
  display: inline-block;
  background: rgba(25, 25, 112, 0.1);
  padding: 2px 8px;
  margin-right: 5px;
  border-radius: 3px;
  color: #191970;
}
</style>

<div class="container">
  <h1 class="page-title">Blog Posts</h1>
  
  {% for post in site.posts %}
    <div class="blog-post">
      <h2 class="post-title">
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      </h2>
      <div class="post-date">{{ post.date | date: "%B %d, %Y" }}</div>
      <div class="post-excerpt">
        {% if post.excerpt %}
          {{ post.excerpt | strip_html | truncatewords: 50 }}
        {% endif %}
      </div>
      {% if post.tags.size > 0 %}
        <div class="post-tags">
          {% for tag in post.tags %}
            <span class="tag">{{ tag }}</span>
          {% endfor %}
        </div>
      {% endif %}
      <a href="{{ post.url | relative_url }}" class="read-more">Read more →</a>
    </div>
  {% endfor %}
</div>
