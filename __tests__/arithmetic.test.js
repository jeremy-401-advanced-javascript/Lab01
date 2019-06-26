'use strict';

const arithmetic = require('../lib/arithmetic.js');

describe('addition function', () =>  {
  it('Should return the sum of numbers in an Array', () => {
    let myArray = [1, 2, 3, 4];
    expect(arithmetic.add(myArray)).toEqual(10);
  });
});

describe('substraction function', () =>  {
  it('Should return the  of numbers in an Array', () => {
    let myArray = [1, 2, 3, 4];
    expect(arithmetic.subtract(myArray)).toEqual(-8);
  });
});

describe('mutiply function', () =>  {
  it('Should return the product of numbers in an Array', () => {
    let myArray = [1, 2, 3, 4];
    expect(arithmetic.mutiply(myArray)).toEqual(24);
  });
});

describe('divide function', () =>  {
  it('Should return the quotient of numbers in an Array', () => {
    let myArray = [1, 2];
    expect(arithmetic.divide(myArray)).toEqual(0.5);
  });
});

