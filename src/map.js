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
CC.getAsset(mapAssetId)
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
    let contentType = entry.sys.contentType.sys.id
    if (contentType === 'fief') {
      let abstractFief = new AbstractFief(entry)
      let fief7 = new Fief(abstractFief.name, abstractFief.description, abstractFief.type, abstractFief.lat, abstractFief.lng, abstractFief.owner, abstractFief.width, abstractFief.height, ratio7, abstractFief.iconUrl, abstractFief.soldats, abstractFief.garnison, abstractFief.chevaliers, abstractFief.vassal)
      let fief6 = new Fief(abstractFief.name, abstractFief.description, abstractFief.type, abstractFief.lat, abstractFief.lng, abstractFief.owner, abstractFief.width, abstractFief.height, ratio6, abstractFief.iconUrl, abstractFief.soldats, abstractFief.garnison, abstractFief.chevaliers, abstractFief.vassal)
      zoom7.addLayer(fief7.buildMarker())
      zoom6.addLayer(fief6.buildMarker())
    } else if (contentType === 'building') {
      let abstractPin = new AbstractPin(entry)
      let pin7 = new Pin(abstractPin.name, abstractPin.description, abstractPin.type, abstractPin.lat, abstractPin.lng, abstractPin.owner, abstractPin.width, abstractPin.height, ratio7, abstractPin.iconUrl)
      let pin6 = new Pin(abstractPin.name, abstractPin.description, abstractPin.type, abstractPin.lat, abstractPin.lng, abstractPin.owner, abstractPin.width, abstractPin.height, ratio6, abstractPin.iconUrl)
      zoom7.addLayer(pin7.buildMarker())
      zoom6.addLayer(pin6.buildMarker())
    }
  })
  map.addLayer(zoom6)
})
