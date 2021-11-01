import { Octokit } from "/@octokit/rest.js";
var octokit;
var scope = {};
window.windowAuth = function(callback, param) {
	scope.popup = window.open("https://github.com/login/oauth/authorize?client_id=7415eb3be51e7222a91c&scope=repo", "", "width=960,height=540");
	console.log(scope.popup);
	window.addEventListener("message", (event) => {
		console.log(scope.popup);
		var checkloc = event.data.indexOf("=");
		var check = event.data.slice(0, checkloc + 1);
		if ("idbfwhbwaidhglhjgllbrhwvurjkghdahsjgufhvbawufghksjhdgauysfbvqywurbvquywbvuwqdv=" !== check) {
			return 0;
		}
		var url = event.data;
		url = url.toString();
		var codelocation = url.indexOf("=");
		var code = url.slice(codelocation + 1);
		scope.popup.close()
		var ghendpoint = 'https://github.com/login/oauth/access_token?client_id=7415eb3be51e7222a91c&client_secret=f43a1da2796648bb8f8d98a166ff3278d7843624&code=' + code;
		$.get("https://keep-header-proxy.herokuapp.com/" + ghendpoint, function (access_token) {
			var token_loc_start = access_token.indexOf("=");
			var token_loc_end = access_token.indexOf("&");
			var token = access_token.slice(token_loc_start + 1, token_loc_end);
			octokit = new Octokit({
				auth: token
			});
			if (callback) {
				callback(param)
			}
		});
	}, false);
}
window.sendNewData = async function(new_content) {
	if (octokit) {
		var contents = octokit.rest.repos.getContent({
			owner: 'lvoz2',
			repo: 'JS-Image-Recognition-Software',
			path: 'js/values.js'
		})
		contents.then(
			function(value) {
				var blob = value.data.sha;
				var content = btoa(new_content.toString());
				octokit.rest.repos.createOrUpdateFileContents({
					owner: 'lvoz2',
					repo: 'JS-Image-Recognition-Software',
					path: 'js/values.js',
					message: 'Add new data',
					content: content,
					sha: blob,
					commiter: {
						name: 'lvoz2',
						email: 'lv_oz2@icloud.com'
					}
				});
			},
			function(error) {
				console.error(error);
			}
		);
	}
	else {
		windowAuth(sendNewData, new_content)
	}
}
window.load = function(url, type) {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", url);
	xhr.onload = function() {
		console.log(this.responseXML);
	}
	xhr.responseType = "document";
	xhr.send()
}
window.submit = function() {
	var new_id = document.getElementById("new_layout").value;
	createnewdataset()
	if (xvalues.hasOwnProperty(new_id)) {
	}
}
		 
