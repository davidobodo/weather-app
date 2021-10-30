const CACHE_NAME = "DSC_WEATHER_APP";

const self = this;

//Install Service Worker (SW)
self.addEventListener("install", (event) => {
    //Since we want to cache the entire site, no need to perform any action here
});

//Activate the Service Worker(SW)
self.addEventListener("activate", (event) => {
    //Get rid of all old caches
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});

//Listen for requests
self.addEventListener("fetch", (event) => {
    if (!(event.request.url.indexOf("http") === 0)) return; // skip the request. if request is not made with http protocol
    event.respondWith(
        (async function () {
            const cache = await caches.open(CACHE_NAME);
            const cachedFiles = await cache.match(event.request);
            try {
                const response = await fetch(event.request);
                await cache.put(event.request, response.clone());
                return response;
            } catch (e) {
                return cachedFiles;
            }
        })()
    );
});
