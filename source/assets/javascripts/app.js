var navigation = responsiveNav(".nav-collapse", {
        customToggle: "#nav-toggle"
      });

// grab an element
var myElement = document.querySelector(".nav-bar");
// construct an instance of Headroom, passing the element
var headroom  = new Headroom(myElement);
// initialise
headroom.init(); 
