var inquirer = require('inquirer');
var questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Qual o nome do evento?'
  },
  {
    type: 'input',
    name: 'date',
    message: 'Qual a data do evento do evento(yyyy/MM/dd)?'
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
    default: false,
  },
  {
    type: 'input',
    name: 'price',
    message: 'Qual o valor do evento?',
    when: function (answers) {
      return !answers.free;
    }
  },
  {
    type: 'list',
    name: 'state',
    message: 'Em qual estado o evento irá ocorrer?',
    choices: ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO']
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
  },
  {
    type: 'confirm',
    name: 'hasLogo',
    message: 'O evento possui um logotipo?',
    default: true,
  },
  {
    type: 'input',
    name: 'price',
    message: 'Qual o link para o logotipo do evento do evento?',
    when: function (answers) {
      return !answers.hasLogo;
    }
  }
];

class create {
  static execute () {
    inquirer.prompt(questions).then(function (answers) {
      console.log('\nDados do evento:');
      console.log(JSON.stringify(answers, null, '  '));
    });
  }
}

function ValidURL(str) {
  var urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
    return urlregex.test(str);
}

 module.exports = create;
