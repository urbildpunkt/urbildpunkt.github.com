var navigation=responsiveNav(".nav-collapse",{customToggle:"#nav-toggle"}),myElement=document.querySelector(".nav-bar"),headroom=new Headroom(myElement);headroom.init(),tabby.init({toggleActiveClass:"active",contentActiveClass:"active",initClass:"js-tabby",callbackBefore:function(){},callbackAfter:function(){}});