const net = require("net");

const server = net.createServer((socket) => {
    socket.on("close", () => {
        console.log("Socket closed");
    });

    socket.end("Hello");
});

server.listen(3000);