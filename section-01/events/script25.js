
queueMicrotask(() => console.log('queueMicrotask'));
Promise.resolve().then(() => console.log('promise reaction'));
console.log('sync');