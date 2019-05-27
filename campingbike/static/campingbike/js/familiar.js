//Ajax que mostra els comentaris
$.ajax({
    method: 'GET',
    url: 'http://127.0.0.1:8000/campingbike/json',
    success: function(data) {
        $.each(data, function (i, field) {
            if(field['tipus']=='F'){

                $('.comentaris').append('<div class="row p-2">');
                $("div:last").append("<img class='col-lg-5 col-md-6' width='100%' height='100%' src='" + field['imatge'] +" '>");
                $("div:last").append("<div class='col-md-6 col-lg-7 p-3'>");
                $("div:last").append("<p> Ruta:"  + field['comentari'] +  " </p>");
                $("div:last").append("<p> Distancia:"  + field['km'] +" km. Temps: "+ field['temps']+  " </p>");
                $("div:last").append("<p>"  + field['opinio'] +  " </p>");
                $("div:last").append("<a href="+ field['link']  +  "> Link a la ruta </a>");
            }
        });
    }
});

var bounds = null;
//Creem el mapa amb les seves caracteristiques
var map1 = L.map('mapContainer', {
    center: [42.352088, 3.067773],
    zoom: 15,
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
}).addTo(map1);
//Creem l'objecte ruta
var router = L.routing.osrmv1()
//Definim els waypoints de la ruta
router.route([
L.routing.waypoint([42.351712, 3.066426]),
  L.routing.waypoint([42.339, 3.067]),
  L.routing.waypoint([42.344329, 3.05787]),





], function(err, routes) {
  if (err || routes.length < 1) {
    return console.log(err)
  }



//Afegim l'objecte ruta al mapa
L.routing.line(routes[0]).addTo(map1)
  map1.fitBounds(line.getBounds())
})

var marker = L.marker([42.416252, 3.058838]).addTo(map1);
marker.bindPopup("<b>Sant quirze de Colera</b><br><img src='http://cbrava.com/wp-content/uploads/2010/07/santquirzecolera1-300x199.jpg'/>")
var marker = L.marker([42.339183, 3.06788]).addTo(map1);
marker.bindPopup("<b>Camping vell Emporda</b><br><img src=''/>")
var marker = L.marker([42.351712, 3.066426]).addTo(map1);
marker.bindPopup("<b>Centre reproducció tortugues</b><br><img src=''/>")

var polylinePoints = [
            [42.344329, 3.05787],
            [42.346708, 3.056196],
            [42.350837, 3.056812],
            [42.352645, 3.056469],
            [42.352867, 3.055524],
            [42.353945, 3.054924],
            [42.354865, 3.054237],
            [42.355246, 3.053679],
            [42.356038, 3.053722],
            [42.356197, 3.054022],
            [42.358671, 3.053765],
            [42.359241, 3.052907],
            [42.360034, 3.052778],
            [42.362571, 3.053851],
            [42.363174, 3.054409],
            [42.362444, 3.054666],
            [42.361937, 3.055353],
            [42.362095, 3.055739],
            [42.361525, 3.056254],
            [42.361588, 3.056683],
            [42.362603, 3.058228],
            [42.364759, 3.058013],
            [42.365171, 3.05767],
            [42.366027, 3.05767],
            [42.366059, 3.057198],
            [42.36663, 3.056383],
            [42.368342, 3.054838],
            [42.368183, 3.054452],
            [42.369674, 3.052778],
            [42.370086, 3.052005],
            [42.370213, 3.051147],
            [42.370593, 3.05089],
            [42.370815, 3.050031],
            [42.3724, 3.048358],
            [42.372464, 3.047027],
            [42.372686, 3.04574],
            [42.372495, 3.043508],
            [42.372178, 3.042693],
            [42.373732, 3.043723],
            [42.376015, 3.046255],
            [42.376411, 3.046029],
            [42.377045, 3.046115],
            [42.377703, 3.04589],
            [42.377877, 3.04559],
            [42.37826, 3.045336],
            [42.378482, 3.045336],
            [42.378675, 3.045264],
            [42.379217, 3.045278],
            [42.37993, 3.045157],
            [42.380305, 3.045015],
            [42.380327, 3.044757],
            [42.381109, 3.044328],
            [42.381278, 3.043785],
            [42.382017, 3.04327],
            [42.382398, 3.04284],
            [42.383201, 3.041954],
            [42.383306, 3.040523],
            [42.383497, 3.040094],
            [42.383814, 3.039865],
            [42.384395, 3.041338],
            [42.384448, 3.040823],
            [42.384659, 3.040208],
            [42.385082, 3.039708],
            [42.385684, 3.039135],
            [42.38618, 3.039021],
            [42.386783, 3.03965],
            [42.387427, 3.039937],
            [42.389667, 3.040952],
            [42.3899, 3.041152],
            [42.389963, 3.041582],
            [42.390051, 3.041714],
            [42.390187, 3.041769],
            [42.390779, 3.04147],
            [42.391266, 3.041341],
            [42.391905, 3.041972],
            [42.392016, 3.042424],
            [42.39225, 3.04295],
            [42.392261, 3.043519],
            [42.392394, 3.043728],
            [42.392623, 3.044895],
            [42.392798, 3.045349],
            [42.393086, 3.045493],
            [42.393325, 3.045932],
            [42.393245, 3.046502],
            [42.393346,3.04653 ],
            [42.393745, 3.0463],
            [42.39415, 3.046329],
            [42.394426, 3.046509],
            [42.394549, 3.046703],
            [42.394607, 3.046991],
            [42.394559, 3.047849],
            [42.394597, 3.048004],
            [42.394687, 3.048173],
            [42.395073, 3.048432],
            [42.395224, 3.048425],
            [42.397487, 3.04738],
            [42.39829, 3.047308],
            [42.398843, 3.046948],
            [42.399077, 3.046926],
            [42.399333, 3.047034],
            [42.400083, 3.046746],
            [42.400307, 3.046782],
            [42.400511, 3.046942],
            [42.400878, 3.047086],
            [42.401053, 3.047187],
            [42.401085, 3.047324],
            [42.401202, 3.047468],
            [42.401511, 3.047699],
            [42.401995, 3.047972],
            [42.402527, 3.047893],
            [42.40266, 3.048001],
            [42.402958, 3.049125],
            [42.403692, 3.048945],
            [42.403777, 3.048887],
            [42.404144, 3.049017],
            [42.404356, 3.048959],
            [42.404383, 3.049052],
            [42.404107, 3.049461],
            [42.404054, 3.049747],
            [42.404113, 3.050558],
            [42.404245, 3.050723],
            [42.405347, 3.051469],
            [42.40612, 3.05149],
            [42.406157, 3.051562], //GR11
            [42.407117, 3.051621],
            [42.407324, 3.05157],
            [42.408307, 3.050829],
            [42.408653, 3.050822],
            [42.408998, 3.050951],
            [42.409386, 3.051211],
            [42.409737, 3.051592],
            [42.410141, 3.052053],
            [42.411386, 3.054626],
            [42.412547, 3.055752],
            [42.412723, 3.055868],
            [42.412978, 3.055896],
            [42.413754, 3.055666],
            [42.414136, 3.055594],
            [42.41437, 3.055709],
            [42.414493, 3.055867],
            [42.414663, 3.056999],
            [42.415075, 3.057672],
            [42.415615, 3.058088],
      ];

var polyline = L.polyline(polylinePoints).addTo(map1);

map1.setView(new L.LatLng(42.377, 3.0580), 12);
