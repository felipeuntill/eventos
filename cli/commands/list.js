const uploader = require('../foundation/uploader.js');
const eventPrinter = require('../printer/eventPrinter.js');

class list {
   static execute(){
      console.log('Listando eventos existêntes no ambiente de produção');
      this.iterateEvents();
   }

   static iterateEvents(){

     const helper = new uploader();

     helper.get('data/events.json', (file) => {

       const events = JSON.parse(file.content);

       events.forEach((event) => {
         eventPrinter.print(event);
       })

     });
   }
 }

 module.exports = list;
