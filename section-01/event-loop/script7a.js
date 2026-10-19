console.log("A");

queueMicrotask(() => {
    console.log("Microtask");
});

process.nextTick(() => {
    console.log("nextTick");
});

console.log("B");