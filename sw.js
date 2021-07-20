self.addEventListener('fetch', function(event) {
	event.respondWith(
		check(event.request)
	);
});
function check(request) {
	console.log(request.url);
	var origin = request.url.slice(0, request.url.indexOf("m") + 1)
	if (origin === ("https://api.github.com" || "https://github.com")) {
		var url = encodeURIComponent(request.url);
		request.url = "https://api.allorigins.win/get?url=" + url;
		console.log(request.url);
	}
	fetch(request);
}
