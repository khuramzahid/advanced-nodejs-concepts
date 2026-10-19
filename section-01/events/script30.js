const { port1, port2 } = new MessageChannel();

port2.on('message', (m) => {
    console.log('MessagePort event: message ->', m);
    port1.close();
});

port1.postMessage({ hello: 'world' });

console.log('postMessage returned; delivery is NOT synchronous');