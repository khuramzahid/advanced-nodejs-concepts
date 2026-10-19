const { EventEmitter } = require('node:events');

const e = new EventEmitter();
e.on('x', () => {
  console.log('listener 1 runs, and adds listener 3 during emit');
  e.on('x', () => console.log('listener 3 (added mid-emit)'));
});
e.on('x', () => console.log('listener 2 runs'));
console.log('-- first emit');  
e.emit('x');
console.log('-- second emit');
e.emit('x');
console.log('-- third emit');
e.emit('x');