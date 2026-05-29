const Computador = require('./Computador');

const c1 = new Computador('Dell', 'XPS 15', 'Intel Core i7', 16, 512);
const c2 = new Computador('Apple', 'MacBook Pro', 'Apple M1', 16, 1024);
const c3 = new Computador('Lenovo', 'ThinkPad X1 Carbon', 'Intel Core i5', 8, 256);

console.log('-------------------');
c1.printInfo();
console.log('-------------------');
c2.printInfo();
console.log('-------------------');
c3.printInfo();
console.log('-------------------');