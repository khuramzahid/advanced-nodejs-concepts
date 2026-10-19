const heartbeat = setInterval(() => console.log('working...'), 100);

process.on('SIGINT', () => {
  console.log('\nCaught Ctrl+C, cleaning up...');
  clearInterval(heartbeat);
});

console.log('Running. Press Ctrl+C to stop.');