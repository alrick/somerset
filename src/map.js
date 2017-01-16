// vars
let layers = {
  'classic6': L.layerGroup(),
  'classic7': L.layerGroup(),
  'sketchy6': L.layerGroup(),
  'sketchy7': L.layerGroup()
};
let api = 'https://private-1e008-somerset.apiary-mock.com/';
let owners = ['others', 'aeron', 'deoord', 'lothar', 'odo', 'tulkas', 'valens'];

// init map
$("#map").height(window.innerHeight - 20);
let map = L.map('map', {
  minZoom: 6,
  maxZoom: 7
}).setView([18.15629, 34.67285], 6);

// setup
var setupMap = function() {
  L.imageOverlay('somerset.png', [[0, 0], [42.28, 55.00]]).addTo(map);

  // map events
  map.on('contextmenu', function (ev) {
    window.prompt("Copy to clipboard: Ctrl+C, Enter", ev.latlng.lat.toFixed(3) + ',' + ev.latlng.lng.toFixed(3))
  });
  map.on('zoomstart', function() {
    cleanLayers();
  });
  map.on('zoomend', function() {
    setLayer();
  });

  // get data from api
  for (let owner of owners) {
    $.getJSON( api + owner, function( data ) {
      for (let object of data) {
        let pin7Classic = buildPin(object.type, object.name, object.description, object.latlng, 1, 'classic', owner, object.v || false);
        let pin6Classic = buildPin(object.type, object.name, object.description, object.latlng, 0.65, 'classic', owner, object.v || false);
        let pin7Sketchy = buildPin(object.type, object.name, object.description, object.latlng, 1, 'sketchy', owner, object.v || false);
        let pin6Sketchy = buildPin(object.type, object.name, object.description, object.latlng, 0.65, 'sketchy', owner, object.v || false);
        layers['classic7'].addLayer(pin7Classic.getMarker());
        layers['classic6'].addLayer(pin6Classic.getMarker());
        layers['sketchy7'].addLayer(pin7Sketchy.getMarker());
        layers['sketchy6'].addLayer(pin6Sketchy.getMarker());
      }
    });
  }
  cleanLayers();
  setLayer();

  // button to switch styles
  L.easyButton('fa-map-signs', function(btn, map) {
    switchStyle();
    cleanLayers();
    setLayer();
  }).addTo(map);
}

// entry point
$('#map').data('style', 'sketchy');
localforage.getItem('somersetstyle', function(err, value) {
  if (value != '') {
    $('#map').data('style', value);
  }
  setupMap();
});

function cleanLayers() {
  for (var layer in layers) {
    if (layers.hasOwnProperty(layer)) {
        map.removeLayer(layers[layer]);
    }
  }
}

function setLayer() {
  let zoom = map.getZoom();
  let style = getStyle();
  map.addLayer(layers[style + zoom]);
}

function getStyle() {
  return $('#map').data('style');
}

function switchStyle() {
  let stdStyle = 'classic';
  let sketchyStyle = 'sketchy';
  let style = getStyle() === stdStyle ? sketchyStyle : stdStyle;
  $('#map').data('style', style);
  setStorage('somersetstyle', style);
}

function setStorage(key, value) {
  localforage.setItem(key, value).then(function (value) {
    // ok
  }).catch(function(err) {
    console.log(err);
  });
}