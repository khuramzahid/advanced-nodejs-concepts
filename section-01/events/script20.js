let rounds = 0;
process.on('beforeExit', () => {
  if (rounds++ < 2) {
    console.log(`beforeExit (round ${rounds}): loop is empty, scheduling more work`);
    setTimeout(() => console.log('  ...the extra work ran'), 10);
  } else {
    console.log('beforeExit: nothing new scheduled, really exiting');
  }
});
process.on('exit', () => console.log('exit'));
console.log('main done');