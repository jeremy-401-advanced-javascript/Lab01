'use strict';

const greet = require('../lib/greet.js');
const faker = require('faker');

describe('greet module', () => {
  it('greets a person', () => {
    let myWord = faker.random.number();
    let expected = `Hi, ${myWord}`;
    // let greeting = greet.sayHello(myWord);
    expect(greet.sayHello(myWord)).toEqual(expected);
  });
});



