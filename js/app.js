function initMap() {
    var louisville = {lat: 38.178399, lng: -85.740489};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: louisville,
    scrollwheel: false
    });
}