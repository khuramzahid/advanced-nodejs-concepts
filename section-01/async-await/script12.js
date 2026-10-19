let n = 0;
setTimeout(() => console.log('timer fired after', n, 'awaits'), 0);
(async () => {
    while (n < 1_000_000) {
        await null;
        n++;
    } 
})();