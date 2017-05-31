const dateHelper = require('./dateHelper.js');

class eventHelper {
  static IsExpired (event){

    let multiplesDays = event.date.day.split('e').length > 1;
    let eventDay = event.date.day;

    if(multiplesDays)
      eventDay = parseInt(event.date.day.split('e')[1])

    let eventDate = new Date(event.date.year,(parseInt(dateHelper.getMonth(event.date.month))-1), eventDay);
    let currentdate = new Date();
    let nowDate = new Date(currentdate.getFullYear(), (currentdate.getMonth()), currentdate.getDate());
    let expired = eventDate < nowDate;

    return expired;
  }
}


module.exports = eventHelper;
