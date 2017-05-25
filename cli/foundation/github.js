const GitHubFile = require('github-file');

class github {

  static getFile (credentials, path, callback){
    const githubFile = GitHubFile(credentials);
    githubFile.get(path, (error, file) => {
      if (error) throw new Error(error);
      callback(file);
    });
  }

  static updateFile (credentials, path, content, callback = null) {
    const githubFile = GitHubFile(credentials);
    githubFile.update({filePath: path, content: content}, (error, content) => {
      if (error) throw new Error(error);
      if(callback) callback(content);
    });
  }

}


module.exports = github;
