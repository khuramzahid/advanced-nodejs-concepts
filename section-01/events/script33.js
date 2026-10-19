// EventEmitter
const { EventEmitter } = require('node:events');
const e = new EventEmitter();

e.on('ping', () => console.log('listener 1'));

e.on('ping', () => { 
    throw new Error('listener 2 blew up'); 
});

e.on('ping', () => console.log('listener 3 (never runs)'));

try {
    e.emit('ping');
} catch (err) {
    console.log('emit() threw:', err.message);
}