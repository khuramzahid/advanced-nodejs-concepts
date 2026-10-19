process.nextTick(() => console.log('nextTick callback'));

process.on('exit', (code) => {
  console.log(`exit event, code ${code}`);
  setTimeout(
    () => console.log('this timer NEVER runs')
    , 0
  );   // the loop is already gone
});

console.log('main done');