
(function(){
  
  'use strict';

  $('ul.nav li.dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
  }, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
  });

  $(window).scroll(function () {

    //if you hard code, then use console
    //.log to determine when you want the 
    //nav bar to stick.  

    if ($(window).scrollTop() > 280) {
      $('.navbar-static-top').addClass('navbar-fixed');
    }
    if ($(window).scrollTop() < 281) {
      $('.navbar-static-top').removeClass('navbar-fixed');
    }
  });


  // jQuery for page scrolling feature - requires jQuery Easing plugin
  $('a.page-scroll').bind('click', function (event) {
       
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top 
      }
      , 1500, 'easeInOutExpo');

      event.preventDefault();
  });

  // Highlight the top nav as scrolling occurs
  $('body').scrollspy({
    target: '.navbar-static-top',
    offset: 51
  });

  // Closes the Responsive Menu on Menu Item Click
  $('.navbar-collapse ul li a').click(function(){ 
          $('.navbar-toggle:visible').click();
  });

  // Offset for Main Navigation
  $('#mainNav').affix({
      offset: {
          top: 100
      }
  })

})(jQuery);

function init() {
    var e= {
        zoom:15,
        center:new google.maps.LatLng(6.642907, (3.342938)),
        disableDefaultUI:!0,
        scrollwheel:!1,
        draggable:!1,
        styles: [
            {
                "featureType": "landscape",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            }
        ]
    }
    ,
    t=document.getElementById("map");
    map=new google.maps.Map(t, e);
    var l="img/map-marker.png",
    o=new google.maps.LatLng(6.642907, (3.342938));
    new google.maps.Marker( {
        position: o, map: map, 
    }
    ),
    marker = new google.maps.Marker({
        position: myLatLng,
        title: 'Hello World!'
    });

    marker.setMap(map);
};

var map=null;
google.maps.event.addDomListener(window, "load", init),
google.maps.event.addDomListener(window, "resize", function() {
    map.setCenter(new google.maps.LatLng(6.642907, (3.342938)))
});