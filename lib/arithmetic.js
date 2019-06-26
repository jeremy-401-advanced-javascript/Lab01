'use strict';

let arithmetic = module.exports = {};

arithmetic.add = function(numbersArray) {
  return numbersArray.reduce((acc, cur) => acc + cur, 0);
};

arithmetic.subtract = function (numbersArray) {
  return numbersArray.reduce((acc, cur) => acc - cur);
};

arithmetic.mutiply = function (a,b) {
  if( typeof a !== 'number' || typeof b !== 'number' ) { return null; }
  return a*b;
};

arithmetic.divide = function (a,b) {
  if( typeof a !== 'number' || typeof b !== 'number' ) { return null; }
  return a/b;
};
