const fs = require("fs");

console.log("A");

fs.readFile(__filename, () => {
    console.log("File read complete");
});

console.log("B");