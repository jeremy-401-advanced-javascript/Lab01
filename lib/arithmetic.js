'use strict';

let arithmetic = module.exports = {};

function checkNumber(check) {
  for(let i = 0; i < check.length; i++) {
    if( typeof check[i] !== 'number') {
      return 'Not a number!';
    }
  }
}
arithmetic.add = function(numbersArray) {
  if(checkNumber(numbersArray)) {
    return 'Not a number!';
  } else {
    return numbersArray.reduce((acc, cur) => acc + cur, 0);
    
  }
};

arithmetic.subtract = function (numbersArray) {
  if(checkNumber(numbersArray)) {
    return 'Not a number!';
  } else {
    return numbersArray.reduce((acc, cur) => acc - cur);
  }
};

arithmetic.mutiply = function (numbersArray) {
  if(checkNumber(numbersArray)) {
    return 'Not a number!';
  } else {
    return numbersArray.reduce((acc, cur) => acc * cur);
  }
};

arithmetic.divide = function (numbersArray) {

  if(checkNumber(numbersArray)) {
    return 'Not a number!';
  } else {
    
    let myDivison =  numbersArray.reduce((acc, cur) => { 
      
      return acc / cur;
      
    });
    return myDivison;
  }
};

