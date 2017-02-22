import { contentful as figaro } from './figaro'
import * as entities from './entities'
import contentful from 'contentful'

export default class Abstract {
  constructor () {
    this.client = contentful.createClient({
      space: figaro.space,
      accessToken: figaro.accessToken
    })
    this.entities = []
    this.mapAssetId = '5IedQC7r2geCO2UOAoug2A'
  }

  init () {
    let client = this.client
    let entities = this.entities
    return new Promise(function (resolve, reject) {
      client.getEntries({ include: 2, limit: 1000 }).then(function (entries) {
        entries.items.forEach(function (entry) {
          let contentType = entry.sys.contentType.sys.id
          if (contentType === 'fief') {
            entities.push(_buildFief(entry))
          } else if (contentType === 'building') {
            entities.push(_buildBuilding(entry))
          }
        })
        resolve()
      }).catch(function (error) {
        console.log(error)
        reject()
      })
    })
  }

  getAsset (assetId) {
    let client = this.client
    return new Promise(function (resolve, reject) {
      client.getAsset(assetId).then(function (asset) {
        let url = 'https:' + asset.fields.file.url
        resolve(url)
      }).catch(function (error) {
        console.log(error)
        reject()
      })
    })
  }
}

function _buildBuilding (entry, ratio) {
  let data = entry.fields
  let buildingType = data.buildingType.fields

  // name, description, type, lat, lng, owner, width, height, iconUrl
  return new entities.Building(data.name, data.description, buildingType.name, data.lat, data.lng,
    _buildOwner(data.owner), buildingType.iconWidth, buildingType.iconHeight, _buildIconUrl(buildingType))
}

function _buildFief (entry, ratio) {
  let data = entry.fields
  let fiefType = data.fiefType.fields
  let buildingType = fiefType.buildingType.fields

  // name, description, type, lat, lng, owner, width, height, iconUrl, soldats, garnison, chevaliers, vassal
  return new entities.Fief(data.name, data.description, fiefType.name, data.lat, data.lng,
    _buildOwner(data.owner), buildingType.iconWidth, buildingType.iconHeight, _buildIconUrl(buildingType),
    fiefType.soldats, fiefType.garnison, fiefType.chevaliers, data.vassal)
}

function _buildOwner (owner) {
  return owner !== undefined ? new entities.Owner(owner.fields.name, 'https:' + owner.fields.blason.fields.file.url) : undefined
}

function _buildIconUrl (buildingType) {
  return 'https:' + buildingType.icon.fields.file.url
}
