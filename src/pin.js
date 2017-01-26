class Pin {
  constructor(name, description, latlng, ratio) {
    this.name = name;
    this.description = description;
    this.latlng = latlng;
    this.ratio = ratio;
    this.width = 55;
    this.height = 55;
    this.icon = 'icons/ghost.png';
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

  _getType() {
    return ''
  }

  _buildIcon() {
    let width = this.width;
    let height = this.height;
    return L.divIcon({
      html: this._getHtml(this.icon, width, height),
      iconSize: [width * this.ratio, height * this.ratio],
      iconAnchor: [(width * this.ratio) / 2, height * this.ratio],
      popupAnchor: [0, -(height * this.ratio)],
      className: 'icon'
    });
  }

  _getHtml(icon, width, height) {
    let i = '<img src="' + icon + '" width="' + width * this.ratio + '" height="' + height * this.ratio + '">';
    let blason = this._hasOwner() ? '<img src="blasons/' + this.owner.toLowerCase() + '.png" width="' + 30 * this.ratio + '" style="position:absolute;top:2px;right:' + -21 * this.ratio + 'px;">' : '';
    let vassal = this._isVassal() ? '<img src="blasons/vassal.png" width="' + 19 * this.ratio + '" style="position:absolute;top:6px;right:' + -40 * this.ratio + 'px;">' : '';
    return i + blason + vassal;
  }

  _hasOwner() {
    return this.hasOwnProperty('owner') && this.owner != undefined && this.owner != '';
  }

  _isVassal() {
    return this.hasOwnProperty('isVassal') && this.isVassal == true;
  }
}

// 
// Pin

class Chateau extends Pin {
  constructor(name, description, latlng, ratio) {
    super(name, description, latlng, ratio);
    this.width = 80;
    this.height = 98;
    this.icon = 'icons/chateau.png';
  }

  _getType() {
    return 'Château';
  }
}

class Magic extends Pin {
  constructor(name, description, latlng, ratio) {
    super(name, description, latlng, ratio);
    this.width = 47;
    this.height = 64;
    this.icon = 'icons/magic.png';
  }

  _getType() {
    return 'Endroit magique';
  }
}

class Abbaye extends Pin {
  constructor(name, description, latlng, ratio) {
    super(name, description, latlng, ratio);
    this.width = 73;
    this.height = 70;
    this.icon = 'icons/abbaye.png';
  }

  _getType() {
    return 'Abbaye';
  }
}