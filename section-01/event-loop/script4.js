process.nextTick(() => {
  console.log('tick 1');
  Promise.resolve().then(() => console.log('  promise (queued inside tick 1)'));
});
process.nextTick(() => console.log('tick 2'));