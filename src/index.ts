import GasApplication from './GasApplication';
process.on('unhandledRejection', console.dir);

// Support source map.
require('source-map-support').install();
process.on('unhandledRejection', console.log);

const app = new GasApplication();
app.run();
