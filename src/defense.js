class Defense extends Pin {
  constructor (name, description, latlng, ratio, owner) {
    super(name, description, latlng, ratio)
    this.owner = owner
  }
}

class TourBois extends Defense {
  constructor (name, description, latlng, ratio, owner) {
    super(name, description, latlng, ratio, owner)
    this.width = 30
    this.height = 89
    this.icon = 'icons/tourBois.png'
  }

  _getType () {
    return 'Tour en Bois'
  }
}

class TourPierre extends Defense {
  constructor (name, description, latlng, ratio, owner) {
    super(name, description, latlng, ratio, owner)
    this.width = 30
    this.height = 90
    this.icon = 'icons/tourPierre.png'
  }

  _getType () {
    return 'Tour en Pierre'
  }
}
