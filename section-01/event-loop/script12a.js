queueMicrotask(() => {
    console.log("1");

    queueMicrotask(() => {
        console.log("2");
    });
});

console.log("3");