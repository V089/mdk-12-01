const number = 1;
const string = 'str';
const bigInt = 999n;
const boolean = false;
const Null = null;
const id = Symbol('id');
const object = {name: 'object', type: 'object', [id]: 1};
let undefiend; //через конст скрипт ломается, в консоли браузера ошибка начинает висеть
console.log('number', number, typeof number);
console.log('string', string, typeof string);
console.log('bigInt', bigInt, typeof bigInt);
console.log('boolean', boolean, typeof boolean);
console.log('Null', Null, typeof Null);
console.log('id', id, typeof id);
console.log('object', object, typeof object);
console.log('undefiend', undefiend, typeof undefiend);
