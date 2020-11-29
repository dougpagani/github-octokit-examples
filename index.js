const { Octokit } = require("@octokit/rest");

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
})

const x = octokit.pulls.get({
    owner: "octokit",
    repo: "rest.js",
    pull_number: 123,
})
  // .then(console.log)
// console.log(`x (type: ${typeof x}):`, x)


// https://docs.github.com/en/free-pro-team@latest/rest/reference/repos#create-a-commit-status
const longDescription = `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

newline
`
const shortDescription = 'commit status description'
const maxDescription = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam'
const rebaseDescription = 'There are [2] first-parents on trunk since basing this branch. (1234-fix-font, 2345-add-button)'

// NOTE: new statuses will get created or old-updated, contingent on the context/name
const y = octokit.repos.createCommitStatus({
        context: 'Rebased/up-to-date?', // params.name,
        description: rebaseDescription, // params.description,
        owner: "Autotiv",
        repo: "customer-app",
        sha: "e6b09d566565997884664453d08848254fb70d1b",
        state: 'failure', // params.status, error:failure:pending:success
        target_url: "https://google.com" // params.url
}).then(console.log)
// 575548009-case-insensitive-email
// https://github.com/Autotiv/customer-web-app/pull/164

process.on('unhandledRejection', error => {
  console.error(error)
  process.exit(1)
});
