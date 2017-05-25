const fs = require('fs');

class fileManager {
  static move(current, destination) {
    fs.rename(current, destination, (err) => {
      if (err) throw err;
      fs.stat(destination, (err, stats) => {
        if (err) throw err;
        console.log(`stats: ${JSON.stringify(stats)}`);
      });
    });
  }

  static create(path, content) {

  }

  static delete(path){
    fs.unlinkSync(path);
  }
}

module.exports = fileManager;
