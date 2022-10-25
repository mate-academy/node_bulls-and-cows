/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { generateDigits, inputResultCheck } = require('./generate');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const randomDigits = generateDigits();
let answer = '';

const ask = () => {
  terminal.question(
    'enter number with 4 different digits - try to guess PC number ',
    (num) => {
      answer = num;
      inputResultCheck(num, randomDigits);
      console.log(`PC is ${randomDigits}, your number is ${num}`);

      if (answer === randomDigits) {
        console.log(`You win the game!`);
        terminal.close();
      }

      if (answer !== randomDigits) {
        ask();
      }
    });
};

ask();
