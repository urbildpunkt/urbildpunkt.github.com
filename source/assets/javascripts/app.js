var navigation = responsiveNav(".nav-collapse", {
        customToggle: "#nav-toggle"
      });

// grab an element
var myElement = document.querySelector(".nav-bar");
// construct an instance of Headroom, passing the element
var headroom  = new Headroom(myElement);
// initialise
headroom.init(); 

tabby.init({
    toggleActiveClass: 'active', // Class added to active toggle elements
    contentActiveClass: 'active', // Class added to active tab content areas
    initClass: 'js-tabby', // Class added to <html> element when initiated
    callbackBefore: function () {}, // Function that's run before tab content is toggled
    callbackAfter: function () {} // Function that's run after tab content is toggled
});
