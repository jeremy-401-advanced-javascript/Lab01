'use strict';

let arithmetic = module.exports = {};

arithmetic.add = function(numbersArray) {
  return numbersArray.reduce((acc, cur) => acc + cur, 0);
};

arithmetic.subtract = function (numbersArray) {
  return numbersArray.reduce((acc, cur) => acc - cur);
};

arithmetic.mutiply = function (numbersArray) {
  return numbersArray.reduce((acc, cur) => acc * cur);
};

arithmetic.divide = function (numbersArray) {

  let myDivison =  numbersArray.reduce((acc, cur) => { 
    if (cur !== 0) {
      return acc / cur;
    }
  });
  return myDivison;
};

