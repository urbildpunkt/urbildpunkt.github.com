window.tabby=function(t,e){"use strict";var a={toggleActiveClass:"active",contentActiveClass:"active",initClass:"js-tabby",callbackBefore:function(){},callbackAfter:function(){}},o=function(t,e){for(var a in e)t[a]=e[a];return t},l=function(t){var e=t.querySelector("iframe"),a=t.querySelector("video");if(null!==e){var o=e.src;e.src=o}null!==a&&a.pause()},n=function(t,e,a){Array.prototype.forEach.call(t,function(t){buoy.removeClass(t,a.toggleActiveClass)}),Array.prototype.forEach.call(e,function(t){buoy.removeClass(t,a.toggleActiveClass)})},r=function(t,e){Array.prototype.forEach.call(t,function(t){buoy.removeClass(t,e.contentActiveClass),l(t)})},c=function(t,e){Array.prototype.forEach.call(t,function(t){var a=buoy.getSiblings(t);buoy.addClass(t,e.contentActiveClass),r(a,e)})},i=function(t,l,r,i){r=o(a,r||{});var s=e.querySelectorAll(l),u=t.parentNode,f=buoy.getSiblings(t),y=buoy.getSiblings(u);t&&"A"===t.tagName&&i&&i.preventDefault(),r.callbackBefore(),buoy.addClass(t,r.toggleActiveClass),buoy.addClass(u,r.toggleActiveClass),n(y,f,r),c(s,r),r.callbackAfter()},s=function(l){if("querySelector"in e&&"addEventListener"in t&&Array.prototype.forEach){l=o(a,l||{});var n=e.querySelectorAll("[data-tab]");buoy.addClass(e.documentElement,l.initClass),Array.prototype.forEach.call(n,function(t){t.addEventListener("click",i.bind(null,t,t.getAttribute("data-tab"),l),!1)})}};return{init:s,toggleTab:i}}(window,document);