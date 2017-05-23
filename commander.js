const program = require('commander');

const PROGRAM_VERSION  = "0.0.0.1";
const PROGRAM_OPTIONS = {
    list : {
      argument : 'l',
      description : 'Listar eventos existentes no arquivo',
      command : 'funcao'
    }
}

// Setting CLI Version
program
  .version(PROGRAM_VERSION)
  .allowUnknownOption();


// Fetching options
for (var option in PROGRAM_OPTIONS){
  if (PROGRAM_OPTIONS.hasOwnProperty(option)) {
    const command = PROGRAM_OPTIONS[option];
    program.option(`-${command.argument}, --${option}`, command.description);
  }
}


// Parsing options
program.parse(process.argv);

// detectando os parametros que foram inputados
for (var option in PROGRAM_OPTIONS){
  if (PROGRAM_OPTIONS.hasOwnProperty(option) && program[option]) {
      var command = PROGRAM_OPTIONS[option];
      console.log(`o ${option} => ${command.description} deve chamar a funcao no import`);
      console.log(`requeriu o => ./cli/${option}.js`)
      var func =  require(`./cli/options/${option}.js`);
      func.execute();
  }
}
