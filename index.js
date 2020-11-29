const { Octokit } = require("@octokit/rest");

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
})

const x = octokit.pulls.get({
    owner: "octokit",
    repo: "rest.js",
    pull_number: 123,
}).then(console.log)
console.log(`x (type: ${typeof x}):`, x)

