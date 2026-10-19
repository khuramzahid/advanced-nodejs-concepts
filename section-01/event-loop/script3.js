Promise.resolve().then(() => {
  console.log('promise A');
  process.nextTick(() => console.log('  nextTick (queued inside promise A)'));
});

Promise.resolve().then(() => console.log('promise B'));

Promise.resolve().then(() => console.log('promise C'));

setTimeout(() => console.log('timeout'), 0);