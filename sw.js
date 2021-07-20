self.addEventListener('fetch', function(event) {
	event.respondWith(
		check(event.request)
	);
});
function check(request) {
	console.log(request.url);
	var origin = request.url.slice(0, request.url.indexOf("m") + 1);
	console.log(origin);
	var url = encodeURIComponent(request.url);
	url = "https://api.allorigins.win/get?url=" + url;
	console.log(request.url);
	var req = new Request(url);
	return fetch(req);
}
