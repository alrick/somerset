// 
// Pin

class Fief extends Pin {
    constructor(name, description, latlng, pop, owner) {
        super(name, description, latlng);
        this.pop = pop;
        this.owner = owner;
        this.isVassal = isVassal;
    }

    _getHtml() {
        let icon = this.isVassal ? this.icon.replace(/(\.[\w\d_-]+)$/i, '_v$1') : this.icon;
        return '<img src="' + this.icon + '" width="' + this.width + '" height="' + this.height + '"><img src="blasons/' + owner + '.png" class="blason">';
    }
}

// 
// Fief

class VillageFief extends Fief {
    constructor(name, description, latlng, pop, owner, isVassal) {
        super(name, description, latlng, pop, owner, isVassal);
        this.icon = 'icons/village.png';
        this.width = 40;
        this.height = 49;
        this.chevaliers = 0;
    }
}

class BourgFief extends Fief {
    constructor(name, description, latlng, pop, owner, isVassal) {
        super(name, description, latlng, pop, owner, isVassal);
        this.icon = 'icons/bourg.png';
        this.width = 65;
        this.height = 54;
    }
}

class VilleFief extends Fief {
    constructor(name, description, latlng, pop, owner, isVassal) {
        super(name, description, latlng, pop, owner, isVassal);
        this.icon = 'icons/ville.png';
        this.width = 70;
        this.height = 71;
    }
}

// 
// VillageFief

class Hameau extends VillageFief {
    constructor(name, description, latlng, pop, owner, isVassal) {
        super(name, description, latlng, pop, owner, isVassal);
        this.soldats = 0;
        this.garnison = 2;
    }
}

class PetitVillage extends VillageFief {
    constructor(name, description, latlng, pop, owner, isVassal) {
        super(name, description, latlng, pop, owner, isVassal);
        this.soldats = 2;
        this.garnison = 5;
    }
}

class Village extends VillageFief {
    constructor(name, description, latlng, pop, owner, isVassal) {
        super(name, description, latlng, pop, owner, isVassal);
        this.soldats = 3;
        this.garnison = 5;
    }
}

class PetiteBourgade extends VillageFief {
    constructor(name, description, latlng, pop, owner, isVassal) {
        super(name, description, latlng, pop, owner, isVassal);
        this.soldats = 5;
        this.garnison = 10;
    }
}

class Bourgade extends VillageFief {
    constructor(name, description, latlng, pop, owner, isVassal) {
        super(name, description, latlng, pop, owner, isVassal);
        this.soldats = 5;
        this.garnison = 10;
        this.chevaliers = 1;
    }
}

// 
// BourgFief

class PetitBourg extends BourgFief {
    constructor(name, description, latlng, pop, owner, isVassal) {
        super(name, description, latlng, pop, owner, isVassal);
        this.soldats = 15;
        this.garnison = 20;
        this.chevaliers = 2;
    }
}

class Bourg extends BourgFief {
    constructor(name, description, latlng, pop, owner, isVassal) {
        super(name, description, latlng, pop, owner, isVassal);
        this.soldats = 25;
        this.garnison = 40;
        this.chevaliers = 4;
    }
}

class GrandBourg extends BourgFief {
    constructor(name, description, latlng, pop, owner, isVassal) {
        super(name, description, latlng, pop, owner, isVassal);
        this.soldats = 35;
        this.garnison = 80;
        this.chevaliers = 6;
    }
}

// 
// VilleFief

class Ville extends VilleFief {
    constructor(name, description, latlng, pop, owner, isVassal) {
        super(name, description, latlng, pop, owner, isVassal);
        this.soldats = 50;
        this.garnison = 120;
        this.chevaliers = 9;
    }
}

class GrandeVille extends VilleFief {
    constructor(name, description, latlng, pop, owner, isVassal) {
        super(name, description, latlng, pop, owner, isVassal);
        this.soldats = 65;
        this.garnison = 160;
        this.chevaliers = 12;
    }
}