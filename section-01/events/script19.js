process.on('exit', (code) => {
    console.log(`exit event, code ${code}`)
});
process.exitCode = 2;
console.log('exitCode set, finishing naturally');