let mapAssetId = '5IedQC7r2geCO2UOAoug2A'

let CC = contentful.createClient({
  space: cfSpace,
  accessToken: cfAccessToken
})

class AbstractPin {
  constructor (entry) {
    let data = entry.fields
    let buildingType = this._getBuildingType(data)

    this.name = data.name
    this.description = data.description
    this.lat = data.lat
    this.lng = data.lng
    this.type = buildingType.name
    this.width = buildingType.iconWidth
    this.height = buildingType.iconHeight
    this.iconUrl = 'https:' + buildingType.icon.fields.file.url
    this.owner = data.owner !== undefined ? new Owner(data.owner.fields.name, 'https:' + data.owner.fields.blason.fields.file.url) : undefined
  }

  _getBuildingType (data) {
    return data.buildingType.fields
  }
}

class AbstractFief extends AbstractPin {
  constructor (entry) {
    super(entry)
    let data = entry.fields
    let fiefType = data.fiefType.fields

    this.type = fiefType.name
    this.soldats = fiefType.soldats
    this.garnison = fiefType.garnison
    this.chevaliers = fiefType.chevaliers
    this.vassal = data.vassal
  }

  _getBuildingType (data) {
    return data.fiefType.fields.buildingType.fields
  }
}