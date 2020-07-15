const CACHE_NAME = "Calculator";
const urlsToCache = [
  '/',
  '/calculator.png',
  '/calculator@2x.png',
  '/asset-manifest.json',
  '/manifest.json',
  '/index.html',
  '/service-worker.js',
  '/static/js/runtime-main.dbea8c01.js',
  "/static/js/2.d01a7469.chunk.js",
  "/static/css/main.33e94821.chunk.css",
  '/static/js/main.4ea3b387.chunk.js',
   "https://media.giphy.com/media/26tn6Me6pD4Bel37G/giphy-downsized.gif",
];
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
self.addEventListener('install',e=>{
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache.addAll(urlsToCache));
  )
})
self.addEventListener('activate', e=> {
  e.waitUntil(
    caches.keys().then(cacheNames=> {
      return Promise.all(
        cacheNames.filter(function(cacheName){}).map(function(cacheName){return caches.delete(cacheName)});
      )
    })
  )
})
self.addEventListener('fetch',e => {
  e.respondWith(caches.match(e.request).then(function(response){
    if(response){
      console.log('Found in Cache');
      console.log(e.request);
      console.log(response);
      return response;
    }
    console.log('Not found in Cache. Calling Network')
    console.log(e.request);
    return fetch(e.request);
  }))
}) 