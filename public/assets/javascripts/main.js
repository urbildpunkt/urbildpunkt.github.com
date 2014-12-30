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


(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-48707601-1', 'auto');
ga('send', 'pageview');
