function initMap() {
    var louisville = {lat: 38.200178, lng: -85.750351};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: louisville,
    scrollwheel: false
    });
}

$(document).ready(function(){
  $('.gallerybox').slick({
      accessibility: true,
      speed: 700,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      fade: true,
      adaptiveHeight: false
  });
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("topbutton").style.display = "block";
    } else {
        document.getElementById("topbutton").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera 
    document.documentElement.scrollTop = 0; // For IE and Firefox
}