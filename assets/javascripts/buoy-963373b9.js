window.buoy=function(s,e){"use strict";var n=e.documentElement.classList,t=function(s,e){return n?s.classList.contains(e):new RegExp("(^|\\s)"+e+"(\\s|$)").test(s.className)},a=function(s,e){t(s,e)||(n?s.classList.add(e):s.className+=(s.className?" ":"")+e)},c=function(s,e){t(s,e)&&(n?s.classList.remove(e):s.className=s.className.replace(new RegExp("(^|\\s)*"+e+"(\\s|$)*","g"),""))},i=function(s,e){n?s.classList.toggle(e):t(s,e)?c(s,e):a(s,e)},l=function(s){for(var e=[],n=s.parentNode.firstChild;n;n=n.nextSibling)1==n.nodeType&&n!=s&&e.push(n);return e};return{toggleClass:i,removeClass:c,addClass:a,hasClass:t,getSiblings:l}}(window,document);