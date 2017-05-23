const events = require('../../src/data/events.json');
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

class list {
   static execute(){
      console.log('Listando eventos cadastrados');
      this.iterateEvents();
   }

   static iterateEvents(){
     events.forEach((event) => {
       var eventDate = new Date(event.date.year, months[event.date.month], event.date.day);
       var expired = eventDate < Date.now();
       console.log(`${event.title} - ${expired ? "Expirado" : `${event.date.day}/${months[event.date.month]}/${event.date.year}`}`);
     })
   }
 }

 module.exports = list;
