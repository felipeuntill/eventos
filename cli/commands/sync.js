const events = require('../../src/data/events.json');
const uploader = require('../foundation/uploader.js');

class sync {
   static execute(){
      console.log('Sincronizando os eventos com o ambiente de produção');

      var helper = new uploader();

      helper.get('data/events.json', (file) => {
        console.log(file);
      });

   }
 }

sync.execute();

 module.exports = sync;
