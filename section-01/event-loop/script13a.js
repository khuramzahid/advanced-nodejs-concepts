function keepRunning() {
    // console.log("tick");
    setImmediate(keepRunning);
}
keepRunning();

const timer = setInterval(() => {
    console.log("Interval");
}, 1000);

setTimeout(() => {
    clearInterval(timer);
}, 10000);

