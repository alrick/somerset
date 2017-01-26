// vars
let map;
let zoom6 = L.layerGroup();
let zoom7 = L.layerGroup();
let ratio7 = 1;
let ratio6 = 0.65;
let api = 'https://private-1e008-somerset.apiary-mock.com/';

// init map
$("#map").height(window.innerHeight - 20);
map = L.map('map', {
  minZoom: 6,
  maxZoom: 7
}).setView([18.15629, 34.67285], 6);
L.imageOverlay('somerset.png', [[0, 0], [42.28, 55.00]]).addTo(map);

// map events
map.on('contextmenu', function (ev) {
  window.prompt("Copy to clipboard: Ctrl+C, Enter", ev.latlng.lat.toFixed(3) + ',' + ev.latlng.lng.toFixed(3))
});
map.on('zoomstart', function() {
  map.removeLayer(zoom6);
  map.removeLayer(zoom7);
});
map.on('zoomend', function() {
  let zoom = map.getZoom();
  map.removeLayer(zoom6);
  map.removeLayer(zoom7);
  map.addLayer(window['zoom' + zoom]);
});

$.getJSON(api, function(data) {
  for (let object of data) {
    let pin7 = buildPin(object.type, object.name, object.description, object.latlng, ratio7, object.owner, object.v || false);
    let pin6 = buildPin(object.type, object.name, object.description, object.latlng, ratio6, object.owner, object.v || false);
    zoom7.addLayer(pin7.getMarker());
    zoom6.addLayer(pin6.getMarker());
  }
  map.addLayer(zoom6);
});