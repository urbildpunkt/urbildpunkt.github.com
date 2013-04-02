 	$(document).ready( function(){
  		//Mobile Navigation
  		var pull 		= $('#pull');
					menu 		= $('nav ul');
					menuHeight	= menu.height();

				$(pull).on('click', function(e) {
					e.preventDefault();
					menu.slideToggle();
				});

				$(window).resize(function(){
					var w = $(window).width();
					if(w > 320 && menu.is(':hidden')) {
						menu.removeAttr('style');
					}
				});
  		
  		//Get the canvas & context
  		var c = $('#respondCanvas');
  		var ct = c.get(0).getContext('2d');
  		var container = $(c).parent();
  		var p = Processing.getInstanceById('respondCanvas');
  		
  		//Run function when browser  resize
	  	$(window).resize(function() {
			respondCanvas();
			});;
					
	  	function respondCanvas(){
  			c.attr('width', $(container).width() ); //max width
  			c.attr('height', $(container).height() ); //max height
  			
  			//Redraw & reposition content
  			var x = c.width();
  			var y = c.height(); 			
		
		}
		
		//Initial call
		respondCanvas();
		$.superbox();
  	});
  	
