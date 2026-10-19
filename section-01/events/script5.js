const fs = require('node:fs');
const stream = fs.createReadStream(__filename);
stream.on('data', function onData() {
  console.log(new Error('x').stack.split('\n').slice(1).join('\n'));
  stream.destroy();
});