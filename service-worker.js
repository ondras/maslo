const CACHE = "";

function cacheable(request) {
	return (request.method.toLowerCase() == "get");
}

async function purgeCaches() {
	let ourNames = [CACHE];
	let allNames = await caches.keys();
	let toDelete = allNames.filter(name => !ourNames.includes(name));
	let deletePromises = toDelete.map(name => caches.delete(name));
	return Promise.all(deletePromises);
}

async function processRequest(request) {
	let cached = await caches.match(request);
	if (cached) { return cached; }

	let [cache, response] = await Promise.all([
		caches.open(CACHE),
		fetch(request)
	]);
	await cache.put(request, response.clone());
	return response;
}

function onActivate(e) {
	e.waitUntil(purgeCaches());
}

function onFetch(e) {
	let r = e.request;
	if (!cacheable(r)) { return; }
	e.respondWith(processRequest(r));
}

self.addEventListener("activate", onActivate);
self.addEventListener("fetch", onFetch);
