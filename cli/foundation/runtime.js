const inquirer = require('inquirer');
const config = require('../config.json');

class runtime {

  static dispatch (program){
    this.initialize(program);
    this.registerOptions(program);
    this.parseArguments(program);
    this.executeOptions(program);
  }

  static initialize(program){
    program
      .version(config.version)
      .allowUnknownOption();
  }

  static registerOptions (program) {
    this.iterateOptions((option, command)=> {
      program.option(`-${command.argument}, --${option}`, command.description);
    });
  }

  static executeOptions(program){

    let anyExecuted = false;

    this.iterateOptions((option, command)=> {
      if(!program[option]) return;
      this.executeOption(option);
      anyExecuted = true;
    });

    // Se o cara não passar porra nenhuma trata ele como criança e manda as tasks.
    if(!anyExecuted)
      this.displayOptions(program);

  }



  static displayOptions (program){

    var choices = [];

    this.iterateOptions((option, command)=> {
      choices.push({
        key: command.argument,
        name: `--${option}, ${command.description}`,
        value: option
      })
    });

    var questions = [{
      type: 'expand',
      name: 'command',
      message: 'Qual dos commandos você pretende executar?',
      choices: choices
    }];

    inquirer.prompt(questions).then(function (answer) {
      runtime.executeOption(answer.command);
    });

  }

  static executeOption(option){
    var func =  require(`../commands/${option}.js`);
    func.execute();
  }

  static parseArguments(program){
    program.parse(process.argv);
  }

  static iterateOptions (callback) {
    for (var option in config.options){
      if (config.options.hasOwnProperty(option)) {

        const command = config.options[option];
        callback(option, command)
      }
    }
  }
}

module.exports = runtime;
