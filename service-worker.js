self.addEventListener('install', e => {
  const files = [
    '/faults/',
    '/faults/index.html',
    '/faults/manifest.json',
    '/faults/service-worker.js',
    '/faults/app_icon.png'
  ];
  e.waitUntil(
    caches.open('fault-cache-v3').then(c => c.addAll(files))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
