setTimeout(() => {
    console.log("Timer start");

    Promise.resolve().then(() => {
        console.log("Promise inside timer");
    });

    console.log("Timer end");
}, 0);