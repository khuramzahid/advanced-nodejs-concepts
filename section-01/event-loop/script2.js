setTimeout(() => {
  console.log('timeout 1');
  Promise.resolve().then(() => console.log('  microtask queued by timeout 1'));
}, 0);

setTimeout(() => {
  console.log('timeout 2');
}, 0);