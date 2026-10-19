const http = require('node:http');
const server = http.createServer();
server.on('listening', () => console.log('server event: listening'));
server.on('request', (req, res) => { console.log('server event: request', req.method, req.url); res.end('ok'); });
server.on('close', () => console.log('server event: close'));
server.listen(0, async () => {
  const { port } = server.address();
  const r = await fetch(`http://127.0.0.1:${port}/hello`);
  console.log('client got:', await r.text());
  server.close();
});