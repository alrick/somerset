// vars
let map
let zoom6 = L.layerGroup()
let zoom7 = L.layerGroup()
let ratio7 = 1
let ratio6 = 0.65
let allowedContentType = ['building', 'fief']
let mapAssetId = '5IedQC7r2geCO2UOAoug2A'
let vassalAssetId = '75jLoeJo9UOKW84oYUs6kC'

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

// get assets and draw pins
CC.getAsset(vassalAssetId)
.then(function (asset) {
  drawPins('https:' + asset.fields.file.url)
})

function drawPins(vassalImage) {
  CC.getEntries()
  .then(function (entries) {
    // log the title for all the entries that have it
    entries.items.forEach(function (entry) {
      if (allowedContentType.indexOf(entry.sys.contentType.sys.id) > -1) {
        let data = entry.fields
        let name = data.name
        let description = data.description
        let lat = data.lat
        let lng = data.lng
        let owner
        if (data.owner !== undefined) {
          owner = new Owner(data.owner.fields.name, 'https:' + data.owner.fields.blason.fields.file.url)
        }
        let pin7
        let pin6
        if (entry.sys.contentType.sys.id === 'fief') {
          let type = data.fiefType.fields.name
          let width = data.fiefType.fields.buildingType.fields.iconWidth
          let height = data.fiefType.fields.buildingType.fields.iconHeight
          let iconUrl = 'https:' + data.fiefType.fields.buildingType.fields.icon.fields.file.url
          let soldats = data.fiefType.fields.soldats
          let garnison = data.fiefType.fields.garnison
          let chevaliers = data.fiefType.fields.chevaliers
          let vassal = data.vassal ? vassalImage : ''
          pin7 = new Fief(name, description, type, lat, lng, owner, width, height, ratio7, iconUrl, soldats, garnison, chevaliers, vassal)
          pin6 = new Fief(name, description, type, lat, lng, owner, width, height, ratio6, iconUrl, soldats, garnison, chevaliers, vassal)
        } else {
          let type = data.buildingType.fields.name
          let width = data.buildingType.fields.iconWidth
          let height = data.buildingType.fields.iconHeight
          let iconUrl = 'https:' + data.buildingType.fields.icon.fields.file.url
          pin7 = new Pin(name, description, type, lat, lng, owner, width, height, ratio7, iconUrl)
          pin6 = new Pin(name, description, type, lat, lng, owner, width, height, ratio6, iconUrl)
        }
        zoom7.addLayer(pin7.buildMarker())
        zoom6.addLayer(pin6.buildMarker())
      }
    })
    map.addLayer(zoom6)
  })
}