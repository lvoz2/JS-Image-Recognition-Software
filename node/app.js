const { OAuthApp, createNodeMiddleware } = require("@octokit/oauth-app");
window.http = require('http');
const app = new OAuthApp({
  clientType: "oauth-app",
  clientId: "7415eb3be51e7222a91c",
  clientSecret: "f43a1da2796648bb8f8d98a166ff3278d7843624"
});

app.on("token", async ({ token, octokit }) => {
  const { data } = await octokit.request("GET /user");
  console.log(`Token retrieved for ${data.login}`);
});
http.createServer(createNodeMiddleware(app)).listen(3000);
