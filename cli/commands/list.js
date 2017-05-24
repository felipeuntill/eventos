const events = require('../../src/data/events.json');
const eventPrinter = require('../printer/eventPrinter.js');

class list {
   static execute(){
      console.log('Listando eventos cadastrados');
      this.iterateEvents();
   }

   static iterateEvents(){
     events.forEach((event) => {
       eventPrinter.print(event);
     })
   }
 }

 module.exports = list;
