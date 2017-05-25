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

  constructor () {
    this.authorize();
  }

  authorize() {
    inquirer.prompt(questions).then(function (answers) {
      this.credentials = answers;
      this.credentials.request = request;
      this.credentials.shouldSetUserAgent = true;
      this.credentials.encodeInBase64  = base64.encode;
      this.credentials.decodeFromBase64= base64.decode;
    });
  }

  get(path, callback) {
    console.log(this.credentials);
    github.getFile(this.credentials, path, callback);
  }

  update(path, content, callback){
    github.updateFile(this.credentials, path, content, callback);
  }

}


module.exports = uploader;
