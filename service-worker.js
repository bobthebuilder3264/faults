self.addEventListener('install', e => {
  const files = [
  '/trial/',
  '/trial/index.html',
  '/trial/manifest.json',
  '/trial/service-worker.js',
  '/trial/icon.png'
];
  e.waitUntil(caches.open('fault-cache').then(c => c.addAll(files)));
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
