const { EventEmitter } = require('node:events');

const e = new EventEmitter();

for (let i = 0; i < 11; i++)
    e.on('data', () => {});

console.log('listeners:', e.listenerCount('data'), 'max:', e.getMaxListeners());

console.log(e._events);