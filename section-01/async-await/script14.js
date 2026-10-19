(async () => {
  console.log('-- for...of: one after another');
  for (const n of [1, 2, 3]) {
    await sleep(10);
    console.log('item', n, 'finished');
  }
  console.log('for...of finished (all items really are done)');

  console.log('-- Promise.all + map: all at once, still waited for');
  await Promise.all([1, 2, 3].map(async (n) => {
    await sleep(10);
    console.log('item', n, 'finished');
  }));
  console.log('Promise.all finished (all items really are done)');
})();