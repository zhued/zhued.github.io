---
layout: default
permalink: /
title: "This is Edward Zhu"
---

<div class="tiles">
{% for post in site.posts %}
	{% include post-grid.html %}
{% endfor %}
</div><!-- /.tiles -->