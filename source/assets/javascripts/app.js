// as the page loads, call these scripts
jQuery(document).ready(function($) {


	// grab an element
	var myElement = document.querySelector("#topbar");
	// construct an instance of Headroom, passing the element
	var headroom  = new Headroom(myElement, {
	  // vertical offset in px before element is first unpinned
	    offset : 100,
	    // scroll tolerance in px before state changes
	    tolerance : 50,
	    // css classes to apply
	    classes : {
	        // when element is initialised
	        initial : "headroom",
	        // when scrolling up
	        pinned : "headroom--pinned",
	        // when scrolling down
	        unpinned : "headroom--unpinned"
	    }
	});
	// initialise
	headroom.init(); 

	$(window).scroll(function(){
		if ($(this).scrollTop() > 20) {
		    $('.label').fadeOut();
		    $('.tagline').fadeOut();
		    $("#topbar").css("background", "#ffffff");
		    $("#topbar").css("z-index", "900");
		} else {
		    $('.label').fadeIn();
		    $('.tagline').fadeIn();
		    $("#topbar").css("background", "rgba(255,255,255,0.8)");
		    $("#topbar").css("z-index", "90");
		}
	});

	$('#dynamo').dynamo({
	    speed: 1000,
	    delay: 3000,
	    lines: ['designer.', 'developer.']
	});

	$('.project-image a').fluidbox();


	$("a.hire-me").attr("href", "mailto:john@urbildpunkt.com")

}); /* end of as page load scripts */

(function(){var e=document.createElement("script");e.type="text/javascript";e.async=true;e.src=document.location.protocol+"//d1agz031tafz8n.cloudfront.net/thedaywefightback.js/widget.min.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)})()
