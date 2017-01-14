class Pin {
  constructor(name, description, latlng, ratio) {
    this.name = name;
    this.description = description;
    this.latlng = latlng;
    this.width = 55;
    this.height = 55;
    this.ratio = ratio;
    this.icon = 'icons/ghost.png'
  }

  toString() {
    let description = this.description == '' ? '' : '<br>' + this.description;
    return '<span class="title">' + this.name + '</span><br>' + this._getType() + description;
  }

  getMarker() {
    let marker = L.marker(this.latlng, { icon: this._buildIcon() });
    let tooltip = L.tooltip({ direction: 'bottom', className: 'calligraffitti tooltip' });
    marker.bindTooltip(tooltip).setTooltipContent(this.toString());
    return marker;
  }

  _buildIcon() {
    return L.divIcon({
      html: this._getHtml(),
      iconSize: [this.width * this.ratio, this.height * this.ratio],
      iconAnchor: [(this.width * this.ratio) / 2, this.height * this.ratio],
      popupAnchor: [0, -(this.height * this.ratio)],
      className: 'icon'
    });
  }

  _getHtml() {
    let icon = '<img src="' + this.icon + '" width="' + this.width * this.ratio + '" height="' + this.height * this.ratio + '">';
    let blason = this._hasOwner() ? '<img src="blasons/' + this.owner + '.png" width="' + 30 * this.ratio + '" class="blason" style="position:absolute;top:0;right:' + -13 * this.ratio + 'px;">' : '';
    return icon + blason;
  }

  _hasOwner() {
    return this.hasOwnProperty("owner") && this.owner != 'other';
  }
}

// 
// Pin

class Chateau extends Pin {
  constructor(name, description, latlng, ratio) {
    super(name, description, latlng, ratio);
    this.width = 60;
    this.height = 57;
    this.icon = 'icons/chateau.png';
  }

  _getType() {
    return 'Château';
  }
}

class Magic extends Pin {
  constructor(name, description, latlng, ratio) {
    super(name, description, latlng, ratio);
    this.width = 40;
    this.height = 53;
    this.icon = 'icons/compotier.png';
  }

  _getType() {
    return 'Endroit magique';
  }
}

class Abbaye extends Pin {
  constructor(name, description, latlng, ratio) {
    super(name, description, latlng, ratio);
    this.width = 50;
    this.height = 48;
    this.icon = 'icons/abbaye.png';
  }

  _getType() {
    return 'Abbaye';
  }
}