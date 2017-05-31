const fs = require('fs');

class fileManager {
  static move(current, destination) {
    fs.rename(current, destination, (err) => {
      if (err) throw err;
      fs.stat(destination, (err, stats) => {
        if (err) throw err;
      });
    });
  }

  static write(path, content, callback = null) {
    fs.writeFile(path, content, function(err) {
        if (err) throw err;

        if(callback)
          callback(content);
    });
  }

  static delete(path){
    fs.unlinkSync(path);
  }
}

module.exports = fileManager;
