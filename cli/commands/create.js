var inquirer = require('inquirer');
var questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Qual o nome do evento?'
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
  // {
  //   type: 'confirm',
  //   name: 'toBeDelivered',
  //   message: 'Is this for delivery?',
  //   default: false
  // },
  // {
  //   type: 'input',
  //   name: 'phone',
  //   message: 'What\'s your phone number?',
  //   validate: function (value) {
  //     var pass = value.match(/^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i);
  //     if (pass) {
  //       return true;
  //     }
  //
  //     return 'Please enter a valid phone number';
  //   }
  // },
  // {
  //   type: 'list',
  //   name: 'size',
  //   message: 'What size do you need?',
  //   choices: ['Large', 'Medium', 'Small'],
  //   filter: function (val) {
  //     return val.toLowerCase();
  //   }
  // },
  // {
  //   type: 'input',
  //   name: 'quantity',
  //   message: 'How many do you need?',
  //   validate: function (value) {
  //     var valid = !isNaN(parseFloat(value));
  //     return valid || 'Please enter a number';
  //   },
  //   filter: Number
  // },
  // {
  //   type: 'expand',
  //   name: 'toppings',
  //   message: 'What about the toppings?',
  //   choices: [
  //     {
  //       key: 'p',
  //       name: 'Pepperoni and cheese',
  //       value: 'PepperoniCheese'
  //     },
  //     {
  //       key: 'a',
  //       name: 'All dressed',
  //       value: 'alldressed'
  //     },
  //     {
  //       key: 'w',
  //       name: 'Hawaiian',
  //       value: 'hawaiian'
  //     }
  //   ]
  // },
  // {
  //   type: 'rawlist',
  //   name: 'beverage',
  //   message: 'You also get a free 2L beverage',
  //   choices: ['Pepsi', '7up', 'Coke']
  // },
  // {
  //   type: 'input',
  //   name: 'comments',
  //   message: 'Any comments on your purchase experience?',
  //   default: 'Nope, all good!'
  // },
  // {
  //   type: 'list',
  //   name: 'prize',
  //   message: 'For leaving a comment, you get a freebie',
  //   choices: ['cake', 'fries'],
  //   when: function (answers) {
  //     return answers.comments !== 'Nope, all good!';
  //   }
  // }
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
