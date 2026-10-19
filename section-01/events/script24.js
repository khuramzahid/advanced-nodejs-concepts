const { EventEmitter } = require('node:events');
const emitter = new EventEmitter();

function handleRequest() {
  emitter.on('done', () => console.log('Done'));   // added on EVERY call, never removed
}

handleRequest();
handleRequest();
handleRequest();
console.log('listeners on "done":', emitter.listenerCount('done'));