let shuttingDown = false;
const heartbeat = setInterval(() => console.log('working...'), 100);   // stands in for a real resource

function shutdown(signal) {
  if (shuttingDown) {                       // a second signal: stop being polite
    console.log(`${signal} again -> forcing exit`);
    process.exit(1);
  }
  shuttingDown = true;
  console.log(`\n${signal} received, cleaning up...`);
  clearInterval(heartbeat);                 // release what keeps the loop alive
  // later in the course: close servers, database connections, flush logs
  console.log('clean up done, loop will empty and the process exits on its own');
}

process.on('SIGINT',  () => shutdown('SIGINT'));
process.on('SIGTERM', () => shutdown('SIGTERM'));

setTimeout(() => process.kill(process.pid, 'SIGINT'), 350);   // simulates Ctrl+C for the demo