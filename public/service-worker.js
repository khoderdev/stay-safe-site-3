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
	'/images/animatedlogooriginal.gif',
	'/images/eye.png',
	'/images/eyes.png',
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
		caches
			.open(CACHE_NAME)
			.then((cache) => {
				console.log('Caching static assets...');
				return cache.addAll(STATIC_ASSETS);
			})
			.catch((error) => {
				console.error('Pre-caching failed:', error);
			})
			.then(() => {
				console.log('Service Worker installed and assets pre-cached.');
				return self.skipWaiting(); // Force the waiting Service Worker to become active
			})
	);
});

// Clean up old caches during activation
self.addEventListener('activate', (event) => {
	event.waitUntil(
		caches
			.keys()
			.then((cacheNames) => {
				return Promise.all(
					cacheNames
						.filter((name) => name !== CACHE_NAME) // Delete old caches
						.map((name) => caches.delete(name))
				);
			})
			.then(() => {
				console.log('Old caches cleaned up.');
				return self.clients.claim(); // Take control of all clients
			})
	);
});

// Network-first strategy with cache fallback
self.addEventListener('fetch', (event) => {
	// Only handle GET requests
	if (event.request.method !== 'GET') return;

	// Skip non-HTTP(S) requests
	if (!event.request.url.startsWith('http')) return;

	event.respondWith(
		fetch(event.request) // Try fetching from the network first
			.then((response) => {
				// Clone the response to cache it
				const responseToCache = response.clone();

				// Cache successful responses
				if (response.ok) {
					caches
						.open(CACHE_NAME)
						.then((cache) => {
							cache.put(event.request, responseToCache);
						})
						.catch((error) => {
							console.error('Caching failed:', error);
						});
				}

				return response; // Return the network response
			})
			.catch(() => {
				// If the network fails, try serving from the cache
				return caches.match(event.request).then((cachedResponse) => {
					if (cachedResponse) {
						return cachedResponse; // Return the cached response
					}

					// If not in cache and network failed, return an offline fallback
					return new Response('Network error happened', {
						status: 408,
						headers: { 'Content-Type': 'text/plain' },
					});
				});
			})
	);
});
