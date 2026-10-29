// 生活帳本 service worker — 更新 App 時把版本號 +1
const CACHE = 'closet-v8';
const ASSETS = ['./', 'index.html', 'manifest.webmanifest',
  'icons/icon-180.png', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/icon-maskable-512.png', 'icons/favicon-64.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return; // 匯率 API 等外部請求直接走網路
  if (req.mode === 'navigate') {
    // 先試網路（3 秒內），拿到就更新快取；沒網路或太慢就用快取
    e.respondWith((async () => {
      const cache = await caches.open(CACHE);
      try {
        const res = await Promise.race([
          fetch(req),
          new Promise((_, rej) => setTimeout(() => rej(new Error('timeout')), 3000))
        ]);
        if (res && res.ok) cache.put('index.html', res.clone());
        return res;
      } catch (err) {
        return (await cache.match('index.html')) || (await cache.match('./')) || Response.error();
      }
    })());
    return;
  }
  e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => {
    if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
    return res;
  })));
});
