const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
[1, 2, 3].forEach(async (n) => {
  await sleep(10);
  console.log('item', n, 'finished');
});
console.log('forEach finished (but the items have not)');