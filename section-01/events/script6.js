const { EventEmitter } = require('node:events');
const e = new EventEmitter();
e.on('job', (n) => console.log('  handled job', n));

console.log('A: emit directly');
e.emit('job', 1);
console.log('B: emit deferred with setImmediate');
setImmediate(() => e.emit('job', 2));
console.log('C: main script ends');