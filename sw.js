const CACHE_NAME = "lowis-zuschnittplaner-v88";
const CORE = ["./", "./index.html", "./manifest.webmanifest", "./icon.svg"];
self.addEventListener("install", event => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(CORE)).catch(() => {}));
});
self.addEventListener("activate", event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k.startsWith("lowis-zuschnittplaner-") && k !== CACHE_NAME).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});
self.addEventListener("fetch", event => {
  if(event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  if(url.origin !== self.location.origin) return;
  event.respondWith((async () => {
    try {
      const fresh = await fetch(event.request, {cache:"no-store"});
      const cache = await caches.open(CACHE_NAME);
      cache.put(event.request, fresh.clone()).catch(() => {});
      return fresh;
    } catch (_) {
      return (await caches.match(event.request)) || (await caches.match("./index.html"));
    }
  })());
});
