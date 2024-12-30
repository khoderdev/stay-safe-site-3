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
  '/nine-news.png',
  '/pharma4.gif',
  '/prev-circle.gif',
];

// Cache static assets during installation
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        // Pre-cache all static assets
        return cache.addAll(STATIC_ASSETS)
          .catch(error => {
            console.error('Pre-caching failed:', error);
            // Continue installation even if some assets fail to cache
            return Promise.resolve();
          });
      })
      .then(() => {
        // Force waiting service worker to become active
        return self.skipWaiting();
      })
  );
});

// Clean up old caches during activation
self.addEventListener('activate', (event) => {
  event.waitUntil(
    Promise.all([
      // Clean up old caches
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((name) => name !== CACHE_NAME)
            .map((name) => caches.delete(name))
        );
      }),
      // Take control of all clients
      self.clients.claim()
    ])
  );
});

// Network-first strategy with cache fallback
self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  // Skip non-HTTP(S) requests
  if (!event.request.url.startsWith('http')) return;

  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Clone the response before using it
        const responseToCache = response.clone();

        // Cache successful responses
        if (response.ok) {
          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            })
            .catch(error => {
              console.error('Caching failed:', error);
            });
        }

        return response;
      })
      .catch(() => {
        // If network fails, try cache
        return caches.match(event.request)
          .then(cachedResponse => {
            if (cachedResponse) {
              return cachedResponse;
            }
            
            // If not in cache and network failed, return offline fallback
            return new Response('Network error happened', {
              status: 408,
              headers: { 'Content-Type': 'text/plain' },
            });
          });
      })
  );
});
