$("#map").height(window.innerHeight-20);

var data = [
    "e74f3eb7-d8d6-11e6-b16a-3f7d8b2f5214",     // deoord
    "2ea9e28a-d8e3-11e6-b16a-1bb5d129a9b5",     // odo
    "cc73111d-d8d7-11e6-b16a-89aa9fe53353"      // autres
]

var map = L.map('map', {
    minZoom: 7,
    maxZoom: 7
}).setView([21, 27], 7);
L.imageOverlay('somerset.png', [[0, 0], [42.28, 55.00]]).addTo(map);

map.on('dblclick', function(ev) {
    alert(ev.latlng);
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
                createMarker(value);
            });
        }
    })
});

function createMarker(data) {
    var marker = L.marker(data.latlng, { icon: createIcon(data.type, data.owner) });

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

function createIcon(type, owner) {
    var width = iconSizes[type].width;
    var height = iconSizes[type].height;
    var icon = '<img src="icons/' + type + '.png" width="' + width + '" height="' + height + '">';
    var blason = '';
    if (owner != null && owner != '') {
        blason = '<img src="blasons/' + owner + '.png" class="blason">';
    }

    return L.divIcon({
        html: icon + blason,
        iconSize: [width, height],
        iconAnchor: [width/2, height],
        popupAnchor: [0, -height],
        className: 'icon'
    });
}