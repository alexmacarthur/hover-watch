function n(n,e){var t=void 0===e?{}:e,o=t.max,i=t.callback;function r(){i(n),m++,f={time:0,interactions:0},a=!0,null!==o&&m>=o&&u("remove")}function u(e){for(var t in s)n[e+"EventListener"](t,s[t])}var c=t.delay,l=t.count,a=!1,m=0,v=0,d=null,f={time:0,interactions:0},s={mouseover:function(){return a=!1,v=Date.now(),f.interactions++,null!==l&&f.interactions>=l&&(r(),!0)||null!==c&&(d=setTimeout(function(){r()},c-f.time))}.bind(this),mouseleave:function(){return clearTimeout(d),a||void(f.time=f.time+(Date.now()-v))}.bind(this)};return u("add"),{remove:function(){return u("remove")}}}module.exports=function(e,t){var o,i=void 0===t?{}:t,r=i.max,u=void 0===r?null:r,c=i.delay,l=void 0===c?500:c,a=i.count,m=void 0===a?null:a,v=i.callback,d=void 0===v?function(){}:v,f=(o=e,"string"==typeof o?o=document.querySelectorAll(o):o instanceof NodeList||(o=[o]),[].slice.call(o)).map(function(e){return new n(e,{delay:l,callback:d,max:u,count:m})});return{remove:function(){f.forEach(function(n){return n.remove()})}}};
//# sourceMappingURL=probaclick.js.map