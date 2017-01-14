$("#map").height(window.innerHeight - 20);

// init map
let map = L.map('map', {
  minZoom: 6,
  maxZoom: 7
}).setView([18.15629, 34.67285], 6);
L.imageOverlay('somerset.png', [[0, 0], [42.28, 55.00]]).addTo(map);

let group7 = L.layerGroup();
let group6 = L.layerGroup();
for (let d of datas) {
  $.ajax({
    type: 'GET',
    url: 'https://jsonblob.com/api/jsonBlob/' + d.code,
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    success: function (json) {
      for (let object of json) {
        let pin7 = buildPin(object.type, object.name, object.description, object.latlng, 1, d.owner, object.v || false);
        let pin6 = buildPin(object.type, object.name, object.description, object.latlng, 0.65, d.owner, object.v || false);
        group7.addLayer(pin7.getMarker());
        group6.addLayer(pin6.getMarker());
      }
    }
  });
}
map.addLayer(group6);

// map events
map.on('contextmenu', function (ev) {
  window.prompt("Copy to clipboard: Ctrl+C, Enter", ev.latlng.lat.toFixed(3) + ',' + ev.latlng.lng.toFixed(3))
});
map.on('zoomstart', function() {
  map.removeLayer(group6);
  map.removeLayer(group7);
});
map.on('zoomend', function() {
  let zoom = map.getZoom();
  if (zoom == 6) {
    map.addLayer(group6);
  } else {
    map.addLayer(group7);
  }
});