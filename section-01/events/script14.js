setInterval(() => {
    console.log(process.pid);
}, 1000);                           // keeps the process alive

setTimeout(
    () => process.kill(process.pid, 'SIGINT')
, 25000);   // simulates pressing Ctrl+C