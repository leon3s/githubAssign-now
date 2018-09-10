const { standalone } = require('@leone/githubassign');

standalone({
  port: process.env.PORT,
  slackToken: process.env.SLACK_TOKEN,
  githubToken: process.env.GITHUB_TOKEN,
  reviewers: [{
    githubAccount: 'leon3s',
    slackAccount: 'leone',
  },{
    githubAccount: 'faste-bot',
    slackAccount: 'leone',
  }],
});
