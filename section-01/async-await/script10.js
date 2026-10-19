// process.on('unhandledRejection', (reason) => console.log('unhandled rejection:', reason.message));

async function risky() { 
  await null;
  throw new Error('forgot to await me');
}

try {
  await risky();                       // no await: the try/catch cannot see this
} catch (err) {
  console.log('never prints');
}

console.log('try/catch finished without catching anything');