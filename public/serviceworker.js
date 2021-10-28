const CACHE_NAME = "DSC_WEATHER_APP";

const urlsToCache = ["index.html", "offline.html"];

//Self represents the service worker. Used to remove error about restricted globals
const self = this;

//Install Service Worker (SW)
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            //Happens just the first time user loads app
            return cache.addAll(urlsToCache);
        })
    );
});

//Listen for requests
self.addEventListener("fetch", (event) => {
    event.respondWith(
        //Match all requests our page is sending and receiving
        caches.match(event.request).then(() => {
            //When there's something to fetch, simply fetch it so as to get the updated data. If not, show offline page if user is offline
            return fetch(event.request).catch(() => caches.match("offline.html"));
        })
    );
});

//Activate the Service Worker(SW)
self.addEventListener("activate", (event) => {
    //We could have a lot of data in our cache, so always remove stale data and leave only the most recent data
    const cacheWhitelist = [];
    cacheWhitelist.push(CACHE_NAME);

    event.waitUntil(
        caches.keys().then((cacheNames) =>
            Promise.all(
                cacheNames.map((cacheName) => {
                    if (!cacheWhitelist.includes(cacheName)) {
                        return caches.delete(cacheName);
                    }
                })
            )
        )
    );
});
