const SCROLLING_TIME = 800;
$(document).on('click', 'a', function (event) {
  $('html, body').animate({
     scrollTop:$(jQuery.attr(this, 'href')).offset().top
   }, SCROLLING_TIME);
   return false;
 });