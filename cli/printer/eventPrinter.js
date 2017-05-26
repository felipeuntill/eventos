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

    let multiplesDays = event.date.day.split('e').length > 1;
    let eventDay = event.date.day;

    if(multiplesDays)
      eventDay = parseInt(event.date.day.split('e')[1])

    let eventDate = new Date(event.date.year,(parseInt(months[event.date.month])-1), eventDay);
    let currentdate = new Date();
    let nowDate = new Date(currentdate.getFullYear(), (currentdate.getMonth()), currentdate.getDate());
    let expired = eventDate < nowDate;

    console.log('-------------------------------------------------------------------------------------')
    console.log(eventDate);
    console.log(nowDate);
    this.write(`${event.title} - ${expired ? `${event.date.day}/${months[event.date.month]}/${event.date.year} (Expirado)`.red : `${event.date.day}/${months[event.date.month]}/${event.date.year}`.magenta}`);
  }
}


 module.exports = eventPrinter;
