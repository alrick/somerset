class Pin {
  constructor(name, description, latlng, ratio, style) {
    this.name = name;
    this.description = description;
    this.latlng = latlng;
    this.ratio = ratio;
    this.style = style;
    this.width = 55;
    this.height = 55;
    this.icon = 'icons/ghost.png';
    this.widthSketchy = 55;
    this.heightSketchy = 55;
    this.iconSketchy = 'icons/ghost.png';
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
    let style = 'classic';
    let width = this.width;
    let height = this.height;
    let icon = this.icon;
    if (this.style == 'sketchy') {
      width = this.widthSketchy;
      height = this.heightSketchy;
      icon = this.iconSketchy;
    }
    return L.divIcon({
      html: this._getHtml(icon, width, height),
      iconSize: [width * this.ratio, height * this.ratio],
      iconAnchor: [(width * this.ratio) / 2, height * this.ratio],
      popupAnchor: [0, -(height * this.ratio)],
      className: 'icon'
    });
  }

  _getHtml(icon, width, height) {
    let i = '<img src="' + icon + '" width="' + width * this.ratio + '" height="' + height * this.ratio + '">';
    let blason = this._hasOwner() ? '<img src="blasons/' + this.owner + '.png" width="' + 30 * this.ratio + '" style="position:absolute;top:2px;right:' + -21 * this.ratio + 'px;">' : '';
    let vassal = this._isVassal() ? '<img src="blasons/vassal.png" width="' + 19 * this.ratio + '" style="position:absolute;top:6px;right:' + -40 * this.ratio + 'px;">' : '';
    return i + blason + vassal;
  }

  _hasOwner() {
    return this.hasOwnProperty('owner') && this.owner != 'others';
  }

  _isVassal() {
    return this.hasOwnProperty('isVassal') && this.isVassal == true;
  }
}

// 
// Pin

class Chateau extends Pin {
  constructor(name, description, latlng, ratio, style) {
    super(name, description, latlng, ratio, style);
    this.width = 100;
    this.height = 63;
    this.widthSketchy = 80;
    this.heightSketchy = 98;
    this.icon = 'icons/chateau.png';
    this.iconSketchy = 'icons/sketchy/chateau.png';
  }

  _getType() {
    return 'Château';
  }
}

class Magic extends Pin {
  constructor(name, description, latlng, ratio, style) {
    super(name, description, latlng, ratio, style);
    this.width = 40;
    this.height = 53;
    this.widthSketchy = 47;
    this.heightSketchy = 64;
    this.icon = 'icons/compotier.png';
    this.iconSketchy = 'icons/sketchy/magic.png';
  }

  _getType() {
    return 'Endroit magique';
  }
}

class Abbaye extends Pin {
  constructor(name, description, latlng, ratio, style) {
    super(name, description, latlng, ratio, style);
    this.width = 50;
    this.height = 48;
    this.widthSketchy = 73;
    this.heightSketchy = 70;
    this.icon = 'icons/abbaye.png';
    this.iconSketchy = 'icons/sketchy/abbaye.png';
  }

  _getType() {
    return 'Abbaye';
  }
}