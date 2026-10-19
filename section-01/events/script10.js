const { EventEmitter } = require('node:events');

class Countdown extends EventEmitter {
  constructor(from) {
    super();
    this.remaining = from;
  }
  start() {
    const timer = setInterval(() => {
      this.emit('step', this.remaining);
      this.remaining--;
      if (this.remaining === 0) {
        clearInterval(timer);
        this.emit('done');
      }
    }, 100);
    return this;
  }
}

const c = new Countdown(3); 
c.on('step',(n) => console.log(`${n}...`));
c.once('done', () => console.log('liftoff'));
c.start();