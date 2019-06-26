'use strict';

const arithmetic = require('../lib/arithmetic.js');

describe('addition function', () =>  {
  it('Should return the sum of numbers in an Array', () => {
    let myArray = [1, 2, 3];
    expect(arithmetic.add(myArray)).toEqual(6);
  });
});

describe('addition function', () =>  {
  it('Should return the  of numbers in an Array', () => {
    let myArray = [1, 2, 3];
    expect(arithmetic.add(myArray)).toEqual(-8);
  });
});

