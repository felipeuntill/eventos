const eventPrinter = require('../printer/eventPrinter.js');
const eventHelper = require('../helper/eventHelper.js');
const fileManager = require('../foundation/fileManager.js')
const appRoot = require('app-root-path');
const beautify = require('js-beautify').js_beautify;

class manage {
   static execute(){
      console.log('Tarefa responsável por simular um @theandersonn');

      let events = require('../../src/data/events.json');

      events = this.cleanExpired(events);

      this.updateFile(events);
   }

   static cleanExpired (events) {
     let cleaned = [];

     events.forEach((event) => {
       if(!eventHelper.IsExpired(event))
          cleaned.push(event);
     });

     return cleaned;
   }

   static updateFile (events) {
     fileManager.write(appRoot.path+ '/src/data/events.json', beautify(JSON.stringify(events)), this.displayResult);
   }

   static displayResult (source) {

     let events = require('../../src/data/events.json');

     events.forEach((event) => {
       eventPrinter.print(event);
     });
   }
 }

 module.exports = manage;
