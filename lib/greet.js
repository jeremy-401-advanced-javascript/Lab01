'use strict';

let greet = module.exports = {};

greet.sayHello = (person) => {

  console.log('This is the Person 💥', person);
  if(typeof person !== 'string'){return null;}
  console.log(`Hi, ${person}`);

  return `Hi, ${person}`;
};