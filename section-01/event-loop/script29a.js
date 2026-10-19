const timer = setInterval(() => {
    console.log("Still alive");
}, 1000);

setTimeout(() => {
    clearInterval(timer);
}, 3500);