!function(e){var t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=0)}([function(e,t,a){a(1),e.exports=a(3)},function(e,t,a){"use strict";a.r(t);a(2)},function(e,t){document.getElementById("menu-cross").addEventListener("click",()=>{document.getElementById("menu").classList.remove("active")}),document.getElementById("menu-caller").addEventListener("click",()=>{document.getElementById("menu").classList.add("active")}),document.getElementById("modal-close").addEventListener("click",()=>{document.getElementById("site").classList.remove("overflow"),document.getElementById("modal").className=""});let a=["Технокультура","Eventoutlet","Rocket Shina","ПСК","Balkan LPG Market","Hamcore"],n=["techno","event","rocket","psk","balcan","hamcore"],r=document.getElementById("modal");document.querySelectorAll(".case").forEach(e=>{e.addEventListener("click",t=>{t.preventDefault(),r.classList.add("active"),r.classList.add(n[e.dataset.number]),document.getElementById("site").classList.add("overflow"),document.getElementById("project-name-modal").innerHTML=a[e.dataset.number]})});let c=["what-know-art","philosophy-art","four-hell-circles-art","why-tilda-art","how-much-art","micro-interface-art","dark-patternt-art","harizmatic-art","balkan-conf-art","eventoutleet-art"];document.querySelectorAll(".article-cart").forEach(e=>{e.addEventListener("click",t=>{t.preventDefault(),r.classList.add("active"),r.classList.add("headless"),r.classList.add(c[e.dataset.number])})}),window.location.href.indexOf("why-tilda")>-1&&(r.classList.add("active"),r.classList.add("headless"),r.classList.add(c[3])),window.location.href.indexOf("how-much")>-1&&(r.classList.add("active"),r.classList.add("headless"),r.classList.add(c[4])),window.location.href.indexOf("what-know")>-1&&(r.classList.add("active"),r.classList.add("headless"),r.classList.add(c[0]))},function(e,t,a){}]);
//# sourceMappingURL=bundle.js.map