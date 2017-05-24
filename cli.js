const program = require('commander');
const runtime = require('./cli/foundation/runtime.js');
const uploader = require('./cli/foundation/uploader.js');



// The magic happens here.
runtime.dispatch(program);

// prove of concecpt upload
//uploader.store('data/events.json');
