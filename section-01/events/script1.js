const { EventEmitter } = require('node:events');
const e = new EventEmitter();

function greet(name) { console.log('  greet:', name); }
e.on('hi', greet);
e.on('hi', function () { console.log('  this === emitter:', this === e); });

const heard = e.emit('hi', 'Alice');
console.log('emit returned:', heard);
console.log('emit (no listeners) returned:', e.emit('nobody-listens'));
console.log('listenerCount:', e.listenerCount('hi'));

e.once('first', () => console.log('  once: only the first time'));
e.emit('first');
e.emit('first');   // nothing happens

e.off('hi', greet);
console.log('after off ->', e.listenerCount('hi'), 'listener left');
e.off('hi', () => {});   // a NEW function object: removes nothing
console.log('after off with a new arrow function ->', e.listenerCount('hi'), 'listener left');

e.prependListener('hi', () => console.log('  prepended: runs first'));
e.emit('hi', 'again');