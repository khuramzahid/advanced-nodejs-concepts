// setImmediate
let n = 0;
setTimeout(() => console.log(`timeout fired (setImmediates run before it: ${n})`), 5);
function spinImm() { if (++n < 1_000_000) setImmediate(spinImm); }
spinImm();