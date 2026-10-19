console.log("A");

setImmediate(() => {
    console.log("Immediate");
});

console.log("B");