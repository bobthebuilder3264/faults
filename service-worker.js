self.addEventListener('install', e => {
  const files = ['/', '/index.html', '/manifest.json', '/service-worker.js', '/icon.png'];
  e.waitUntil(caches.open('fault-cache').then(c => c.addAll(files)));
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
