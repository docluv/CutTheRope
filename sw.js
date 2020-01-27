const preCacheName = "pre-cache-solitaire",
    preCacheFiles = [
        "/",
        "assets/bg.jpg",
        "lib/jquery-2.1.0.js",
        "lib/ion.sound.min.js",
        "src/sound.js",
    ];


self.addEventListener("install", event => {

    console.log("installing precache files");

    caches.open(preCacheName).then(function (cache) {

        return cache.addAll(preCacheFiles);

    });

});

self.addEventListener("fetch", event => {

    event.respondWith(

        caches.match(event.request).then(response => {

            if (!response) {

                //fall back to the network fetch
                return fetch(event.request);

            }

            return response;

        })

    )

});
