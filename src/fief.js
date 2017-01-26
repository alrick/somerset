class Fief extends Pin {
  constructor (name, description, latlng, ratio, pop, owner, isVassal) {
    super(name, description, latlng, ratio)
    this.pop = pop
    this.owner = owner
    this.isVassal = isVassal
  }

  toString () {
    return super.toString() + '<br>' + this.soldats + ' soldats, ' + this.garnison + ' garnison, ' + this.chevaliers + ' chevaliers'
  }

  _getType () {
    return this._getTypeName() + '(' + this.pop + ')'
  }
}

class VillageFief extends Fief {
  constructor (name, description, latlng, ratio, pop, owner, isVassal) {
    super(name, description, latlng, ratio, pop, owner, isVassal)
    this.icon = 'icons/village.png'
    this.width = 47
    this.height = 55
    this.chevaliers = 0
  }
}

class BourgFief extends Fief {
  constructor (name, description, latlng, ratio, pop, owner, isVassal) {
    super(name, description, latlng, ratio, pop, owner, isVassal)
    this.icon = 'icons/bourg.png'
    this.width = 87
    this.height = 60
  }
}

class VilleFief extends Fief {
  constructor (name, description, latlng, ratio, pop, owner, isVassal) {
    super(name, description, latlng, ratio, pop, owner, isVassal)
    this.icon = 'icons/ville.png'
    this.width = 149
    this.height = 70
  }
}

class Hameau extends VillageFief {
  constructor (name, description, latlng, ratio, pop, owner, isVassal) {
    super(name, description, latlng, ratio, pop, owner, isVassal)
    this.soldats = 0
    this.garnison = 2
  }

  _getTypeName () {
    return 'Hameau'
  }
}

class PetitVillage extends VillageFief {
  constructor (name, description, latlng, ratio, pop, owner, isVassal) {
    super(name, description, latlng, ratio, pop, owner, isVassal)
    this.soldats = 2
    this.garnison = 5
  }

  _getTypeName () {
    return 'Petit Village'
  }
}

class Village extends VillageFief {
  constructor (name, description, latlng, ratio, pop, owner, isVassal) {
    super(name, description, latlng, ratio, pop, owner, isVassal)
    this.soldats = 3
    this.garnison = 5
  }

  _getTypeName () {
    return 'Village'
  }
}

class PetiteBourgade extends VillageFief {
  constructor (name, description, latlng, ratio, pop, owner, isVassal) {
    super(name, description, latlng, ratio, pop, owner, isVassal)
    this.soldats = 5
    this.garnison = 10
  }

  _getTypeName () {
    return 'Petite Bourgade'
  }
}

class Bourgade extends VillageFief {
  constructor (name, description, latlng, ratio, pop, owner, isVassal) {
    super(name, description, latlng, ratio, pop, owner, isVassal)
    this.soldats = 5
    this.garnison = 10
    this.chevaliers = 1
  }

  _getTypeName () {
    return 'Bourgade'
  }
}

class PetitBourg extends BourgFief {
  constructor (name, description, latlng, ratio, pop, owner, isVassal) {
    super(name, description, latlng, ratio, pop, owner, isVassal)
    this.soldats = 15
    this.garnison = 20
    this.chevaliers = 2
  }

  _getTypeName () {
    return 'Petit Bourg'
  }
}

class Bourg extends BourgFief {
  constructor (name, description, latlng, ratio, pop, owner, isVassal) {
    super(name, description, latlng, ratio, pop, owner, isVassal)
    this.soldats = 25
    this.garnison = 40
    this.chevaliers = 4
  }

  _getTypeName () {
    return 'Bourg'
  }
}

class GrandBourg extends BourgFief {
  constructor (name, description, latlng, ratio, pop, owner, isVassal) {
    super(name, description, latlng, ratio, pop, owner, isVassal)
    this.soldats = 35
    this.garnison = 80
    this.chevaliers = 6
  }

  _getTypeName () {
    return 'Grand Bourg'
  }
}

class Ville extends VilleFief {
  constructor (name, description, latlng, ratio, pop, owner, isVassal) {
    super(name, description, latlng, ratio, pop, owner, isVassal)
    this.soldats = 50
    this.garnison = 120
    this.chevaliers = 9
  }

  _getTypeName () {
    return 'Ville'
  }
}

class GrandeVille extends VilleFief {
  constructor (name, description, latlng, ratio, pop, owner, isVassal) {
    super(name, description, latlng, ratio, pop, owner, isVassal)
    this.soldats = 65
    this.garnison = 160
    this.chevaliers = 12
  }

  _getTypeName () {
    return 'Grande Ville'
  }
}
