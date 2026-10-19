async function g() { 
    console.log('g body runs NOW');
    return 1;
}

console.log('before');

const p = g();

console.log('after g() returned: ', p);

p.then(
    (v) => console.log('then:', v)
);