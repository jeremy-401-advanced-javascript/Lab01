'use strict';

const arithmetic = require('../lib/arithmetic.js');

const faker = require('faker');

describe('addition function', () =>  {
  it('Should return the sum of numbers in an Array', () => {
    let number1 = faker.random.number();
    let number2 = faker.random.number();
    let number3 = faker.random.number();
    let number4 = faker.random.number();
    let myArray = [number1, number2, number3, number4];
    expect(arithmetic.add(myArray)).toEqual(number1 + number2 + number3 + number4);
  });
  it('Checks for valid number', () => {
    let number1 = faker.random.word();
    let number2 = faker.random.number();
    let number3 = faker.random.number();
    let number4 = faker.random.number();
    let myArray = [number1, number2, number3, number4];
    expect(arithmetic.add(myArray)).toEqual('Not a number!');
  });
});

describe('substraction function', () =>  {
  it('Should return the  of numbers in an Array', () => {
    let number1 = faker.random.number();
    let number2 = faker.random.number();
    let number3 = faker.random.number();
    let number4 = faker.random.number();
    let myArray = [number1, number2, number3, number4];
    expect(arithmetic.subtract(myArray)).toEqual(number1 - number2 - number3 - number4);
  });
  it('Checks for valid number', () => {
    let number1 = faker.random.word();
    let number2 = faker.random.number();
    let number3 = faker.random.number();
    let number4 = faker.random.number();
    let myArray = [number1, number2, number3, number4];
    expect(arithmetic.subtract(myArray)).toEqual('Not a number!');
  });
});

describe('mutiply function', () =>  {
  it('Should return the product of numbers in an Array', () => {
    let number1 = faker.random.number();
    let number2 = faker.random.number();
    let number3 = faker.random.number();
    let number4 = faker.random.number();
    let myArray = [number1, number2, number3, number4];
    expect(arithmetic.mutiply(myArray)).toEqual(number1 * number2 * number3 * number4);
  });
  it('Checks for valid number', () => {
    let number1 = faker.random.word();
    let number2 = faker.random.number();
    let number3 = faker.random.number();
    let number4 = faker.random.number();
    let myArray = [number1, number2, number3, number4];
    expect(arithmetic.mutiply(myArray)).toEqual('Not a number!');
  });
});

describe('divide function', () =>  {
  it('Should return the quotient of numbers in an Array', () => {
    let number1 = faker.random.number();
    let number2 = faker.random.number();
    let myArray = [number1, number2];
    if (number1 !== 0) {
      expect(arithmetic.divide(myArray)).toEqual(number1 / number2);
    }
  });
  it('Checks for valid number', () => {
    let number1 = faker.random.word();
    let number2 = faker.random.number();
    let myArray = [number1, number2];
    expect(arithmetic.divide(myArray)).toEqual('Not a number!');
  });
});

