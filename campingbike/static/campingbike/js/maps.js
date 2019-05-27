var bounds = null;
//Creem el mapa amb les seves caracteristiques
var map_6be92f8b4bd54b78905cd14785fa6164 = L.map('map_6be92f8b4bd54b78905cd14785fa6164', {
        center: [42.352088, 3.067773],
        zoom: 12,
        maxBounds: bounds,
        layers: [],
        worldCopyJump: false,
        crs: L.CRS.EPSG3857,
        zoomControl: true,
});
//Afegim la capa que conté la imatge
var tile_layer_65f0ff17a4b94c2b85d076ddbe1e7f09 = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
        "attribution": null,
        "detectRetina": false,
        "maxNativeZoom": 18,
        "maxZoom": 18,
        "minZoom": 0,
        "noWrap": false,
        "opacity": 1,
        "subdomains": "abc",
        "tms": false
}).addTo(map_6be92f8b4bd54b78905cd14785fa6164);
//Creem l'objecte ruta
var router = L.routing.osrmv1()
//Definim els waypoints de la ruta
router.route([
  L.routing.waypoint([42.339, 3.067]),
  L.routing.waypoint([42.389, 2.999]),
  L.routing.waypoint([42.45, 3.053]),
  L.routing.waypoint([42.481, 3.128]),
  L.routing.waypoint([42.334, 3.196]),
  L.routing.waypoint([42.329, 3.156]),
  L.routing.waypoint([42.339, 3.067])
], function(err, routes) {
  if (err || routes.length < 1) {
    return console.error(err)
  }
//Afegim l'objecte ruta al mapa
var line = L.routing.line(routes[0]).addTo(map_6be92f8b4bd54b78905cd14785fa6164)
  map_6be92f8b4bd54b78905cd14785fa6164.fitBounds(line.getBounds())
})

var router = L.routing.osrmv1()

router.route([
  L.routing.waypoint([42.339, 3.067]),
  L.routing.waypoint([42.326, 3.150]),
  L.routing.waypoint([42.334, 3.19]),
  L.routing.waypoint([42.296, 3.235]),
  L.routing.waypoint([42.339, 3.067])
], function(err, routes) {
  if (err || routes.length < 1) {
    return console.error(err)
  }

var line = L.routing.line(routes[0]).addTo(map_6be92f8b4bd54b78905cd14785fa6164)
  map_6be92f8b4bd54b78905cd14785fa6164.fitBounds(line.getBounds())
})
//centrem el mapa
map_6be92f8b4bd54b78905cd14785fa6164.panTo(new L.LatLng(42.352088, 3.067773));