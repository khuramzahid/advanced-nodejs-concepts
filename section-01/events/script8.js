const net = require('node:net');
const http = require('node:http');
const fs = require('node:fs');
const cp = require('node:child_process');
const { MessageChannel } = require('node:worker_threads');

function chain(obj) {
  const names = [];
  for (let p = Object.getPrototypeOf(obj); p; p = Object.getPrototypeOf(p))
    names.push(p.constructor.name);
  return names.join(' -> ');
}
console.log('process        :', chain(process));
console.log('net.Server     :', chain(new net.Server()));
console.log('http.Server    :', chain(http.createServer()));
console.log('net.Socket     :', chain(new net.Socket()));
console.log('fs.ReadStream  :', chain(fs.createReadStream(__filename)));
console.log('ChildProcess   :', chain(cp.spawn(process.execPath, ['-e', '0'])));
console.log('AbortSignal    :', chain(new AbortController().signal));
console.log('MessagePort    :', chain(new MessageChannel().port1));