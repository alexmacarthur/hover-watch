function e(e,{max:t,delay:n,callback:o,count:l}={}){function i(){o(e),m++,f={time:0,interactions:0},u=!0,null!==t&&m>=t&&a("remove")}function a(t){for(let n in v)e[`${t}EventListener`](n,v[n])}let c=n,r=l,u=!1,m=0,s=0,d=null,f={time:0,interactions:0};const v={mouseover:function(){return u=!1,s=Date.now(),f.interactions++,null!==r&&f.interactions>=r&&(i(),!0)||null!==c&&(d=setTimeout(()=>{i()},c-f.time),d)}.bind(this),mouseleave:function(){return clearTimeout(d),u||void(f.time=f.time+(Date.now()-s))}.bind(this)};return a("add"),{remove:()=>a("remove")}}function t(t,{max:n=null,delay:o=500,count:l=null,callback:i=(()=>{})}={}){let a=(c=t,"string"==typeof c?c=document.querySelectorAll(c):c instanceof NodeList||(c=[c]),[].slice.call(c)).map(t=>new e(t,{delay:o,callback:i,max:n,count:l}));var c;return{remove:()=>{a.forEach(e=>e.remove())}}}export default t;
//# sourceMappingURL=probaclick.modern.js.map