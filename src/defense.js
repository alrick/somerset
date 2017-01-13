// 
// Pin

class Defense extends Pin {
    constructor(name, description, latlng, owner) {
        super(name, description, latlng);
        this.owner = owner;
        this.height = 57;
    }
}

// 
// Defense

class TourBois extends Defense {
    constructor(name, description, latlng, owner) {
        super(name, description, latlng, owner);
        this.width = 18;
        this.icon = 'icons/tourBois.png';
    }
}

class TourPierre extends Defense {
    constructor(name, description, latlng, owner) {
        super(name, description, latlng, owner);
        this.width = 36;
        this.icon = 'icons/tourPierre.png';
    }
}