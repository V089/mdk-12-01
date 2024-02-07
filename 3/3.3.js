console.log(Number(console.log), String(console.log), Boolean(console.log));

const a = {name: 'Maxim'};
console.log(Number(a), String(a), Boolean(a));

const b = Symbol('key');
console.log(String(b), Boolean(b));

console.log(Number(Number), String(Number), Boolean(Number));

console.log(Number(''), String(''), Boolean(''));

console.log(Number(0), String(0), Boolean(0));

console.log(Number(-10), String(-10), Boolean(-10));

console.log(Number('-105'), String('-105'), Boolean('-105'));