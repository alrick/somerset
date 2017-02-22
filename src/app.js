import Abstract from './modules/contentful-abstract'
import Map from './modules/map'

// instantiate map
const map = new Map()

// instantiate data
const abstract = new Abstract()
abstract.init().then(function (status) {
  for (let entity of abstract.entities) {
    map.setMarker(entity)
  }
})
// setup background
abstract.getAsset(abstract.mapAssetId).then(function (url) {
  map.setBackground(url)
})
