#= require modernizr/modernizr
#= require leaflet/dist/leaflet-src
#= require_self

document.addEventListener "DOMContentLoaded", ->
  links = document.getElementsByClassName('obfusmail')
  for link in links
    email = link.innerHTML
    link.innerHTML = '<a href="mailto:'+email.split('').reverse().join('')+'" rel="nofollow">'+email+'</a>'

  map = L.map("map", {
    "center": [51.96,7.62],
    "zoom": 14,
    "minZoom": 14,
    "maxZoom": 14,
    "maxBounds":[[51.8432,7.4336],[52.1021,7.8168]],
    "scrollWheelZoom": false,
    "doubleClickZoom": false,
    "boxZoom": false,
    "touchZoom": false,
    "zoomControl": false,
    "attributionControl": false
    })


  # add an OpenStreetMap tile layer
  L.tileLayer("https://{s}.tiles.mapbox.com/v3/ubergesundheit.hf6ko45d/{z}/{x}/{y}.png",
    attribution: ""
  ).addTo map
