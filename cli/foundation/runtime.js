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
    this.iterateOptions((option, command)=> {
      if(!program[option]) return;
      var func =  require(`../commands/${option}.js`);
      func[command.method]();
    });
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
