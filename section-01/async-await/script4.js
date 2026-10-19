function show(label) {
  console.log(label + '\n' + new Error().stack.split('\n').slice(1, 4).join('\n') + '\n');
}

async function work() {
  show('BEFORE await (caller is still on the stack)');
  await null;
  show('AFTER await (fresh stack: where did the caller go?)');
}
function caller() { work(); }
caller();