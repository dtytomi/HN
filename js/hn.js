
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