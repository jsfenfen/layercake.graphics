!function(e){var t={};function n(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(o,a,function(t){return e[t]}.bind(null,a));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const o=["client/16b016f799379da56838/main.js","client/16b016f799379da56838/index.1.js","client/16b016f799379da56838/examples_$slug.2.js","client/16b016f799379da56838/guide.3.js","client/16b016f799379da56838/test.4.js","client/16b016f799379da56838/vendors~examples_$slug.5.js"].concat(["favicon.old.png","favicon.png","global.css","hljs.css","layercake-logo-1200_2.png","layercake-logo-1200.png","layercake-logo-128_2.png","layercake-logo-192_2.png","layercake-logo-192.png","layercake-logo-2.ai","layercake-logo-512_2.png","layercake-logo-512.png","layercake-logo-readme.png","layercake-logo.ai","layercake-logo.svg","manifest.json"]),a=new Set(o);self.addEventListener("install",e=>{e.waitUntil(caches.open("cache1536114015328").then(e=>e.addAll(o)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1536114015328"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method)return;const t=new URL(e.request.url);t.protocol.startsWith("http")&&(t.hostname===self.location.hostname&&t.port!==self.location.port||(t.host===self.location.host&&a.has(t.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1536114015328").then(async t=>{try{const n=await fetch(e.request);return t.put(e.request,n.clone()),n}catch(n){const o=await t.match(e.request);if(o)return o;throw n}}))))})}]);