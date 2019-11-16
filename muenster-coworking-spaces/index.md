---
layout: default
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

<link rel="stylesheet" href="https://unpkg.com/leaflet@1.5.1/dist/leaflet.css"
  integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
  crossorigin=""/>
<script src="https://unpkg.com/leaflet@1.5.1/dist/leaflet.js"
  integrity="sha512-GffPMF3RvMeYyc1LWMHtK8EbPv0iNZ8/oTtHPx9/cc2ILxQ+u905qIwdpULaqDkyBKgOaB57QTMg7ztg8Jm2Og=="
  crossorigin=""></script>

## Coworking Spaces in Münster

Stand November 2019, Download: [als csv](coworking-muenster.csv), [als geojson](coworking-muenster-geo.json) Lizenz: [cc0](https://creativecommons.org/publicdomain/zero/1.0/legalcode)

<div id="map"></div>

Gemacht von [Gerald Pape]({{ site.url }}), alle Angaben ohne Gewähr, für Inhalte der verlinkten Seiten sind die jeweiligen Betreiber verantwortlich.

<script src="coworkingmap.js" defer></script>
