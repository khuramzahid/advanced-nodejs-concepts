// EventTarget (web style)
const t = new EventTarget();
t.addEventListener('ping', (ev) => console.log('listener 1 got an Event object:', ev.type));
t.addEventListener('ping', () => { throw new Error('listener 2 blew up'); });
t.addEventListener('ping', () => console.log('listener 3 still runs'));
process.on('uncaughtException', (err) => console.log('reported later as uncaughtException:', err.message));

console.log('before dispatch');
t.dispatchEvent(new Event('ping'));
console.log('after dispatch');