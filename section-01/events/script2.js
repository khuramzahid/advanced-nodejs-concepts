const { EventEmitter } = require('node:events');
const e = new EventEmitter();

e.on('x', () => {
  Promise.resolve().then(() => console.log('microtask'));
  console.log('listener');
});

console.log('before emit');
e.emit('x');
console.log('after emit');