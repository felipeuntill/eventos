const openInEditor = require('open-in-editor');


class apelar {
  static execute() {
    let editor = openInEditor.configure({
      // options
    }, function(err) {
      console.error('Não foi possível identificar o editor de texto: ' + err);
    });

    editor.open('../../src/data/events.json')
    .then(function() {
      console.log('Success!');
    }, function(err) {
      console.error('Something went wrong: ' + err);
    });
  }
}


module.exports = apelar;
