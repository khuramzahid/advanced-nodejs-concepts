async function foo() {
  console.log('foo: starts (sync, on the call stack)');
  await null;
  console.log('foo: resumes after await');
}

console.log('before');
const p = foo();
console.log('after foo() returned:', p);