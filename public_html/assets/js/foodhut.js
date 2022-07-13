
// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

new WOW().init();

function initMap() {
    var campinas = {lat:-22.907104, lng: -47.063240};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 8,
      center: campinas
    });
    var marker = new google.maps.Marker({
      position: campinas,
      map: map
    });
 }
