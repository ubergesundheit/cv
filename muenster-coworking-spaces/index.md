---
layout: default
title: Coworking Spaces in Münster
description: Übersicht der Coworking Spaces in Münster
---

<style>
body {
  margin-bottom: 0;
}

#map {
  margin: 1rem 0;
  height: 60vmin;
}

.popup-headline {
  margin: 0.4rem 0;
  text-transform: unset;
}
.popup-address {
  margin: 0.2rem 0 !important;
}
</style>

<link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
  integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
  crossorigin=""/>
<script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
  integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
  crossorigin=""></script>

## Coworking Spaces in Münster

Stand April 2020, Download: [als csv](coworking-muenster.csv), [als geojson](coworking-muenster-geo.json) Lizenz: [cc0](https://creativecommons.org/publicdomain/zero/1.0/legalcode)

<div id="map"></div>

Gemacht von [Gerald Pape]({{ site.url }}/), alle Angaben ohne Gewähr, für Inhalte der verlinkten Seiten sind die jeweiligen Betreiber verantwortlich.

<script src="coworkingmap.js" defer></script>
