let a = 1;
console.log(Number(a), Boolean(a), String(a));
let b = 'a';
console.log(Number(b), Boolean(b), String(b));
let c = false;
console.log(Number(c), Boolean(c), String(c));
let d = null;
console.log(Number(d), Boolean(d), String(d));
let e;
console.log(Number(e), Boolean(e), String(e));
let f = Symbol(id);
console.log(Boolean(f), String(f));
let g = 1734601n;
console.log(Number(g), Boolean(g), String(g));
let h = {pass: qwerty, id: 1};
console.log(Number(h), Boolean(h), String(h));