const { Octokit } = require("@octokit/core");
const { helloWorld } = require("octokit-plugin-hello-world");


const MyOctokit = Octokit.plugin(helloWorld);

const octokit = new MyOctokit();
octokit.helloWorld();
// logs "Hello, world!
