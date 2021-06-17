import { Octokit } from "https://cdn.skypack.dev/@octokit/core";
const octokit = new Octokit({
	auth: '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',
	userAgent: 'lvoz2',
	timeZone: 'Australia/Sydney',
});
window.sendNewData = async function() {
	var ghCode = await octokit.request('GET https://github.com/login/oauth/authorize', {
		client_id: '7415eb3be51e7222a91c',
		scopes: 'repo',
		Origin: 'https://lvoz2.github.io'
	})
	await octokit.request('GET https://github.com/login/oauth/authorize', {
		client_id: '7415eb3be51e7222a91c',
		client_secret: 'f43a1da2796648bb8f8d98a166ff3278d7843624',
		code: ghCode
	})
	await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
		owner: 'lvoz2',
		repo: 'JS-Image-Recognition-Software',
		path: 'text.txt',
		message: 'Add new data'
	})
}
