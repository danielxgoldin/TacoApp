
// materialize navbar code
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});


$(document).ready(function () {
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

        map = new google.maps.Map(document.getElementById("map")  )})