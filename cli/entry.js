const inquirer = require('inquirer');

const questions = ['tu é gay?', 'é sim que eu sei!'];

console.log(questions);

inquirer.prompt(questions).then(function (answers) {
    // Use user feedback for... whatever!!

    console.log(answers);


});
