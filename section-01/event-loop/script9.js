const fs = require('node:fs');

setTimeout(() => console.log('timeout'), 0);
setImmediate(() => console.log('immediate'));

fs.readFile(__filename, () => {
  console.log('file read callback');
  setTimeout(() => console.log('timeout inside I/O'), 0);
  setImmediate(() => console.log('immediate inside I/O'));
});

console.log('main script end');