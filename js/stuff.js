import { Octokit } from "https://cdn.skypack.dev/@octokit/rest";
import { createOAuthAppAuth } from "https://cdn.skypack.dev/@octokit/auth-oauth-app";
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
}
window.sendNewData = async function() {
	window.contents = octokit.rest.repos.getContent({
		owner: 'lvoz2',
		repo: 'JS-Image-Recognition-Software',
		path: 'text.txt'
	})
	octokit.rest.repos.createOrUpdateFileContents({
		owner: 'lvoz2',
		repo: 'JS-Image-Recognition-Software',
		path: 'text.txt',
		message: 'Add new data',
		content: 'Hey'
	})
}
window.test = function() {
	window.octokit = new Octokit({});
}
