/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");
;
importScripts(
  "/calculator/precache-manifest.01e6200914c016bd05ca5f8825b0ac72.js"
)
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
const CACHE_NAME = "Calculator";
const urlsToCache = [
  "/calculator/",
  "https://locksidesmond.github.io/calculator/",
  "/calculator/calculator.png",
  "/calculator/calculator-192.png",
  "/calculator/calculator-512.png",
  "/calculator/asset-manifest.json",
  "/calculator/manifest.json",
  "/calculator/index.html",
  "/calculator/service-worker.js",
  "/calculator/static/js/2.ac3159fe.chunk.js",
  "/calculator/static/js/main.2dc80f68.chunk.js",
  "/calculator/static/js/runtime-main.51f5447e.js",
  "/calculator/static/css/main.e360c61c.chunk.css",
  "https://media.giphy.com/media/26tn6Me6pD4Bel37G/giphy-downsized.gif",
  "/calculator/static/media/delete.5b9af152.svg",
  "/calculator/static/media/divide.973e2023.svg",
  "/calculator/static/media/Menu-dark.e579ef55.svg",
  "/calculator/static/media/Menu-light.dc3051bb.svg",
  "/calculator/static/media/No light.ac8fbffd.svg",
  "/calculator/static/media/No-dark.f67ee90b.svg",
  "/calculator/static/media/Switch off.637ef6a1.svg",
  "/calculator/static/media/Switch On.28eaa68c.svg",
];
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((cacheNames) => {
      try {
 return Promise.all(
        cacheNames
          .map(function (cacheName) {
            return caches.delete(cacheName);
          })
      );
      }catch (err){
        console.log(err);
      }
     
    })
  );
});
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then(function (response) {
      if (response) {
        console.log("Found in Cache");
        console.log(e.request);
        console.log(response);
        return response;
      }
      console.log("Not found in Cache. Calling Network");
      console.log(e.request);
      try{
        return fetch(e.request);
      }catch(err){
        console.log(err);
      }
      
    })
  );
});

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("./index.html"), {
  
  blacklist: [/^\/_/,/\/[^/?]+\.[^/]+$/],
});

