const fs = require('node:fs');

console.log('before');
fs.readFile(__filename, 'utf8', () => {
  console.log('file finished reading');
});
console.log('after'); // this runs immediately, without waiting for the file