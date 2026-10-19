let release;
const gate = new Promise((resolve) => { release = resolve; });

(async () => {
  await gate;
  console.log('async: continuation runs');
})();

setTimeout(() => {
  console.log('timer 1: resolving the promise');
  release();
}, 0);

setTimeout(() => console.log('timer 2'), 0);