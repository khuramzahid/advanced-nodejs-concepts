const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function sequential() {
  const t = Date.now();
  await sleep(200);
  await sleep(200);
  return Date.now() - t;
}
async function concurrent() {
  const t = Date.now();
  await Promise.all([sleep(200), sleep(200)]);
  return Date.now() - t;
}
(async () => {
  console.log('sequential ~', Math.round((await sequential()) / 100) * 100, 'ms');
  console.log('concurrent ~', Math.round((await concurrent()) / 100) * 100, 'ms');
})();