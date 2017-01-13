$("#map").height(window.innerHeight-20);

var map = L.map('map', {
    minZoom: 7,
    maxZoom: 7
}).setView([18.15629, 34.67285], 7);
L.imageOverlay('somerset.png', [[0, 0], [42.28, 55.00]]).addTo(map);

map.on('contextmenu', function(ev) {
    window.prompt("Copy to clipboard: Ctrl+C, Enter", ev.latlng.lat.toFixed(3) + ',' + ev.latlng.lng.toFixed(3))
});

$.each(data, function (owner, code) {
    $.ajax({
        type: 'GET',
        url: 'https://jsonblob.com/api/jsonBlob/'+code,
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function(json) {
            $.each(json, function(index, data) {
                if (data.v != null && data.v === true) {
                    let pin = buildPin(data.type, data.name, data.description, data.latlng, owner, true);
                } else {
                    let pin = buildPin(data.type, data.name, data.description, data.latlng, owner);
                }
                pin.getMarker().addTo(map);
            });
        }
    })
});