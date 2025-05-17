let chalk=require('chalk')
let path=require('path')
let os=require('os')

let { greet } = require('./greet')

console.log(chalk.green('System Info using CLI'));

console.log('Operating System:', os.type());
console.log('Total Memory (MB):', os.totalmem() / (1024 * 1024));


console.log('Current Dictionary:',__dirname);
console.log('Current File:      ', __filename);
console.log('ENV Mode:',process.env.NODE_ENV||'Development');


console.log(chalk.yellow(greet('Goutham')));




