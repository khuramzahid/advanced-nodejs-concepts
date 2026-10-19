async function f() { throw new Error('boom'); }
try {
  const p = f();
  console.log('f() returned without throwing; a promise:', p instanceof Promise);
  p.catch((e) => console.log('rejection arrives later:', e.message));
} catch (e) {
  console.log('never prints');
}