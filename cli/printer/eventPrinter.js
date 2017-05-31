const colors = require('colors');
const printer = require('./printer.js');
const eventHelper = require('../helper/eventHelper.js');
const dateHelper = require('../helper/dateHelper.js');




class eventPrinter extends printer {
  static print (event){

    const expired = eventHelper.IsExpired(event);

    this.write(`${event.title} - ${event.date.day}/${dateHelper.getMonth(event.date.month)}/${event.date.year}` + (expired ? '(Expirado)'.red : ''));
    this.write('-------------------------------------------------------------------------------------');
  }
}


 module.exports = eventPrinter;
