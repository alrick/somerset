// 
// Pin

class Fief extends Pin {
  constructor(name, description, latlng, ratio, pop, owner, isVassal) {
    super(name, description, latlng, ratio);
    this.pop = pop;
    this.owner = owner;
    this.isVassal = isVassal;
  }

  toString() {
    return super.toString() + '<br>' + this.soldats + ' soldats, ' + this.garnison + ' garnison, ' + this.chevaliers + ' chevaliers';
  }

  _getType() {
    return this._getTypeName() + '(' + this.pop + ')';
  }
}

// 
// Fief

class VillageFief extends Fief {
  constructor(name, description, latlng, ratio, pop, owner, isVassal) {
    super(name, description, latlng, ratio, pop, owner, isVassal);
    if (isVassal) {
      this.icon = 'icons/village_v.png';
    } else {
      this.icon = 'icons/village.png';
    }
    this.width = 40;
    this.height = 49;
    this.chevaliers = 0;
  }
}

class BourgFief extends Fief {
  constructor(name, description, latlng, ratio, pop, owner, isVassal) {
    super(name, description, latlng, ratio, pop, owner, isVassal);
    if (isVassal) {
      this.icon = 'icons/bourg_v.png';
    } else {
      this.icon = 'icons/bourg.png';
    }
    this.width = 65;
    this.height = 54;
  }
}

class VilleFief extends Fief {
  constructor(name, description, latlng, ratio, pop, owner, isVassal) {
    super(name, description, latlng, ratio, pop, owner, isVassal);
    if (isVassal) {
      this.icon = 'icons/ville_v.png';
    } else {
      this.icon = 'icons/ville.png';
    }
    this.width = 70;
    this.height = 71;
  }
}

// 
// VillageFief

class Hameau extends VillageFief {
  constructor(name, description, latlng, ratio, pop, owner, isVassal) {
    super(name, description, latlng, ratio, pop, owner, isVassal);
    this.soldats = 0;
    this.garnison = 2;
  }

  _getTypeName() {
    return 'Hameau';
  }
}

class PetitVillage extends VillageFief {
  constructor(name, description, latlng, ratio, pop, owner, isVassal) {
    super(name, description, latlng, ratio, pop, owner, isVassal);
    this.soldats = 2;
    this.garnison = 5;
  }

  _getTypeName() {
    return 'Petit Village';
  }
}

class Village extends VillageFief {
  constructor(name, description, latlng, ratio, pop, owner, isVassal) {
    super(name, description, latlng, ratio, pop, owner, isVassal);
    this.soldats = 3;
    this.garnison = 5;
  }

  _getTypeName() {
    return 'Village';
  }
}

class PetiteBourgade extends VillageFief {
  constructor(name, description, latlng, ratio, pop, owner, isVassal) {
    super(name, description, latlng, ratio, pop, owner, isVassal);
    this.soldats = 5;
    this.garnison = 10;
  }

  _getTypeName() {
    return 'Petite Bourgade';
  }
}

class Bourgade extends VillageFief {
  constructor(name, description, latlng, ratio, pop, owner, isVassal) {
    super(name, description, latlng, ratio, pop, owner, isVassal);
    this.soldats = 5;
    this.garnison = 10;
    this.chevaliers = 1;
  }

  _getTypeName() {
    return 'Bourgade';
  }
}

// 
// BourgFief

class PetitBourg extends BourgFief {
  constructor(name, description, latlng, ratio, pop, owner, isVassal) {
    super(name, description, latlng, ratio, pop, owner, isVassal);
    this.soldats = 15;
    this.garnison = 20;
    this.chevaliers = 2;
  }

  _getTypeName() {
    return 'Petit Bourg';
  }
}

class Bourg extends BourgFief {
  constructor(name, description, latlng, ratio, pop, owner, isVassal) {
    super(name, description, latlng, ratio, pop, owner, isVassal);
    this.soldats = 25;
    this.garnison = 40;
    this.chevaliers = 4;
  }

  _getTypeName() {
    return 'Bourg';
  }
}

class GrandBourg extends BourgFief {
  constructor(name, description, latlng, ratio, pop, owner, isVassal) {
    super(name, description, latlng, ratio, pop, owner, isVassal);
    this.soldats = 35;
    this.garnison = 80;
    this.chevaliers = 6;
  }

  _getTypeName() {
    return 'Grand Bourg';
  }
}

// 
// VilleFief

class Ville extends VilleFief {
  constructor(name, description, latlng, ratio, pop, owner, isVassal) {
    super(name, description, latlng, ratio, pop, owner, isVassal);
    this.soldats = 50;
    this.garnison = 120;
    this.chevaliers = 9;
  }

  _getTypeName() {
    return 'Ville';
  }
}

class GrandeVille extends VilleFief {
  constructor(name, description, latlng, ratio, pop, owner, isVassal) {
    super(name, description, latlng, ratio, pop, owner, isVassal);
    this.soldats = 65;
    this.garnison = 160;
    this.chevaliers = 12;
  }

  _getTypeName() {
    return 'Grande Ville';
  }
}