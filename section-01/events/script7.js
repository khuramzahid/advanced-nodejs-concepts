const { EventEmitter } = require('node:events');
console.log(EventEmitter.prototype.emit.toString().split('\n').slice(0, 2).join('\n'));
console.log('Math.max:', Math.max.toString());
const { port1 } = new MessageChannel();
console.log('postMessage:', port1.postMessage.toString());
port1.close();