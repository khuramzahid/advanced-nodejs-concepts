const readline = require('node:readline');
const { Readable } = require('node:stream');
const rl = readline.createInterface({ input: Readable.from(['alpha\nbeta\n', 'gamma\n']) });
rl.on('line',  (l) => console.log('readline event: line ->', l));
rl.on('close', () => console.log('readline event: close'));