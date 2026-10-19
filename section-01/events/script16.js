process.on('SIGUSR2', () => {
  console.log('signal callback');
  Promise.resolve().then(() => console.log('microtask after signal callback'));
  process.nextTick(() => console.log('nextTick after signal callback'));
});
setTimeout(() => process.kill(process.pid, 'SIGUSR2'), 50);
setTimeout(() => console.log('timer'), 200);