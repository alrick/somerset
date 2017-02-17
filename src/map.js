import abstract from './contenful-abstract'
import $ from 'jquery'
import L from 'leaflet'

// init map & layers
$('#map').height(window.innerHeight - 20)
let map = L.map('map', {
  minZoom: 6,
  maxZoom: 7
}).setView([18.15629, 34.67285], 6)
let zoom6 = L.layerGroup().addTo(map)
let zoom7 = L.layerGroup()

// get background from the abstract and set it to map
L.imageOverlay(abstract.getBackground(), [[0, 0], [42.28, 55.00]]).addTo(map)

// build all buildings and add them to the two layers
for (let building of abstract.getBuildings()) {
  zoom7.addLayer(building.buildMarker(1))
  zoom6.addLayer(building.buildMarker(0.65))
}

// build all fiefs and add them to the two layers
for (let fief of abstract.getFiefs()) {
  zoom7.addLayer(fief.buildMarker(1))
  zoom6.addLayer(fief.buildMarker(0.65))
}

// map events
map.on('contextmenu', function (ev) {
  window.prompt('Copy to clipboard: Ctrl+C, Enter', ev.latlng.lat.toFixed(3) + ',' + ev.latlng.lng.toFixed(3))
})
map.on('zoomend', function () {
  let zoom = map.getZoom()
  let currentZoom = zoom === 6 ? zoom6 : zoom7
  let newZoom = zoom === 6 ? zoom7 : zoom6
  map.removeLayer(currentZoom)
  map.addLayer(newZoom)
})
