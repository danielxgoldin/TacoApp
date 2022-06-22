
// materialize navbar code
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});


/* $(document).ready(function () {
  $(".button").on("click", function() {
      var scheduleText = $(this).siblings(".form").val();
      var timeId = $(this).parent().attr("id");
      localStorage.setItem();
      console.log();
      });

      function initMap() {
          map = new google.maps.Map(document.getElementById("map"), {
            center: {},
            zoom: 8,
          });
        }
        
        window.initMap = initMap;

        map = new google.maps.Map(document.getElementById("map")  )}) */

// experimental taco finder 
var geocoder;
var map;
var infowindow;

function initialize() {
  geocoder = new google.maps.Geocoder();
  var loca = new google.maps.LatLng(30.2672, -97.7431);

  map = new google.maps.Map(document.getElementById('map'), {
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    center: loca,
    zoom: 14
  });

}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
}

function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

  google.maps.event.addListener(marker, 'mouseover', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}

function codeAddress() {
  var address = document.getElementById("address").value;
  geocoder.geocode({
    'address': address
  }, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      map.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
        map: map,
        position: results[0].geometry.location
      });
      var request = {
        location: results[0].geometry.location,
        radius: 5000,
        name: 'taco',
        keyword: 'tacos',
        type: ['restaurant']
      };
      infowindow = new google.maps.InfoWindow();
      var service = new google.maps.places.PlacesService(map);
      service.nearbySearch(request, callback);
    } else {
      alert("Geocode was not successful for the following reason: " + status);
    }
  });
}

google.maps.event.addDomListener(window, 'load', initialize);