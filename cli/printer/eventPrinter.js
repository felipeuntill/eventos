const colors = require('colors');
const printer = require('./printer.js');


const months = {
  Janeiro : '01',
  Fevereiro : '02',
  Marco : '03',
  Abril : '04',
  Maio : '05',
  Junho : '06',
  Julho : '07',
  Agosto : '08',
  Setembro : '09',
  Outubro : '10',
  Novembro : '11',
  Dezembro : '12',
};

class eventPrinter extends printer {
  static print (event){
    var eventDate = new Date(event.date.year, months[event.date.month], event.date.day);
    var expired = eventDate < Date.now();

    this.write(`${event.title} - ${expired ? "Expirado".red : `${event.date.day}/${months[event.date.month]}/${event.date.year}`.magenta}`);
  }
}


 module.exports = eventPrinter;
