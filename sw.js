self.addEventListener('fetch', function(event) {
	console.log(event);
	console.log(event.request.url);
	var origin = event.request.url.slice(0, event.request.url.indexOf("m") + 1)
	if (origin === ("https://api.github.com"||"https://github.com")) {
		var url = encodeURIComponent(event.request.url);
		event.request.url = "https://api.allorigins.win/get?url=" + url;
		console.log(event.request.url);
	}
	event.respondWith(
		console.log(event)
		console.log(event.request.url)
		var origin = event.request.url.slice(0, event.request.url.indexOf("m") + 1)
		if (origin === ("https://api.github.com"||"https://github.com")) {
			var url = encodeURIComponent(event.request.url)
			event.request.url = "https://api.allorigins.win/get?url=" + url
			console.log(event.request.url)
		}
		fetch(event.request)
	);
});

