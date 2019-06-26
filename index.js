'use strict';

const greet = require('./lib/greet.js');
const math = require('./lib/arithmetic.js');

let myArray = [1, 0];

console.log(greet.sayHello('JOHN'));
console.log(math.add(myArray)); // 10
console.log(math.subtract(myArray)); // -8
console.log(math.mutiply(myArray)); // 24
console.log(math.divide(myArray)); // some decimal
