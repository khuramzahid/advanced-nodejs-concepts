const fs = require('node:fs/promises');

async function main() {
  console.log('1: main() starts (sync)');
  const data = await fs.readFile(__filename, 'utf8');   // real I/O: the thread pool
  console.log('3: resumed after the file read finished');
}

main();
console.log('2: main() already returned; the call stack is free');