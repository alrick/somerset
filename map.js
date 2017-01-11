$("#map").height(window.innerHeight-20);

var map = L.map('map').setView([21, 27], 6);
var imageBounds = [[0, 0], [42.28, 55.00]];
L.imageOverlay('somerset.png', imageBounds).addTo(map);

map.on('click', function(ev) {
    alert(ev.latlng);
});

var tower = L.icon({
    iconUrl: 'icons/tower-1.png',
    iconSize: [24, 24],
    iconAnchor: [12, 12],
    className: 'marker'
});
var castle = L.icon({
    iconUrl: 'icons/castle-1.png',
    iconSize: [24, 24],
    iconAnchor: [12, 12],
    className: 'marker'
});
var castle2 = L.icon({
    iconUrl: 'icons/castle-1.png',
    iconSize: [24, 24],
    iconAnchor: [12, 12],
    className: 'marker2'
});
L.marker([13.83808, 37.81494], {icon: tower}).addTo(map);
L.marker([14.09396, 35.61768], {icon: tower}).addTo(map);
L.marker([14.94478, 37.37549], {icon: castle}).addTo(map);
L.marker([19.91138, 32.71729], {icon: castle2}).addTo(map);