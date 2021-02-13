---
layout: default
title: Gerald Pape - Personal Site
description: The personal web page of Gerald Pape.
---

<img src="images/gerald_neu.jpg" alt="Image of Gerald Pape" id="img_gerald" />

<p class="navbox my-name">Gerald Pape</p>

<p class="navbox">
  <a class="navlink" href="#projects">Projects</a>
  <a class="navlink" href="#work">Work</a>
  <a class="navlink" href="#education">Education</a>
  <a class="navlink" href="{{ site.url }}/notes/">Notes</a>
</p>

<p class="introduction">Hi, my name is Gerald and I am a software developer from Münster. On the internet, I usually go by <em>ubergesundheit</em>. For fun and recreation, I like to try out new programming languages and technologies, tinker with programmable gadgets and embedded systems, cook and eat tasty recipies and read or watch science-fiction. In <a href="http://codeformuenster.org/" target="_blank" rel="noopener">Münsters Code for Germany</a> division I voluntarily create civic tech with open data. I'm really interested in technologies and topics like Linux, containers, container orchestration with Kubernetes, decentralization and self-hosting. My secret weakness is owning and trying out mechanical keyboards.
<br />You can find me on <a href="https://github.com/ubergesundheit" target="_blank" rel="noopener" class="icon-github">GitHub</a>, <a href="https://twitter.com/ubergesundheit" target="_blank" rel="noopener" class="icon-twitter">Twitter</a> and <a href="https://keybase.io/geraldpape" target="_blank" rel="noopener" class="icon-key">Keybase</a>. You can also write me an <a data-href="oi.epapdlareg@liam:otliam" class="obfusmail icon-envelope" rel="nofollow">email</a>.</p>

## Projects

{% include projects.html %}

### Other notable projects

- [Coworking Spaces Münster]({{ site.url }}/muenster-coworking-spaces/) - Collection of coworking spaces in Münster on a map and as CSV download
- <a href="https://github.com/ubergesundheit/Leaflet.EdgeMarker" target="_blank" rel="noopener">Leaflet.EdgeMarker</a> - A <a href="https://leafletjs.com/" target="_blank" rel="noopener">Leaflet</a> plugin to indicate GeoFeatures outside of the map view. <span class="technology-list">[JavaScript]</span>
- <a href="https://github.com/lunemec/nanny" target="_blank" rel="noopener">Nanny</a> - Monitoring of services based on periodic notifications to a HTTP endpoint. Contributed Slack notifier and other API improvements. <span class="technology-list">[Go]</span>
- <a href="https://github.com/containrrr/watchtower" target="_blank" rel="noopener">Watchtower</a> - Periodically pull container images and restart if required. Contributed Slack notifier. <span class="technology-list">[Go]</span>
- <a href="https://github.com/sensebox/senseboxpi" target="_blank" rel="noopener">senseBoxPi</a> - Read sensor values and transfer to openSenseMap using linux kernel builtins on the Raspberry Pi. <span class="technology-list">[Go, Linux, Raspberry Pi]</span>
- <a href="https://github.com/ubergesundheit/dialogmap" target="_blank" rel="noopener">DialogMap</a> - Spatially enhanced dialogues. Software developed for my masters thesis. <span class="technology-list">[Ruby on Rails, Angular 1.2, Docker]</span>
- <a href="https://github.com/codeformuenster/trinkwasser" target="_blank" rel="noopener">Trinkwasser in Münster</a> - Tap water contents visualization. Redeloyment from Code for Heilbronn. <span class="technology-list">[JavaScript]</span>
- <a href="https://github.com/ubergesundheit/letter-drag" target="_blank" rel="noopener">Letter Drag</a> - Soure code to an anagram game for Android phones. <span class="technology-list">[Java, Android]</span>
- <a href="https://github.com/ubergesundheit/geojsontools" target="_blank" rel="noopener">geojsontools</a> - Utility to convert GeoJSON points to a GeoJSON line. <span class="technology-list">[JavaScript]</span>

## Work
<dl>
  <dt>October 2020 &ndash; Now</dt>
  <dd>App Engineer at <a href="https://www.giantswarm.io/" target="_blank" rel="noopener">Giant Swarm</a>.
  <p class="technology-list">Technologies: Helm, Kustomize, Kubernetes, Containers</p>
  </dd>

  <dt>December 2019 &ndash; September 2020</dt>
  <dd>Front End Engineer at <a href="https://www.giantswarm.io/" target="_blank" rel="noopener">Giant Swarm</a>.
  <p class="technology-list">Technologies: React, Kubernetes, Containers</p>
  </dd>

  <dt>May 2018 &ndash; November 2019</dt>
  <dd>Full Stack software engineer at <a href="https://www.foodtracks.de/" target="_blank" rel="noopener">FoodTracks</a>. Development and maintenance of customer facing software for order optimization &amp; business data analysis. Maintenance and deployment of infrastructure and CI/CD.
  <p class="technology-list">Technologies: React, Python, Docker, Node.js, Ruby on Rails, Go, Ansible, Terraform, GitLab</p>
  </dd>

  <dt>June 2016 &ndash; April 2018</dt>
  <dd>Full stack developer in the <a href="https://sensebox.de/" target="_blank" rel="noopener">senseBox</a> project at <a href="http://www.uni-muenster.de/Geoinformatics/en/" target="_blank" rel="noopener">Institute for Geoinformatics</a>: Development and maintenance of <a href="https://opensensemap.org/" target="_blank" rel="noopener">openSenseMap</a>, an open source citizen science open data platform. <p class="technology-list">Technologies: Node.js, MongoDB, Docker, AWS, Ansible, Terraform, Arduino</p>
  </dd>

  <dt>April 2014 &ndash; May 2016</dt>
  <dd>Software Engineer at <a href="https://www.conterra.de/" target="_blank" rel="noopener">con terra GmbH</a>: Development of a winter service management platform frontend and a data portal frontend for environmental data. <p class="technology-list">Technologies: con terra map.apps, ArcGIS API for JavaScript, ArcGIS Server</p>
  </dd>

  <dt>October 2013 &ndash; Februray 2014</dt>
  <dd>Intern at <a href="https://www.zweitag.de/en/" target="_blank" rel="noopener">Zweitag GmbH</a>: Development of a backend for a document orgaization software. <p class="technology-list">Technologies: Ruby on Rails, Elasticsearch</p>
  </dd>

  <dt>June 2011 &ndash; August 2013</dt>
  <dd>Student worker at <a href="http://www.uni-muenster.de/Geoinformatics/en/" target="_blank" rel="noopener">Institute for Geoinformatics</a>: Support, administration and maintenance for the institutes IT. Development of internal management tools. <p class="technology-list">Technologies: PHP, MySQL</p>
  </dd>
</dl>

## Education
<dl>
  <dt>Master of Science Geoinformatics</dt>
  <dd>Completed at <a href="http://www.uni-muenster.de/Geoinformatics/en/" target="_blank" rel="noopener">Institute for Geoinformatics</a>. Thesis: <em>Supporting Public Deliberation Through Spatially Enhanced Dialogs</em><p class="technology-list">Technologies: Ruby on Rails, AngularJS, Docker</p> <a href="https://github.com/ubergesundheit/dialogmap" target="_blank" rel="noopener">Code</a>
  </dd>

  <dt>Bachelor of Science Geoinformatics</dt>
  <dd>Completed at <a href="http://www.uni-muenster.de/Geoinformatics/en/" target="_blank" rel="noopener">Institute for Geoinformatics</a>. Thesis: <em>Arm gesture interaction with virtual globes: Implementation and evaluation</em><p class="technology-list">Technologies: Java, Kinect, NASA World Wind</p> <a href="https://github.com/ubergesundheit/triangle-of-sustainability" target="_blank" rel="noopener">Code</a>
  </dd>
</dl>

### My other online profiles

<a href="https://www.xing.com/profile/Gerald_Pape3" target="_blank" rel="noopener">Xing</a>
<a href="https://www.linkedin.com/in/gerald-pape-93b003103/" target="_blank" rel="noopener">LinkedIn</a>
