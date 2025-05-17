let chalk=require('chalk')
let { greet } = require('./greet')


console.log(chalk.green('System Info using CLI'));

console.log('Current Dictionary:',__dirname);
console.log('Current File:      ', __filename);

console.log('ENV Mode:',process.env.NODE_ENV||'Development');


console.log(chalk.yellow(greet('Goutham')));




