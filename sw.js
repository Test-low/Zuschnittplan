const CACHE="lowis-zuschnittplaner-v41";
const STATIC_ASSETS=["./manifest.webmanifest","./icon.svg"];

self.addEventListener("install",event=>{
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(STATIC_ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate",event=>{
  event.waitUntil(
    caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener("fetch",event=>{
  if(event.request.method!=="GET") return;

  const request=event.request;
  const url=new URL(request.url);
  const isPage=request.mode==="navigate" ||
    request.destination==="document" ||
    url.pathname.endsWith("/") ||
    url.pathname.endsWith("/index.html");

  if(isPage){
    // HTML immer zuerst online holen. Nur offline auf die zuletzt geladene Seite zurückfallen.
    event.respondWith(
      fetch(request,{cache:"no-store"}).then(response=>{
        if(response && response.ok){
          const copy=response.clone();
          caches.open(CACHE).then(cache=>cache.put("./index.html",copy));
        }
        return response;
      }).catch(async()=>{
        return (await caches.match("./index.html")) ||
               (await caches.match(request)) ||
               Response.error();
      })
    );
    return;
  }

  // Statische Dateien: Cache nutzen, aber im Hintergrund aktualisieren.
  event.respondWith(
    caches.match(request).then(cached=>{
      const network=fetch(request).then(response=>{
        if(response && response.ok){
          const copy=response.clone();
          caches.open(CACHE).then(cache=>cache.put(request,copy));
        }
        return response;
      }).catch(()=>cached);
      return cached || network;
    })
  );
});
