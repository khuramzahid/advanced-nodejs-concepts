console.log('before');

function blockFor(ms) {
  const end = Date.now() + ms;
  while (Date.now() < end) {} // busy-wait — CPU-bound, blocks everything
}

setTimeout(() => console.log('this is delayed!'), 0);

blockFor(3000); // nothing else can run for 3 full seconds
console.log('after');