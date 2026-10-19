const { EventEmitter } = require('node:events');

class Bad extends EventEmitter {
    constructor() {
        super();
        this.emit('ready');
    }
}

class Good extends EventEmitter {
    constructor() {
        super();
        process.nextTick(() => this.emit('ready')); 
    } 
}

new Bad().on('ready',  () => console.log('Bad: heard ready'));

new Good().on('ready', () => console.log('Good: heard ready'));

console.log('constructed both');