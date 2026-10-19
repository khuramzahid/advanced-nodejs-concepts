async function worker(name, steps) {
  for (let i = 1; i <= steps; i++) {
    console.log(`${name}: step ${i}`);
    await null;
  }
}
worker('A', 3);
worker('B', 3);
console.log('main: done (both workers are suspended)');