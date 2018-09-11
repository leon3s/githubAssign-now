const { standalone } = require('@leone/githubassign');

console.log(process.env.SLACK_TOKEN);
console.log(process.env.GITHUB_TOKEN);

standalone({
  name: 'faste',
  port: 1337,
  webhookUrl: '/webhook/github',
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
