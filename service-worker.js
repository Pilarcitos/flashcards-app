const CACHE_NAME = "phys220-flashcards-v3";
const PRECACHE_URLS = [
  "./index.html",
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./phys220-audio/01_q.mp3",
  "./phys220-audio/01_a.mp3",
  "./phys220-audio/02_q.mp3",
  "./phys220-audio/02_a.mp3",
  "./phys220-audio/03_q.mp3",
  "./phys220-audio/03_a.mp3",
  "./phys220-audio/04_q.mp3",
  "./phys220-audio/04_a.mp3",
  "./phys220-audio/05_q.mp3",
  "./phys220-audio/05_a.mp3",
  "./phys220-audio/06_q.mp3",
  "./phys220-audio/06_a.mp3",
  "./phys220-audio/07_q.mp3",
  "./phys220-audio/07_a.mp3",
  "./phys220-audio/08_q.mp3",
  "./phys220-audio/08_a.mp3",
  "./phys220-audio/09_q.mp3",
  "./phys220-audio/09_a.mp3",
  "./phys220-audio/10_q.mp3",
  "./phys220-audio/10_a.mp3",
  "./phys220-audio/11_q.mp3",
  "./phys220-audio/11_a.mp3",
  "./phys220-audio/12_q.mp3",
  "./phys220-audio/12_a.mp3",
  "./phys220-audio/13_q.mp3",
  "./phys220-audio/13_a.mp3",
  "./phys220-audio/14_q.mp3",
  "./phys220-audio/14_a.mp3",
  "./phys220-audio/15_q.mp3",
  "./phys220-audio/15_a.mp3",
  "./phys220-audio/16_q.mp3",
  "./phys220-audio/16_a.mp3",
  "./phys220-audio/17_q.mp3",
  "./phys220-audio/17_a.mp3",
  "./phys220-audio/18_q.mp3",
  "./phys220-audio/18_a.mp3",
  "./phys220-audio/19_q.mp3",
  "./phys220-audio/19_a.mp3",
  "./phys220-audio/20_q.mp3",
  "./phys220-audio/20_a.mp3",
  "./phys220-audio/21_q.mp3",
  "./phys220-audio/21_a.mp3",
  "./phys220-audio/22_q.mp3",
  "./phys220-audio/22_a.mp3",
  "./phys220-audio/23_q.mp3",
  "./phys220-audio/23_a.mp3",
  "./phys220-audio/24_q.mp3",
  "./phys220-audio/24_a.mp3",
  "./phys220-audio/25_q.mp3",
  "./phys220-audio/25_a.mp3",
  "./phys220-audio/26_q.mp3",
  "./phys220-audio/26_a.mp3",
  "./phys220-audio/27_q.mp3",
  "./phys220-audio/27_a.mp3",
  "./phys220-audio/28_q.mp3",
  "./phys220-audio/28_a.mp3",
  "./phys220-audio/29_q.mp3",
  "./phys220-audio/29_a.mp3",
  "./phys220-audio/30_q.mp3",
  "./phys220-audio/30_a.mp3",
  "./phys220-audio/31_q.mp3",
  "./phys220-audio/31_a.mp3",
  "./phys220-audio/32_q.mp3",
  "./phys220-audio/32_a.mp3"
];

self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS))
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(names.filter((n) => n !== CACHE_NAME).map((n) => caches.delete(n)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).then((response) => {
        if (response && response.status === 200 && event.request.method === "GET") {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        }
        return response;
      }).catch(() => cached);
    })
  );
});
