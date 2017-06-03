const inquirer = require('inquirer');
const fileManager = require('../foundation/fileManager');
const appRoot = require('app-root-path');
const beautify = require('js-beautify').js_beautify;
const eventPrinter = require('../printer/eventPrinter.js');

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Qual o nome do evento?'
  },
  {
    type: 'input',
    name: 'date',
    message: 'Qual a data do evento do evento(dd/MM/yyyy)?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Qual a descrição do evento?'
  },
  {
    type: 'input',
    name: 'link',
    message: 'Qual o link para o website do evento?'//,
    // validate: function (answer) {
    //     if(ValidURL(answer)) return true;
    //     return 'Você deve informar uma url válida...';
    // }
  },
  {
    type: 'confirm',
    name: 'free',
    message: 'O evento é gratuito?',
    default: true,
  },
  {
    type: 'input',
    name: 'price',
    message: 'Qual o valor do evento? (R$ 00,00)',
    when: function (answers) {
      return !answers.free;
    }
  },
  {
    type: 'input',
    name: 'image',
    message: 'Qual o link para o logotipo do evento do evento?'
  },
  {
    type: 'input',
    name: 'state',
    message: 'Em qual estado o evento irá ocorrer?',
    // Selecionar é mais lento que escrever :(
    //choices: ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO']
  },
  {
    type: 'input',
    name: 'city',
    message: 'Qual a cidade onde o evento irá ocorrer?'
  },
  {
    type: 'input',
    name: 'address',
    message: 'Qual endereço de onde o evento irá ocorrer?'
  },
  {
    type: 'input',
    name: 'map',
    message: 'Qual a url do mapa para o endereço?'//,
    // validate: function (answer) {
    //     if(ValidURL(answer)) return true;
    //     return 'Você deve informar uma url válida...';
    // }
  }
];

class create {
  static execute () {

    inquirer.prompt(questions).then(function (answers) {

      return create.writeFile({ title: '1° Hangout Frontend RJ',
    date: { day: '07', month: '05', year: '2017' },
    innerLink: 'inner.html',
    link: 'https://www.meetup.com/pt-BR/frontendrj/events/240096866/',
    price: 'Free',
    location:
     { city: 'São Paulo',
       state: 'Sp',
       address: 'Online',
       locationUrl: 'https://www.youtube.com/watch?v=313XwXcYpKk' }});

      // console.log('\nDados do evento:');

      let splitedDate = answers.date.split('/');
      let event = {
          "title": answers.title,
          "date": {
              "day": splitedDate[0],
              "month": splitedDate[1],
              "year": splitedDate[2]
          },
          "innerLink": "inner.html",
          "link": answers.link,
          "price": answers.free ? "Free" : answers.price,
          "location": {
               "city": answers.city,
               "state": answers.state,
               "address": answers.address,
               "locationUrl": answers.map
          },
          "image": answers.image,
          "shortDescription": answers.description
      }
      // console.log(JSON.stringify(answers, null, '  '));
      // console.log(JSON.stringify(event, null, '  '));

      create.writeFile(event);

    });
  }
  static writeFile (event) {
    let events = require('../../src/data/events.json');
    events.push(event);
    fileManager.write(appRoot.path+ '/src/data/events.json', beautify(JSON.stringify(events)), this.displayResult);

  }

  static displayResult (source) {

    let events = require('../../src/data/events.json');

    events.forEach((event) => {
      eventPrinter.print(event);
    });
  }
}

function ValidURL(str) {
  var urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
    return urlregex.test(str);
}

module.exports = create;
