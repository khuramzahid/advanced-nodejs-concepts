const { spawn } = require('node:child_process');
const child = spawn(process.execPath, ['-e', 'console.log("child says hi")']);
for (const name of ['spawn', 'exit', 'close']) {
  child.on(name, (code) => console.log('child event:', name, name === 'spawn' ? '' : 'code=' + code));
}
child.stdout.on('data', (d) => console.log('child stdout data:', String(d).trim()));