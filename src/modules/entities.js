import L from 'leaflet'

class Building {
  constructor (name, description, type, lat, lng, owner, width, height, iconUrl) {
    this.name = name
    this.description = description
    this.type = type
    this.lat = lat
    this.lng = lng
    this.owner = owner
    this.width = width
    this.height = height
    this.iconUrl = iconUrl
  }

  buildMarker (ratio) {
    let marker = L.marker([this.lat, this.lng], { icon: this._buildIcon(ratio) })
    let tooltip = L.tooltip({ direction: 'bottom', className: 'tooltip' })
    marker.bindTooltip(tooltip).setTooltipContent(this.toString())
    return marker
  }

  toString () {
    let name = '<p><span class="name">' + this.name + '</span> - <span class="type">' + this.type + '</span></p>'
    let description = this.description !== undefined ? '<p class="description">' + this.description + '</p>' : ''
    return name + description
  }

  _buildIcon (ratio) {
    let i = '<img src="' + this.iconUrl + '" width="' + this.width * ratio + '" height="' + this.height * ratio + '">'
    let blason = this._hasOwner() ? '<img src="' + this.owner.blason + '" width="' + 30 * ratio + '" style="position:absolute;top:2px;right:' + -21 * ratio + 'px;">' : ''
    let vassal = this._isVassal() ? '<img src="' + this.vassal + '" width="' + 19 * ratio + '" style="position:absolute;top:6px;right:' + -40 * ratio + 'px;">' : ''
    return L.divIcon({
      html: i + blason + vassal,
      iconSize: [this.width * ratio, this.height * ratio],
      iconAnchor: [(this.width * ratio) / 2, this.height * ratio],
      popupAnchor: [0, -(this.height * ratio)],
      className: 'icon'
    })
  }

  _hasOwner () {
    return this.hasOwnProperty('owner') && this.owner !== undefined && this.owner !== ''
  }

  _isVassal () {
    return this.hasOwnProperty('vassal') && this.vassal !== undefined && this.vassal !== ''
  }
}

class Fief extends Building {
  constructor (name, description, type, lat, lng, owner, width, height, iconUrl, soldats, garnison, chevaliers, vassal) {
    super(name, description, type, lat, lng, owner, width, height, iconUrl)
    this.soldats = soldats
    this.garnison = garnison
    this.chevaliers = chevaliers
    if (vassal) {
      this.vassal = 'img/vassal.png'
    }
  }

  toString () {
    let military = '<table><tr><td><img src="img/soldats.png" width="30"></td><td><img src="img/garnison.png" width="30"></td><td><img src="img/chevaliers.png" width="30"></td></tr><tr><td>' + this.soldats + '</td><td>' + this.garnison + '</td><td>' + this.chevaliers + '</td></tr></table>'
    return super.toString() + military
  }
}

class Owner {
  constructor (name, blason) {
    this.name = name
    this.blason = blason
  }
}

export { Building, Fief, Owner }
