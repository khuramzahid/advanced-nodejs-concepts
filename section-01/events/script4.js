const { EventEmitter } = require('node:events');
const e = new EventEmitter();
e.on('hi', function listener() {
  console.log(new Error('where am I?').stack);
});
function caller() { e.emit('hi'); }
caller();