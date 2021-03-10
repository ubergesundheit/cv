---
layout: default
title: Gerald Pape - Personal Notes
description: Some notes.
---

[Back to main page]({{ site.url }}/)

## This page contains a random collection of stuff I don't want to forget

Updated rarely ;)

### Notes

{% for note in site.notes %}
- [{{ note.title }}]({{ site.url }}{{ note.url }}) ({{ note.date | date: "%Y-%m-%d %H:%M" }})
{% endfor %}

[Back to main page]({{ site.url }}/)
