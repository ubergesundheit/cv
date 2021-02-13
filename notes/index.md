---
layout: default
title: Gerald Pape - Personal Notes
description: Some notes.
---

[Back to main page]({{ site.url }})

## This page contains a random collection of stuff I don't want to forget

Updated rarely ;)

### Notes

{% for note in site.notes %}
- [{{ note.title }} ({{ note.date | date: "%Y-%m-%d %H:%M" }})]({{ site.url }}{{ note.url }})
  {{ note.content | markdownify | truncatewords: 20 }}
{% endfor %}
