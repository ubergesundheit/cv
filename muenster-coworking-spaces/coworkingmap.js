"use strict";

function loadSpaces () {
  fetch("coworking-muenster-geo.json")
    .then(function (response) {
      return response.json();
    })
    .then(initMap);
}

function onEachFeature(feature, layer) {
  var popupContent = '<h5 class="popup-headline">'
    + feature.properties.name + "</h5>"
    + '<p class="popup-address">' + feature.properties.address + ", " + feature.properties.plz + " Münster</p>"
    + '<a href="' + feature.properties.url + '" target="_blank" rel="noopener">' + feature.properties.url + "</a>";

  var tooltipContent = feature.properties.name;

  layer.bindPopup(popupContent);
  layer.bindTooltip(tooltipContent);
}

function initMap(spaces) {
  var map = L.map("map").setView([51.9601, 7.5939], 12);
  window.lmap = map;

  L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}.png", {
    maxZoom: 16,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
      '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: "mapbox.light"
  }).addTo(map);

  var spacesLayer = L.geoJSON(spaces, {
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

  map.fitBounds(spacesLayer.getBounds(), { padding: [ 20, 20 ] });
}

window.addEventListener("DOMContentLoaded", loadSpaces);
