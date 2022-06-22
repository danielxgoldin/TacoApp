/*
$(document).ready(function () {
    $(".button").on("click", function() {
        var scheduleText = $(this).siblings(".form").val();
        var timeID = $(this).parent().attr("id");
        console.log();
        });

        function initMap() {
            map = new google.maps.Map(document.getElementById("map"), {
              center: {},
              zoom: 8,
            });
          }
          
          window.initMap = initMap();
        });*/
        var map;

        function createMap() {
          map = new google.maps.Map(document.getElementById('map'), {
            center: {
              lat: 40.0519752,
              lng: -76.314270999999
            },
            zoom: 10
          });
        
          var request = {
            location: map.getCenter(),
            radius: 8047,
            types: ['tacos']
          }
        
          var service = new google.maps.places.PlacesService(map);
        
          service.nearbySearch(request, callback);
        }
        
        function callback(results, status) {
          if (status == google.maps.places.PlacesServiceStatus.OK) {
            console.log(results);
            for (var i = 0; i < results.length; i++) {
              createMarker(results[i]);
            }
          }
        }
        
        function createMarker(place) {
          var placeLoc = place.geometry.location;
          var marker = new google.maps.Marker({
            map: map,
            position: place.geometry.location,
            title: place.name
          })
        }