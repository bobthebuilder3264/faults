self.addEventListener('install', e => {
  const files = [
    '/',
    '/index.html',
    '/manifest.json',
    '/service-worker.js',
    '/logo.png'
  ];
  e.waitUntil(
    caches.open('fault-cache-v2').then(c => c.addAll(files))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
