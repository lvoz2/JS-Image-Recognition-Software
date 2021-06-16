import { Octokit } from "https://cdn.skypack.dev/@octokit/core";
const octokit = new Octokit({
	auth: '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',
	userAgent: 'lvoz2',
	timeZone: 'Australia/Sydney',
});
window.sendNewData = async function() {
	await octokit.request('GET https://github.com/login/oauth/authorize', {
		
	})
	await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
		owner: 'lvoz2',
		repo: 'JS-Image-Recognition-Software',
		path: 'text.txt',
		message: 'Add new data'
	})
}
