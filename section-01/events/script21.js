process.on('uncaughtException', (err, origin) => {
  console.error(`uncaught: ${err.message} (origin: ${origin})`);
  // last resort: log it, release what you can, then exit
  process.exit(1);
});
setTimeout(() => {
  throw new Error('boom');
}, 10);

setTimeout(
  () => console.log('this never prints, we exited')
  , 50
);