console.log("A");

queueMicrotask(() => {
    console.log("Microtask");
});

console.log("B");