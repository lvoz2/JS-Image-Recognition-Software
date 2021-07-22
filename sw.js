self.addEventListener('fetch', function(event) {
	event.respondWith(
		check(event.request)
	);
});
function check(request) {
	console.log(request.url);
	var origin = request.url.slice(0, request.url.indexOf("m") + 1);
	console.log(origin);
	var scope = {};
	if (origin == "https://api.github.com") {
		scope.url = "https://keep-header-proxy.herokuapp.com/" + scope.url;
	}
	else if (origin == "https://github.com") {
		scope.url = "https://keep-header-proxy.herokuapp.com/" + scope.url;
	}
	else {
		scope.url = request.url;
	}
	console.log(request.url);
	var req = new Request(scope.url);
	return fetch(req);
}
