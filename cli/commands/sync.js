const uploader = require('../foundation/uploader.js');
const eventPrinter = require('../printer/eventPrinter.js');

class sync {
   static execute(){

      console.log('Sincronizando os eventos com o ambiente de produção');

      const helper = new uploader();

      helper.get('data/events.json', (file) => {

        const events = JSON.parse(file.content);

        events.forEach((event) => {
          eventPrinter.print(event);
        })

      });
   }
 }

 module.exports = sync;
