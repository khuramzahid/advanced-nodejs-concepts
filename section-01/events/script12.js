const { EventEmitter } = require('node:events');
const e = new EventEmitter();

try {
    e.emit('error', new Error('Error occurred'));
}
catch (err) {
    console.log('no listener -> thrown:', err.message);
}

e.on('error', (err) => console.log('with listener -> handled:', err.message));

e.emit('error', new Error('Error occurred again'));