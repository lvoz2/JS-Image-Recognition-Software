import { Octokit } from "https://cdn.skypack.dev/@octokit/core";
import { createAppAuth } from "https://cdn.skypack.dev/@octokit/auth-oauth-app";
import { OAuthApp, createNodeMiddleware } from "https://cdn.skypack.dev/@octokit/oauth-app";
var authenticate = function() {
	const app = new OAuthApp({
	  clientType: "oauth-app",
	  clientId: "7415eb3be51e7222a91c",
	  clientSecret: "f43a1da2796648bb8f8d98a166ff3278d7843624"
	});

	app.on("token", async ({ token, octokit }) => {
	  const { data } = await octokit.request("GET /user");
	  console.log(`Token retrieved for ${data.login}`);
	});

	var http = require("http");
	http.createServer(createNodeMiddleware(app)).listen(3000);
}
// can now receive user authorization callbacks at /api/github/oauth/callback
// See all endpoints at https://github.com/octokit/oauth-app.js#middlewares
/*
var auth = createOAuthAppAuth({
	clientType: "oauth-app",
	clientId: "7415eb3be51e7222a91c",
	clientSecret: "f43a1da2796648bb8f8d98a166ff3278d7843624"
});
var userAuthenticationFromWebFlow = await auth({
	type: "oauth-user",
	code: "random123",
	state: "mystate123"
});
const octokit = new Octokit({
	authStrategy: createAppAuth,
	auth: userAuthenticationFromWebFlow
});
*/
var octokit = new Octokit({
	clientType: "oauth-app",
	clientId: "7415eb3be51e7222a91c",
	clientSecret: "f43a1da2796648bb8f8d98a166ff3278d7843624"
});
window.sendNewData = async function() {
	/* var ghCode = await octokit.request('GET https://github.com/login/oauth/authorize', {
		client_id: '7415eb3be51e7222a91c',
		scopes: 'repo',
		Origin: 'https://lvoz2.github.io'
	})
	await octokit.request('GET https://github.com/login/oauth/authorize', {
		client_id: '7415eb3be51e7222a91c',
		client_secret: 'f43a1da2796648bb8f8d98a166ff3278d7843624',
		code: ghCode
	})
	*/
	await octokit.rest.repos.createOrUpdateFileContents({
		owner: 'lvoz2',
		repo: 'JS-Image-Recognition-Software',
		path: 'text.txt',
		message: 'Add new data',
		content: 'Hey'
	})
}
