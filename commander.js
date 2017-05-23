const program = require('commander');
const runtime = require('./cli/foundation/runtime.js');

// The magic happens here.
runtime.dispatch(program);
