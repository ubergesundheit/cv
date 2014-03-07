#= require modernizr/modernizr
#= require leaflet/dist/leaflet-src
#= require_self

document.addEventListener "DOMContentLoaded", ->
  links = document.getElementsByClassName('obfusmail')
  for link in links
    email = link.innerHTML
    link.innerHTML = '<a href="mailto:'+email.split('').reverse().join('')+'" rel="nofollow">'+email+'</a>'

  map = L.map("map",{"scrollWheelZoom": false}).setView([ 51.96, 7.62 ], 13)

  # add an OpenStreetMap tile layer
  L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png",
    attribution: "&copy; <a href=\"http://osm.org/copyright\">OpenStreetMap</a> contributors"
  ).addTo map
