const t0 = Date.now();
setTimeout(() => console.log(`timer fired after ${Math.round((Date.now() - t0) / 100) * 100} ms`), 0);

async function heavy() {
  const end = Date.now() + 1000;
  while (Date.now() < end) {}        // CPU-bound work inside an async function
}

console.log('calling heavy()...');
heavy();
console.log(`heavy() returned after ${Math.round((Date.now() - t0) / 100) * 100} ms`);