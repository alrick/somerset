// vars
let map
let zoom6 = L.layerGroup()
let zoom7 = L.layerGroup()
let ratio7 = 1
let ratio6 = 0.65

// init map
$("#map").height(window.innerHeight - 20)
map = L.map('map', {
  minZoom: 6,
  maxZoom: 7
}).setView([18.15629, 34.67285], 6)

// set background
CC.getAsset('5IedQC7r2geCO2UOAoug2A')
.then(function (asset) {
  L.imageOverlay('https:' + asset.fields.file.url, [[0, 0], [42.28, 55.00]]).addTo(map)
})

// map events
map.on('contextmenu', function (ev) {
  window.prompt('Copy to clipboard: Ctrl+C, Enter', ev.latlng.lat.toFixed(3) + ',' + ev.latlng.lng.toFixed(3))
})
map.on('zoomstart', function () {
  map.removeLayer(zoom6)
  map.removeLayer(zoom7)
})
map.on('zoomend', function () {
  let zoom = map.getZoom()
  map.removeLayer(zoom6)
  map.removeLayer(zoom7)
  map.addLayer(window['zoom' + zoom])
})

CC.getEntries()
.then(function (entries) {
  // log the title for all the entries that have it
  entries.items.forEach(function (entry) {
    if (entry.sys.contentType.sys.id !== 'knight') {
      let data = entry.fields
      let pin7 = buildPin(data, ratio7)
      let pin6 = buildPin(data, ratio6)
      zoom7.addLayer(pin7.getMarker())
      zoom6.addLayer(pin6.getMarker())
    }
  })
  map.addLayer(zoom6)
})
