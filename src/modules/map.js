import $ from 'jquery'
import L from 'leaflet'

export default class Map {
  constructor () {
    this.container = $('#map')

    // setup map & layers
    this.container.height(window.innerHeight - 20)
    this.map = L.map('map', {
      minZoom: 6,
      maxZoom: 7
    }).setView([18.15629, 34.67285], 6)
    this.layerZ6 = L.layerGroup().addTo(this.map)
    this.layerZ7 = L.layerGroup()

    // map events
    let self = this // used because this change on event handlers
    this.map.on('contextmenu', function (ev) {
      window.prompt('Copy to clipboard: Ctrl+C, Enter', ev.latlng.lat.toFixed(3) + ',' + ev.latlng.lng.toFixed(3))
    })
    this.map.on('zoomstart', function () {
      self.map.removeLayer(self.layerZ6)
      self.map.removeLayer(self.layerZ7)
    })
    this.map.on('zoomend', function () {
      self.map.addLayer(self.map.getZoom() === 6 ? self.layerZ6 : self.layerZ7)
    })
  }

  setMarker (entity) {
    this.layerZ7.addLayer(entity.buildMarker(1))
    this.layerZ6.addLayer(entity.buildMarker(0.65))
  }

  setBackground (background) {
    L.imageOverlay(background, [[0, 0], [42.28, 55.00]]).addTo(this.map)
  }
}
