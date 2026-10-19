console.log("A");

process.nextTick(() => {
    console.log("nextTick");
});

setImmediate(() => {
    console.log("Immediate");
});

console.log("B");