$("#map").height(window.innerHeight-20);

var map = L.map('map', {
    minZoom: 7,
    maxZoom: 7
}).setView([18.15629, 34.67285], 7);
L.imageOverlay('somerset.png', [[0, 0], [42.28, 55.00]]).addTo(map);

map.on('contextmenu', function(ev) {
    window.prompt("Copy to clipboard: Ctrl+C, Enter", ev.latlng.lat.toFixed(3) + ',' + ev.latlng.lng.toFixed(3))
});

var iconSizes = {
    fief: { width: 30, height: 36 },
    village: { width: 40, height: 49 },
    bourg: { width: 65, height: 54 },
    ville: { width: 70, height: 71 },
    chateau: { width: 60, height: 57 },
    tourBois: { width: 18, height: 57 },
    tourPierre: { width: 36, height: 57 },
    magic: { width: 40, height: 53 }
};

$.each(data, function (i, v) {
    $.ajax({
        type: 'GET',
        url: 'https://jsonblob.com/api/jsonBlob/'+v,
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function(json) {
            $.each(json, function(index, value) {
                createMarker(value, i);
            });
        }
    })
});

function createMarker(data, owner) {
    var marker = L.marker(data.latlng, { icon: createIcon(elems[data.cat][data.type], owner, data.v) });

    if (data.tooltip != null && data.tooltip != '') {
        var tooltip = L.tooltip({ direction: 'bottom' });
        marker.bindTooltip(tooltip).setTooltipContent('<b>' + data.tooltip + '</b>');
    }
    
    if (data.popup != null && data.popup != '') {
        var popup = L.popup().setContent(data.popup);
        marker.bindPopup(popup);
    }
    
    marker.addTo(map);
}

function createIcon(elem, owner, isV) {
    var i = isV ? elem.icon_v : elem.icon;
    var icon = '<img src="' + i + '" width="' + elem.width + '" height="' + elem.height + '">';
    var blason = '';
    if (owner != null && owner != '') {
        blason = '<img src="blasons/' + owner + '.png" class="blason">';
    }

    return L.divIcon({
        html: icon + blason,
        iconSize: [elem.width, elem.height],
        iconAnchor: [(elem.width)/2, elem.height],
        popupAnchor: [0, -(elem.height)],
        className: 'icon'
    });
}