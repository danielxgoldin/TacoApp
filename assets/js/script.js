
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
        });