const net = require("net");

const server = net.createServer((socket) => {
    console.log("Client connected");
});

server.listen(3000, () => {
    console.log("Listening...");
});