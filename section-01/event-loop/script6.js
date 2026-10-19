// nextTick
let n = 0;
setTimeout(
    () => console.log(`timeout fired (nextTicks run before it: ${n})`)
    , 0
);
function spinTick() { if (++n < 1_000_000) process.nextTick(spinTick); }
spinTick();