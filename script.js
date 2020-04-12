
// Fade in on page load.
$(document).ready(function() {
  $("body").css("display", "none");
  $("body").fadeIn(2000);
});

// Google Maps API.
function myMap() {
  var mapProp= {
    center:new google.maps.LatLng(51.508742,-0.120850),
    zoom:5,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}

/*
$(document).ready(function(){
  $("a").click(function(){
    $("p").hide();
  });
});
*/

