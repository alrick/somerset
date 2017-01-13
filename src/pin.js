class Pin {
    constructor(name, description, latlng) {
        this.name = name;
        this.description = description;
        this.latlng = latlng;
        this.width = 55;
        this.height = 55;
        this.icon = 'icons/ghost.png'
    }

    getMarker() {
        let marker = L.marker(this.latlng, { icon: _buildIcon() });

        let tooltip = L.tooltip({ direction: 'bottom' });
        marker.bindTooltip(tooltip).setTooltipContent(this.name);

        marker.bindPopup(L.popup().setContent(this.description));
        
        return marker;
    }

    _buildIcon() {
        return L.divIcon({
            html: this._getHtml(),
            iconSize: [this.width, this.height],
            iconAnchor: [(this.width)/2, this.height],
            popupAnchor: [0, -(this.height)],
            className: 'icon'
        });
    }

    _getHtml() {
        return '<img src="' + this.icon + '" width="' + this.width + '" height="' + this.height + '">';
    }
}

// 
// Pin

class Chateau extends Pin {
    constructor(name, description, latlng) {
        super(name, description, latlng);
        this.width = 60;
        this.height = 57;
        this.icon = 'icons/chateau.png';
    }
}

class Magic extends Pin {
    constructor(name, description, latlng) {
        super(name, description, latlng);
        this.width = 40;
        this.height = 53;
        this.icon = 'icons/compotier.png';
    }
}