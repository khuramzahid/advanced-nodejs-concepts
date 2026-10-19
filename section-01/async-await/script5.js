setTimeout(() => console.log('timeout'), 0);
process.nextTick(() => console.log('nextTick'));
(async () => {
  console.log('async: start');
  await null;
  console.log('async: continuation (a microtask)');
})();
console.log('sync end');