if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,a)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>n(e,c),o={module:{uri:c},exports:t,require:r};s[c]=Promise.all(i.map((e=>o[e]||r(e)))).then((e=>(a(...e),t)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"77a407b2e9a7750569564ded4e25a66e"},{url:"/_next/static/BSfRYgQTHiDvBbwEt530S/_buildManifest.js",revision:"17bdd52420b570d724cef16a1417facb"},{url:"/_next/static/BSfRYgQTHiDvBbwEt530S/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/417.36e7ee3323c6643b.js",revision:"36e7ee3323c6643b"},{url:"/_next/static/chunks/429-1b30dfd681c94dff.js",revision:"BSfRYgQTHiDvBbwEt530S"},{url:"/_next/static/chunks/4bd1b696-843266b6bb2dc524.js",revision:"BSfRYgQTHiDvBbwEt530S"},{url:"/_next/static/chunks/587-bef731049b6106c2.js",revision:"BSfRYgQTHiDvBbwEt530S"},{url:"/_next/static/chunks/app/_not-found/page-5c0fe72f603f6d0c.js",revision:"BSfRYgQTHiDvBbwEt530S"},{url:"/_next/static/chunks/app/layout-0543e1a3ae7586b2.js",revision:"BSfRYgQTHiDvBbwEt530S"},{url:"/_next/static/chunks/app/page-0dfbcb8768e760c9.js",revision:"BSfRYgQTHiDvBbwEt530S"},{url:"/_next/static/chunks/framework-859199dea06580b0.js",revision:"BSfRYgQTHiDvBbwEt530S"},{url:"/_next/static/chunks/main-9eefe8d1add71f8e.js",revision:"BSfRYgQTHiDvBbwEt530S"},{url:"/_next/static/chunks/main-app-e0fe032f01c9487d.js",revision:"BSfRYgQTHiDvBbwEt530S"},{url:"/_next/static/chunks/pages/_app-eef484fc49b57a90.js",revision:"BSfRYgQTHiDvBbwEt530S"},{url:"/_next/static/chunks/pages/_error-5933f280f2bada68.js",revision:"BSfRYgQTHiDvBbwEt530S"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-13036dfaf9ea94c1.js",revision:"BSfRYgQTHiDvBbwEt530S"},{url:"/_next/static/css/00982422ddaebc7c.css",revision:"00982422ddaebc7c"},{url:"/_next/static/media/26a46d62cd723877-s.woff2",revision:"befd9c0fdfa3d8a645d5f95717ed6420"},{url:"/_next/static/media/55c55f0601d81cf3-s.woff2",revision:"43828e14271c77b87e3ed582dbff9f74"},{url:"/_next/static/media/581909926a08bbc8-s.woff2",revision:"f0b86e7c24f455280b8df606b89af891"},{url:"/_next/static/media/6d93bde91c0c2823-s.woff2",revision:"621a07228c8ccbfd647918f1021b4868"},{url:"/_next/static/media/97e0cb1ae144a2a9-s.woff2",revision:"e360c61c5bd8d90639fd4503c829c2dc"},{url:"/_next/static/media/a34f9d1faa5f3315-s.p.woff2",revision:"d4fe31e6a2aebc06b8d6e558c9141119"},{url:"/_next/static/media/df0a9ae256c0569c-s.woff2",revision:"d54db44de5ccb18886ece2fda72bdfe0"},{url:"/background.jpg",revision:"13e491f9abc172bc326a5edd7dfed4d9"},{url:"/file.svg",revision:"d09f95206c3fa0bb9bd9fefabfd0ea71"},{url:"/globe.svg",revision:"2aaafa6a49b6563925fe440891e32717"},{url:"/icons/android-launchericon-144-144.png",revision:"04847e13e6f010f7a463d058e1764d05"},{url:"/icons/android-launchericon-192-192.png",revision:"c62ec161e6cd3e0462096d3264c14f54"},{url:"/icons/android-launchericon-72-72.png",revision:"a744ae3c89d2877fae59d378078aadfd"},{url:"/icons/android-launchericon-96-96.png",revision:"fd526b07edc96f401fcda8d78f73cc70"},{url:"/icons/icon-192*192.png",revision:"581e79245927ab92ae4d7109d8eb2afd"},{url:"/icons/icon-512*512.png",revision:"24d98533e2367cebbbf777a2ccd69118"},{url:"/icons/icon512_maskable.png",revision:"11f700e29004f248596a02181cac839a"},{url:"/icons/icon512_rounded.png",revision:"666a52b8ab8235106dde70ca42a37ada"},{url:"/manifest.json",revision:"2fc65e2630650f843af247f6457f2f8e"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"c0af2f507b369b085b35ef4bbe3bcf1e"},{url:"/window.svg",revision:"a2760511c65806022ad20adf74370ff3"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
