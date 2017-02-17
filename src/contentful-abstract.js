import * as figaro from './figaro'
import * as entities from './entities'
import contentful from 'contentful'

class ContentfulAbstract {
  constructor () {
    this.fiefs = []
    this.buildings = []

    this.client = contentful.createClient({
      space: figaro.contentful.space,
      accessToken: figaro.contentful.accessToken
    })

    this.client.getEntries()
    .then(function (entries) {
      entries.items.forEach(function (entry) {
        let contentType = entry.sys.contentType.sys.id
        if (contentType === 'fief') {
          this.fiefs.push(_buildFief(entry))
        } else if (contentType === 'building') {
          this.buildings.push(_buildBuilding(entry))
        }
      })
    })
  }

  getBackground () {
    this.client.getAsset(figaro.contentful.mapId)
    .then(function (asset) {
      return 'https:' + asset.fields.file.url
    })
  }

  getBuildings () {
    return this.buildings
  }

  getFiefs () {
    return this.fiefs
  }
}

function _buildBuilding (entry, ratio) {
  let data = entry.fields
  let buildingType = data.buildingType.fields

  // name, description, type, lat, lng, owner, width, height, iconUrl
  return new entities.Building(data.name, data.description, buildingType.name, data.lat, data.lng,
    _buildOwner(data.owner), buildingType.iconWidth, buildingType.iconHeight, _buildIconUrl())
}

function _buildFief (entry, ratio) {
  let data = entry.fields
  let fiefType = data.fiefType.fields
  let buildingType = fiefType.buildingType.fields

  // name, description, type, lat, lng, owner, width, height, iconUrl, soldats, garnison, chevaliers, vassal
  return new entities.Fief(data.name, data.description, fiefType.name, data.lat, data.lng,
    _buildOwner(data.owner), buildingType.iconWidth, buildingType.iconHeight, _buildIconUrl())
}

function _buildOwner (owner) {
  return owner !== undefined ? new entities.Owner(owner.fields.name, 'https:' + owner.fields.blason.fields.file.url) : undefined
}

function _buildIconUrl (buildingType) {
  return 'https:' + buildingType.icon.fields.file.url
}

export { ContentfulAbstract as abstract }
