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
  "/static/js/runtime-main.dbea8c01.js",
  "/static/js/2.d01a7469.chunk.js",
  "/static/css/main.26f90762.chunk.css",
  "/static/js/main.4ea3b387.chunk.js",
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
