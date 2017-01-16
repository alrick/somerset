// 
// Pin

class Defense extends Pin {
  constructor(name, description, latlng, ratio, style, owner) {
    super(name, description, latlng, ratio, style);
    this.owner = owner;
  }
}

// 
// Defense

class TourBois extends Defense {
  constructor(name, description, latlng, ratio, style, owner) {
    super(name, description, latlng, ratio, style, owner);
    this.width = 36;
    this.height = 57;
    this.icon = 'icons/tourBois.png';
    this.widthSketchy = 30;
    this.heightSketchy = 89;
    this.iconSketchy = 'icons/sketchy/tourBois.png';
  }

  _getType() {
    return 'Tour en Bois';
  }
}

class TourPierre extends Defense {
  constructor(name, description, latlng, ratio, style, owner) {
    super(name, description, latlng, ratio, style, owner);
    this.width = 30;
    this.height = 57;
    this.icon = 'icons/tourPierre.png';
    this.widthSketchy = 30;
    this.heightSketchy = 90;
    this.iconSketchy = 'icons/sketchy/tourPierre.png';
  }

  _getType() {
    return 'Tour en Pierre';
  }
}