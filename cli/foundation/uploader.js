const GitHubFile = require('github-file');
const inquirer = require('inquirer');
const request  = require('request');
const btoa  = require('btoa');
const atob  = require('atob');

const newlineRegex = /\n/g;

let githubFile = null;

var questions = [
  {
    type: 'input',
    name: 'branch',
    message: 'Qual branch?',
    default: 'gh-pages'
  },
  {
    type: 'input',
    name: 'gitRepoOwner',
    message: 'Qual repository onwer?',
    default: 'felipeuntill'
  },
  {
    type: 'input',
    name: 'repo',
    message: 'Qual repository?',
    default: 'eventos'
  },
  {
    type: 'input',
    name: 'gitToken',
    message: 'Qual token?'
  }
];


class uploader {

  static store(destination, content){
    inquirer.prompt(questions).then(function (answers) {

      var credentials = answers;

      credentials.request = request;
      credentials.shouldSetUserAgent = true;
      credentials.encodeInBase64  = b64EncodeUnicode;
      credentials.decodeFromBase64= b64DecodeUnicode;

      githubFile = GitHubFile(credentials);
      githubFile.get(destination, updateEmojiFile);

    });
  }

}

function updateEmojiFile(error, file) {
  if (error) {
    console.log(error);
  }
  else {
    console.log('File before updating', file.content);
    githubFile.update({filePath: 'data/events2.json', content: file.content + '😎'}, logResult);
  }
}

function logResult(error, content) {
  if (error) {
    console.log(error);
  }
  else {
    console.log('File updated! Content sha:', content.sha);
  }
}




function b64EncodeUnicode(str) {
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function(match, p1) {
    return String.fromCharCode('0x' + p1);
  }));
}

function b64DecodeUnicode(str) {
  // atob on Mobile Safari for iOS 9 will throw an exception if there's a newline.
  var b64Decoded = atob(str.replace(newlineRegex, ''));
  var decodedWithUnicodeHexesRestored = Array.prototype.map.call(
    b64Decoded,
    hexEncodeCharCode
  )
  .join('');

  return decodeURIComponent(decodedWithUnicodeHexesRestored);
}

function hexEncodeCharCode(c) {
  return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
}


module.exports = uploader;
