/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { bull } = require('./bull');
const { cow } = require('./cow');
const { randomNumber } = require('./getRandomNumber');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(randomNumber);

const question = () => {
  terminal.question('\nEnter 4 different digits: ', userInput => {
    if (!(/^(?:(\d)(?!.*\1)){4}$/.test(userInput))) {
      console.log(`Error: you entered wrong combination`);

      question();
    } else if (userInput === randomNumber) {
      console.log(`You won!`);
      terminal.close();
    } else {
      const bulls = bull(userInput);
      const cows = cow(userInput);

      console.log(`The result is ${bulls} bull('s) and ${cows} cow('s)`);
      question();
    }
  });
};

question();
