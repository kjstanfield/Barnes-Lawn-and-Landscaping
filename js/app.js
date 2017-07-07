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
      speed: 500,
      autoplay: true,
      dots: true,
      fade: true,
      adaptiveHeight: true
  });
});