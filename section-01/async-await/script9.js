async function risky() {
  await null;
  throw new Error('later boom');
}
async function main() {
  try {
    await risky();
  } catch (err) {
    console.log('caught with try/catch:', err.message);
  }
}
main();