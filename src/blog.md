---
layout: page.njk
title: Blog landing page
---

# {{ title }}

<ul>
{%- for post in collections.post -%}
  <li{% if page.url == post.url %} aria-current="page"{% endif %}>
   <a href="{{ post.url }}"> {{ post.data.title }} </a>
  </li>
{%- endfor -%}
</ul>