setTimeout(() => {
    console.log("Timer start");

    process.nextTick(() => {
        console.log("nextTick");
    });

    console.log("Timer end");
}, 0);