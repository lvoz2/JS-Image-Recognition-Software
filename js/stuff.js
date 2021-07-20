import { Octokit } from "https://cdn.skypack.dev/@octokit/rest";
import { createOAuthAppAuth } from "https://cdn.skypack.dev/@octokit/auth-oauth-app";
if ('serviceWorker' in navigator) {
	window.addEventListener('load', function() {
		navigator.serviceWorker.register('sw.js').then(function(registration) {
			console.log('Service worker registered with scope: ', registration.scope);
		}, function(err) {
			console.log('ServiceWorker registration failed: ', err);
		});
	});
}
window.windowAuth = function() {
	var popup = window.open("https://github.com/login/oauth/authorize?client_id=7415eb3be51e7222a91c&scope=repo", "", "width=960,height=540");
	window.addEventListener("message", (event) => {
		// Do we trust the sender of this message?  (might be
		// different from what we originally opened, for example).
		console.log(event);
		var checkloc = event.data.indexOf("=");
		var check = event.data.slice(0, checkloc + 1);
		if ("idbfwhbwaidhglhjgllbrhwvurjkghdahsjgufhvbawufghksjhdgauysfbvqywurbvquywbvuwqdv=" !== check) {
			return 0;
		}
		var url = event.data;
		url = url.toString();
		var codelocation = url.indexOf("=");
		var code = url.slice(codelocation + 1);
		popup.close()
		var ghendpoint = 'https://github.com/login/oauth/access_token?client_id=7415eb3be51e7222a91c&client_secret=f43a1da2796648bb8f8d98a166ff3278d7843624&code=' + code;
		$.get("https://api.allorigins.win/get?url=" + encodeURIComponent(ghendpoint), function (access_token) {
			// Step 7
			console.log(access_token.contents);
			var token_loc_start = access_token.contents.indexOf("=");
			var token_loc_end = access_token.contents.indexOf("&");
			var token = access_token.contents.slice(token_loc_start + 1, token_loc_end);
			console.log(token);
			var endpoint = 'https://api.github.com/';
			get("GET", endpoint, ["Authorization"], [token])
		});
	}, false);
}
window.authenticate = async function() {
	window.OAuth = createOAuthAppAuth({
		clientType: "oauth-app",
		clientId: "7415eb3be51e7222a91c",
		clientSecret: "f43a1da2796648bb8f8d98a166ff3278d7843624"
	});
	window.userAuthenticationFromWebFlow = await OAuth({
		type: "oauth-user",
		code: "random123",
		state: "mystate123"
	});
	window.octokit = new Octokit({
		authStrategy: createOAuthAppAuth,
		auth: userAuthenticationFromWebFlow
	});
	window.appOctokit = new Octokit({
		authStrategy: createAppAuth,
		auth: {
			appId: 123,
			privateKey: process.env.PRIVATE_KEY,
			// optional: this will make appOctokit authenticate as app (JWT)
			//           or installation (access token), depending on the request URL
			installationId: 123,
		},
	});
}
window.sendNewData = async function() {
	window.contents = octokit.rest.repos.getContent({
		owner: 'lvoz2',
		repo: 'JS-Image-Recognition-Software',
		path: 'text.txt'
	})
	/*
	octokit.rest.repos.createOrUpdateFileContents({
		owner: 'lvoz2',
		repo: 'JS-Image-Recognition-Software',
		path: 'text.txt',
		message: 'Add new data',
		content: 'Hey'
	})
	*/
}
window.test = function() {
	window.octokit = new Octokit({
		auth: code
	});
}
window.get = function(method, url, headers_to_set, header_values) {
	var xhr = new XMLHttpRequest();
	xhr.open(method, "https://api.allorigins.win/get?url=" + encodeURIComponent(url));
	for (var i = 0; i <= headers_to_set.length; i++) {
		xhr.setRequestHeader(headers_to_set[i], header_values[i])
	}
	xhr.send()
}
