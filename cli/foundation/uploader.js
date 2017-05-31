const GitHubFile = require('github-file');
const inquirer = require('inquirer');
const request  = require('request');
const base64 = require('./encoding/base64.js');
const github = require('./github.js');


const questions = [
  { type: 'input', name: 'branch', message: 'Qual branch?', default: 'gh-pages' },
  { type: 'input', name: 'gitRepoOwner', message: 'Qual repository onwer?', default: 'felipeuntill' },
  { type: 'input', name: 'repo', message: 'Qual repository?', default: 'eventos' },
  { type: 'input', name: 'gitToken', message: 'Qual token?' }
];


class uploader {

  authorize(callback) {
    inquirer.prompt(questions).then(function (answers) {
      let credentials = answers;
      credentials.request = request;
      credentials.shouldSetUserAgent = true;
      credentials.encodeInBase64  = base64.encode;
      credentials.decodeFromBase64= base64.decode;
      callback(credentials);
    });
  }

  get(path, callback) {
    this.authorize((credentials) => {
      github.getFile(credentials, path, callback);
    });
  }

  write(path, content, callback){
    this.authorize((credentials) => {
        github.updateFile(credentials, path, content, callback);
    });
  }
}


module.exports = uploader;
