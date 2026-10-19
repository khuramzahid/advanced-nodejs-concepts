async function a() {
  console.log('2 a: start');
  await b();
  console.log('6 a: after await b()');
}
async function b() {
  console.log('3 b: runs synchronously');
}
console.log('1 script start');
setTimeout(() => console.log('8 timeout'), 0);
a();
Promise.resolve().then(() => console.log('7 promise then'));
process.nextTick(() => console.log('5 nextTick'));
console.log('4 script end');