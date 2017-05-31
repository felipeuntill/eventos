const eventos = require('../../src/data/events.json');
const uploader = require('../foundation/uploader.js');
const eventPrinter = require('../printer/eventPrinter.js');

class sync {
   static execute(){

      console.log('Sincronizando os eventos com o ambiente de produção');

      const helper = new uploader();

      helper.write('data/events.json', JSON.stringify(eventos), (file) => {

        console.log('Ambiente de Produção atualizado com sucesso');

      });

   }
 }

 module.exports = sync;
