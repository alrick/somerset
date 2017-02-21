import Abstract from './modules/contentful-abstract'
import L from 'leaflet'
import $ from 'jquery'

// setup map & layers
$('#map').height(window.innerHeight - 20)
let map = L.map('map', {
  minZoom: 6,
  maxZoom: 7
}).setView([18.15629, 34.67285], 6)
let zoom6 = L.layerGroup().addTo(map)
let zoom7 = L.layerGroup()

// instantiate data
const abstract = new Abstract()
abstract.getData(setupData)
abstract.getAsset(abstract.mapAssetId, setupBackground)

function setupData (buildings, fiefs) {
  for (let building of buildings) {
    zoom7.addLayer(building.buildMarker(1))
    zoom6.addLayer(building.buildMarker(0.65))
  }
  for (let fief of fiefs) {
    zoom7.addLayer(fief.buildMarker(1))
    zoom6.addLayer(fief.buildMarker(0.65))
  }
}

function setupBackground (background) {
  L.imageOverlay(background, [[0, 0], [42.28, 55.00]]).addTo(map)
}

// map events
map.on('contextmenu', function (ev) {
  window.prompt('Copy to clipboard: Ctrl+C, Enter', ev.latlng.lat.toFixed(3) + ',' + ev.latlng.lng.toFixed(3))
})
map.on('zoomstart', function () {
  map.removeLayer(zoom6)
  map.removeLayer(zoom7)
})
map.on('zoomend', function () {
  map.addLayer(map.getZoom() === 6 ? zoom6 : zoom7)
})
