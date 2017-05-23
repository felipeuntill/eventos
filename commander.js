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
  if (PROGRAM_OPTIONS.hasOwnProperty(option)) {
    if(program[option]){
      console.log(`o ${option} => ${PROGRAM_OPTIONS[option].description}`);
    }
  }
}






//   .option('-p, --peppers', 'Add peppers')
//   .option('-P, --pineapple', 'Add pineapple')
//   .option('-b, --bbq-sauce', 'Add bbq sauce')
//   .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')
//   .parse(process.argv);
//
// console.log('you ordered a pizza with:');
// if (program.peppers) console.log('  - peppers');
// if (program.pineapple) console.log('  - pineapple');
// if (program.bbqSauce) console.log('  - bbq');
// console.log('  - %s cheese', program.cheese);
