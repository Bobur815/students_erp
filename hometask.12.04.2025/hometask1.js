const chalk=require('chalk');
const green=chalk.bgGreen.black;
const orange=chalk.hex('#FFA500');
const magenta=chalk.hex('#ff00ff');

const log=console.log;

const cmd=(a,b,...args)=>
log(orange(a),green(b),args.map(magenta).join(' '));
console.clear();
cmd('node income','GET');
cmd('node income','POST','<amount>','<purpose>');
cmd('node income','DELETE','<incomeId>');
cmd('node income','PUT','<incomeId>','amount=<amount>', 'purpose=<purpose>');
log();

cmd('node expanse','GET');
cmd('node expanse','POST','<amount>','<purpose>');
cmd('node expanse','DELETE','<expanseId>');
cmd('node expanse','PUT','<expanseId>','amount=<amount>', 'purpose=<purpose>');
log();
log(orange('node balance'));
log(orange('node balance'), magenta('--more'));