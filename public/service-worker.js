const CACHE_NAME = 'stay-safe-cache-v1';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/images/balloon.gif',
  '/images/MDC-anim.gif',
  '/images/bacteria.png',
  '/images/breast.png',
  '/images/pteri1.png',
  '/images/pteri2.png',
  '/images/pteri3.png',
  '/images/pteri4.png',
  '/images/pteri5.png',
  '/images/burger-short.png',
  '/images/Group66.svg',
  '/images/final.svg',
  '/fridge/f2.png',
  '/logo-dark.png',
  '/logo-light.png',
  // '/fry.blend',
  // '/fry.glb',
  '/nine-news.png',
  '/pharma4.gif',
  '/prev-circle.gif',
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    })
  );
});

// Fetch event - serve from cache, falling back to network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Cache hit - return response
      if (response) {
        return response;
      }

      // Clone the request because it can only be used once
      const fetchRequest = event.request.clone();

      return fetch(fetchRequest).then((response) => {
        // Check if we received a valid response
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }

        // Clone the response because it can only be used once
        const responseToCache = response.clone();

        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });

        return response;
      });
    })
  );
});
