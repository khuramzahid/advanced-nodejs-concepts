const fs = require('node:fs');
const s = fs.createReadStream(__filename);
for (const name of ['open', 'ready', 'data', 'end', 'close']) {
  s.on(name, () => console.log('stream event:', name));
}