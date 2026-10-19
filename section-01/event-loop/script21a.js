const crypto = require("crypto");

console.log("Starting");

crypto.pbkdf2(
    "password",
    "salt",
    100_000,
    64,
    "sha512",
    () => {
        console.log("Crypto complete");
    }
);

setImmediate(() => {
    console.log("Immediate");
});

console.log("JavaScript continues");