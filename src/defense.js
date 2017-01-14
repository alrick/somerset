// 
// Pin

class Defense extends Pin {
  constructor(name, description, latlng, ratio, owner) {
    super(name, description, latlng, ratio);
    this.owner = owner;
    this.height = 57;
  }
}

// 
// Defense

class TourBois extends Defense {
  constructor(name, description, latlng, ratio, owner) {
    super(name, description, latlng, ratio, owner);
    this.width = 18;
    this.icon = 'icons/tourBois.png';
  }

  _getType() {
    return 'Tour en Bois';
  }
}

class TourPierre extends Defense {
  constructor(name, description, latlng, ratio, owner) {
    super(name, description, latlng, ratio, owner);
    this.width = 36;
    this.icon = 'icons/tourPierre.png';
  }

  _getType() {
    return 'Tour en Pierre';
  }
}