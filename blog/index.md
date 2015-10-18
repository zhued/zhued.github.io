---
layout: page
title: Blog
subtitle: What I've learned and experienced
---

{% capture site_tags %}{% for tag in site.tags %}{{ tag | first }}{% unless forloop.last %},{% endunless %}{% endfor %}{% endcapture %}
{% assign tags_list = site_tags | split:',' | sort %}

<div class="posts-list">
  {% for post in site.categories.blog %}
  <article class="post-preview">
    <a href="{{ post.url | prepend: site.baseurl }}">
    <h2 class="post-title">{{ post.title }}</h2>
  
    {% if post.excerpt %}
    <h3 class="post-subtitle">
      {{ post.excerpt }}
    </h3>
    {% endif %}  
    </a>

    <p class="post-meta">
      Posted on {{ post.date | date: "%B %-d, %Y" }}
    </p>
    
   </article>
  {% endfor %}
</div>

<!-- <h5>tags:</h5> 
<ul class="tag-box inline">
  {% for item in (0..site.tags.size) %}{% unless forloop.last %}
    {% capture this_word %}{{ tags_list[item] | strip_newlines }}{% endcapture %}
    <li><a href="/tags/#{{ this_word }}">{{ this_word }} <span>{{ site.tags[this_word].size }}</span></a></li>
  {% endunless %}{% endfor %}
</ul> -->

{% if paginator.total_pages > 1 %}
<ul class="pager main-pager">
  {% if paginator.previous_page %}
  <li class="previous">
    <a href="{{ paginator.previous_page_path | prepend: site.baseurl | replace: '//', '/' }}">&larr; Newer Posts</a>
  </li>
  {% endif %}
  {% if paginator.next_page %}
  <li class="next">
    <a href="{{ paginator.next_page_path | prepend: site.baseurl | replace: '//', '/' }}">Older Posts &rarr;</a>
  </li>
  {% endif %}
</ul>
{% endif %}