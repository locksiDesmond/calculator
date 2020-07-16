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
  "/calculator/precache-manifest.2314f0365596d43cce08a005c25264d4.js"
)
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
const CACHE_NAME = "Calculator";
const urlsToCache = [
  "/",
  "/calculator.png",
  "/calculator-192.png",
  "/calculator-512.png",
  "/asset-manifest.json",
  "/manifest.json",
  "/index.html",
  "/service-worker.js",
  "/static/js/runtime-main.51f5447e.js",
  "/static/js/2.f8a0faba.chunk.js",
  "/static/css/main.e360c61c.chunk.css",
  "/static/js/main.272bdabf.chunk.js",
  "https://media.giphy.com/media/26tn6Me6pD4Bel37G/giphy-downsized.gif",
  "/static/media/delete.5b9af152.svg",
  "/static/media/divide.973e2023.svg",
  "/static/media/Menu-dark.e579ef55.svg",
  "/static/media/Menu-light.dc3051bb.svg",
  "/static/media/No light.ac8fbffd.svg",
  "/static/media/No-dark.f67ee90b.svg",
  "/static/media/Switch off.637ef6a1.svg",
  "/static/media/Switch On.28eaa68c.svg",
];
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter(function (cacheName) {})
          .map(function (cacheName) {
            return caches.delete(cacheName);
          })
      );
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
      try {
        return fetch(e.request);
      } catch (e) {
        return;
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

