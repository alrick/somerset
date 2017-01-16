$("#map").height(window.innerHeight - 20);

// init map
let map = L.map('map', {
  minZoom: 6,
  maxZoom: 7
}).setView([18.15629, 34.67285], 6);
L.imageOverlay('somerset.png', [[0, 0], [42.28, 55.00]]).addTo(map);

// init layers
let style = 'sketchy';
let group7Classic = L.layerGroup();
let group7Sketchy = L.layerGroup();
let group6Classic = L.layerGroup();
let group6Sketchy = L.layerGroup();
map.addLayer(group6Sketchy);

// get data from api
let api = 'https://private-1e008-somerset.apiary-mock.com/';
let owners = ['others', 'aeron', 'deoord', 'lothar', 'odo', 'tulkas', 'valens'];
for (let owner of owners) {
  $.getJSON( api + owner, function( data ) {
    for (let object of data) {
      let pin7Classic = buildPin(object.type, object.name, object.description, object.latlng, 1, 'classic', owner, object.v || false);
      let pin6Classic = buildPin(object.type, object.name, object.description, object.latlng, 0.65, 'classic', owner, object.v || false);
      let pin7Sketchy = buildPin(object.type, object.name, object.description, object.latlng, 1, 'sketchy', owner, object.v || false);
      let pin6Sketchy = buildPin(object.type, object.name, object.description, object.latlng, 0.65, 'sketchy', owner, object.v || false);
      group7Classic.addLayer(pin7Classic.getMarker());
      group6Classic.addLayer(pin6Classic.getMarker());
      group7Sketchy.addLayer(pin7Sketchy.getMarker());
      group6Sketchy.addLayer(pin6Sketchy.getMarker());
    }
  });
}

// map events
map.on('contextmenu', function (ev) {
  window.prompt("Copy to clipboard: Ctrl+C, Enter", ev.latlng.lat.toFixed(3) + ',' + ev.latlng.lng.toFixed(3))
});
map.on('zoomstart', function() {
  cleanLayers();
});
map.on('zoomend', function() {
  setCorrectLayer();
});

// button to switch styles
L.easyButton('fa-map-signs', function(btn, map){
  style = style == 'sketchy' ? 'classic' : 'sketchy';
  cleanLayers();
  setCorrectLayer();
}).addTo(map);

// switch layer depending on zoom and style
function cleanLayers() {
  map.removeLayer(group6Classic);
  map.removeLayer(group7Classic);
  map.removeLayer(group6Sketchy);
  map.removeLayer(group7Sketchy);
}
function setCorrectLayer() {
  let layer;
  if (map.getZoom() == 6) {
    layer = style == 'sketchy' ? group6Sketchy : group6Classic;
  } else {
    layer = style == 'sketchy' ? group7Sketchy : group7Classic;
  }
  map.addLayer(layer);
}