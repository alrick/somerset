// vars
let map;
let classic6 = L.layerGroup();
let classic7 = L.layerGroup();
let sketchy6 = L.layerGroup();
let sketchy7 = L.layerGroup();
let api = 'https://private-1e008-somerset.apiary-mock.com/';

// init map
$('#map').data('style', 'sketchy');
$("#map").height(window.innerHeight - 20);
map = L.map('map', {
  minZoom: 6,
  maxZoom: 7
}).setView([18.15629, 34.67285], 6);
L.imageOverlay('somerset.png', [[0, 0], [42.28, 55.00]]).addTo(map);

// button to switch styles
L.easyButton('fa-map-signs', function(btn, map) {
  switchStyle();
  cleanLayers(map);
  setLayer(map);
}).addTo(map);

// map events
map.on('contextmenu', function (ev) {
  window.prompt("Copy to clipboard: Ctrl+C, Enter", ev.latlng.lat.toFixed(3) + ',' + ev.latlng.lng.toFixed(3))
});
map.on('zoomstart', function() {
  cleanLayers(map);
});
map.on('zoomend', function() {
  setLayer(map);
});

$.getJSON(api, function(data) {
  for (let object of data) {
    let pin7Classic = buildPin(object.type, object.name, object.description, object.latlng, 1, 'classic', object.owner, object.v || false);
    let pin6Classic = buildPin(object.type, object.name, object.description, object.latlng, 0.65, 'classic', object.owner, object.v || false);
    let pin7Sketchy = buildPin(object.type, object.name, object.description, object.latlng, 1, 'sketchy', object.owner, object.v || false);
    let pin6Sketchy = buildPin(object.type, object.name, object.description, object.latlng, 0.65, 'sketchy', object.owner, object.v || false);
    classic7.addLayer(pin7Classic.getMarker());
    classic6.addLayer(pin6Classic.getMarker());
    sketchy7.addLayer(pin7Sketchy.getMarker());
    sketchy6.addLayer(pin6Sketchy.getMarker());
  }
  let somersetstyle = localStorage.getItem('somersetstyle');
  if (somersetstyle != undefined && somersetstyle != '') {
    $('#map').data('style', somersetstyle);
  }
  setLayer(map);
});

function cleanLayers(map) {
  map.removeLayer(classic6);
  map.removeLayer(classic7);
  map.removeLayer(sketchy6);
  map.removeLayer(sketchy7);
}

function setLayer(map) {
  let zoom = map.getZoom();
  let style = getStyle();
  map.addLayer(window[style + zoom]);
}

function getStyle() {
  return $('#map').data('style');
}

function switchStyle() {
  let stdStyle = 'classic';
  let sketchyStyle = 'sketchy';
  let style = getStyle() === stdStyle ? sketchyStyle : stdStyle;
  $('#map').data('style', style);
  localStorage.setItem('somersetstyle', style);
}