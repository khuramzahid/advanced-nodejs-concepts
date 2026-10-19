const crypto = require("crypto");

for (let i = 1; i <= 8; i++) {
    crypto.pbkdf2(
        "password",
        "salt",
        200_000,
        64,
        "sha512",
        () => {
            console.log(`Job ${i} complete`);
        }
    );
}

setImmediate(() => {
    console.log("Event loop is still running");
});