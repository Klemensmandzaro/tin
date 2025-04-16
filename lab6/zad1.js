const prostokat = (a, b) => a * b;

const rownoleglobok = (a, h) => a * h;

const trapez = (a, b, h) => ((a + b) * h) / 2;

const trojkat = (a, h) => (a * h) / 2;
 
const pole = (callback, ...args) => callback(...args);
 
console.log('zadanie 1');

console.log('trojkat(5, 6):', pole(trojkat, 5, 6));

console.log('równoległobok(5, 6):', pole(rownoleglobok, 5, 6));

console.log('prostokat(5, 6):', pole(prostokat, 5, 6));

console.log('trapez(3, 5, 6):', pole(trapez, 3, 5, 6));
