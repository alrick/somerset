class Pin {
  constructor (name, description, type, lat, lng, owner, width, height, ratio, iconUrl) {
    this.name = name
    this.description = description
    this.type = type
    this.lat = lat
    this.lng = lng
    this.owner = owner
    this.width = width
    this.height = height
    this.ratio = ratio
    this.iconUrl = iconUrl
  }

  buildMarker () {
    let marker = L.marker([this.lat, this.lng], { icon: this._buildIcon() })
    let tooltip = L.tooltip({ direction: 'bottom', className: 'tooltip' })
    marker.bindTooltip(tooltip).setTooltipContent(this.toString())
    return marker
  }

  toString () {
    let name = '<p><span class="name">' + this.name + '</span> - <span class="type">' + this.type + '</span></p>'
    let description = this.description !== undefined ? '<p class="description">' + this.description + '</p>' : ''
    return name + description
  }

  _buildIcon () {
    let i = '<img src="' + this.iconUrl + '" width="' + this.width * this.ratio + '" height="' + this.height * this.ratio + '">'
    let blason = this._hasOwner() ? '<img src="' + this.owner.blason + '" width="' + 30 * this.ratio + '" style="position:absolute;top:2px;right:' + -21 * this.ratio + 'px;">' : ''
    let vassal = this._isVassal() ? '<img src="' + this.vassal + '" width="' + 19 * this.ratio + '" style="position:absolute;top:6px;right:' + -40 * this.ratio + 'px;">' : ''
    return L.divIcon({
      html: i + blason + vassal,
      iconSize: [this.width * this.ratio, this.height * this.ratio],
      iconAnchor: [(this.width * this.ratio) / 2, this.height * this.ratio],
      popupAnchor: [0, -(this.height * this.ratio)],
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

class Fief extends Pin {
  constructor (name, description, type, lat, lng, owner, width, height, ratio, iconUrl, soldats, garnison, chevaliers, vassal) {
    super(name, description, type, lat, lng, owner, width, height, ratio, iconUrl)
    this.soldats = soldats
    this.garnison = garnison
    this.chevaliers = chevaliers
    this.vassal = vassal
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