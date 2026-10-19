const fs = require("fs");

fs.readFile("large-file.txt", (err, data) => {
    if (err) throw err;

    console.log("File read complete");
});