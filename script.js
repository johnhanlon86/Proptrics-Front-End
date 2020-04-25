
// Fade in on page load.
$(document).ready(function() {
  $("body").css("display", "none");
  $("body").fadeIn(2000);
});

// Side Navigation Bar (push to right).
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
// function openNav() {
// document.getElementById("mySidenav").style.width = "250px";
// document.getElementById("wrapper").style.marginLeft = "250px";
// }

// Side Navigation Bar (push to right).
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
// Added JavaScript function within Open Nav function so that it will not push screen/content for smaller screens.
function openNav() {
  function myFunction(x) {
    if (x.matches) { // If media query matches
      document.getElementById("mySidenav").style.width = "250px";
      document.getElementById("mySidenav").style.zIndex = "3";
    } else {
      document.getElementById("mySidenav").style.width = "250px";
      document.getElementById("wrapper").style.marginLeft = "250px";
    }
  }
  var x = window.matchMedia("(max-width: 1000px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("wrapper").style.marginLeft = "0";
}

// Add custom function using custom JavaScript to toggle Open Nav Button.
function toggleNav() {
  if (document.getElementById("mySidenav").style.width == "250px" /*&& document.getElementById("wrapper").style.marginLeft == "250px" */ ) {
    closeNav();
  } else {
    openNav();
  }
}

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

