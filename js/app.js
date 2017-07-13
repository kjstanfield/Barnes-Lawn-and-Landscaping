//Initializes the google map
function initMap() {
    var louisville = {lat: 38.176575, lng: -85.770119};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: louisville,
    scrollwheel: false
    });
}

//Loads Slick image carousel
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

$(document).ready(function(){
	
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('#topbutton').fadeIn();
		} else {
			$('#topbutton').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('#topbutton').click(function(){
		$('html, body').animate({scrollTop : 0},300);
		return false;
	});
	
});