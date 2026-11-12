/* CurbWhiz: the web app was retired on November 11, 2026 (CurbWhiz is an iPhone app).
   This file replaces the web app's offline worker in browsers that still have it:
   it removes that worker's cached app files and then unregisters itself.
   It does not read or delete saved deals or any other site data. */
self.addEventListener('install', function () {
  self.skipWaiting();
});
self.addEventListener('activate', function (event) {
  event.waitUntil(
    (async function () {
      var keys = await caches.keys();
      await Promise.all(
        keys
          .filter(function (key) { return key.indexOf('dealpilot-shell-') === 0; })
          .map(function (key) { return caches.delete(key); }),
      );
      var windows = await self.clients.matchAll({ type: 'window' });
      await self.registration.unregister();
      windows.forEach(function (client) {
        client.navigate(client.url).catch(function () {});
      });
    })(),
  );
});
