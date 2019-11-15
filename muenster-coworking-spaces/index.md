---
layout: default
---

<style>
body {
  margin-bottom: 0;
}

#map {
  margin-top: 1rem;
  height: 60vh;
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

Stand November 2019, Download: [als csv](muenster-coworking-spaces.csv), [als geojson](coworking-muenster-geo.json) Lizenz: [cc0](https://creativecommons.org/publicdomain/zero/1.0/legalcode)

<div id="map"></div>

<script>
"use strict";

function onEachFeature(feature, layer) {
  var popupContent = '<h5 class="popup-headline">'
    + feature.properties.name + "</h5>"
    + '<p class="popup-address">' + feature.properties.address + ", " + feature.properties.plz + " Münster</p>"
    + '<a href="' + feature.properties.url + '" target="_blank" rel="noopener">' + feature.properties.url + "</a>";

  if (feature.properties && feature.properties.popupContent) {
    popupContent += feature.properties.popupContent;
  }

  layer.bindPopup(popupContent);
}

function loadMap() {
  var map = L.map("map").setView([51.96, 7.61], 11);

  L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoidWJlcmdlc3VuZGhlaXQiLCJhIjoiY2szMGV0eWltMGh4ZzNicWowYzdzenRqYiJ9.Q45K2MzwSKBq9n7L8Q_9rw", {
    maxZoom: 16,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
      '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: "mapbox.light"
  }).addTo(map);

  fetch("coworking-muenster-geo.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      var spaces = L.geoJSON(json, {
        onEachFeature: onEachFeature,
        pointToLayer: function (feature, latlng) {
          return L.circleMarker(latlng, {
            radius: 6,
            fillColor: "#f1a92b",
            color: "#5d5d5d",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
          });
        }
      }).addTo(map);

      map.fitBounds(spaces.getBounds());
    });
}

window.addEventListener("DOMContentLoaded", loadMap);
</script>
