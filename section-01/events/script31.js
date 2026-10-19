const t = new EventTarget();
t.addEventListener('greet', (ev) => console.log('custom event detail:', ev.detail));
t.dispatchEvent(new CustomEvent('greet', { detail: { who: 'Ravi' } }));