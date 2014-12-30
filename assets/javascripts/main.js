$(document).ready(function() {
  var header = $('header.navigation');
  var menu = $('#navigation-menu');
  var menuIcon = $('#navigation-menu-icon');
  var menuToggle = $('#js-mobile-menu');
  var shim = $('.shim')

  $(menuToggle).on('click', function(e) {
    e.preventDefault();
    menuIcon.toggleClass('selected');
    menu.slideToggle(function(){
      if(menu.is(':hidden')) {
        menu.removeAttr('style');
      }
    });
    shim.fadeToggle();
  });
});
