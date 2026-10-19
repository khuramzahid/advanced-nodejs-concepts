const { EventEmitter } = require('node:events');
const e = new EventEmitter();
e.on('hi', function a() {});
e.on('hi', function b() {});
e.on('bye', function c() {});
console.log(e._events);