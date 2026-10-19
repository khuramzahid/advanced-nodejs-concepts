console.log('1: start');

setTimeout(() => {
  console.log('2: timeout callback');
}, 0);

Promise.resolve().then(() => {
  console.log('3: promise callback');
});

process.nextTick(() => {
  console.log('4: nextTick callback');
});

console.log('5: end');