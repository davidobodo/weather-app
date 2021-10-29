const CACHE_NAME = "DSC_WEATHER_APP";

const urlsToCache = ["index.html", "offline.html"];

//Self represents the service worker. Used to remove error about restricted globals
const self = this;

//Install Service Worker (SW)
self.addEventListener("install", (event) => {
    console.log("SERVICE WORKER INSTALLED============");
    // event.waitUntil(
    //     caches.open(CACHE_NAME).then((cache) => {
    //         //Happens just the first time user loads app
    //         return cache.addAll(urlsToCache);
    //     })
    //     // .then(() => self.skipWaiting())
    // );
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
    //METHOD 1
    //Show cache files if we are offline
    // event.respondWith(
    //     //Match all requests our page is sending and receiving
    //     caches.match(event.request).then(() => {
    //         //When there's something to fetch, simply fetch it so as to get the updated data. If not, show offline page if user is offline
    //         return fetch(event.request).catch(() => caches.match("offline.html"));
    //     })
    // );

    //METHOD 2
    // event.respondWith(
    //     fetch(event.request).catch(() => caches.match(event.request))
    // );

    console.log("FETCHING REQUEST ============");

    // check if request is made by chrome extensions or web page
    // if request is made for web page url must contain http.
    if (!(event.request.url.indexOf("http") === 0)) return; // skip the request. if request is not made with http protocol

    //method 3
    // event.respondWith(
    //     fetch(event.request)
    //         .then((res) => {
    //             //After a network request is made, make a copy of the response returned
    //             const resClone = res.clone();

    //             //Open the cache
    //             caches.open(CACHE_NAME).then((cache) => {
    //                 //Add the response to the cache
    //                 cache.put(event.request, resClone);
    //             });

    //             console.log(res, "THE FINAL RESPONSE");
    //             //Return the response
    //             return res;
    //         })
    //         .catch((err) => {
    //             console.log(err, "THE ERRPR");

    //             //If we get here then user is offline. In this case, we return the response in the cache
    //             caches.match(event.request).then((res) => res);
    //         })
    // );
    event.respondWith(
        caches.match(event.request).then(() => {
            return fetch(event.request)
                .then((res) => {
                    //After a network request is made, make a copy of the response returned
                    const resClone = res.clone();

                    //Open the cache
                    caches.open(CACHE_NAME).then((cache) => {
                        //Add the response to the cache
                        cache.put(event.request, resClone);
                    });

                    console.log(res, "THE FINAL RESPONSE");
                    //Return the response
                    return res;
                })
                .catch((err) => {
                    console.log(err, "THE ERRPR");

                    //If we get here then user is offline. In this case, we return the response in the cache
                    caches.match(event.request).then((res) => {
                        console.log(res, "THE RESPONSE IN THE ERROR");

                        return res;
                    });
                });
        })
    );
});
