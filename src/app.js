/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { generateDigits, inputResultCheck } = require('./generate');
const _ = require('lodash');

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
      if (num.length !== 4) {
        console.log('Enter 4 digits');

        return ask();
      } else if (_.uniq(num.split('')).length < 4) {
        console.log('Numbers should be uniq!');

        return ask();
      } else if (Number.isNaN(+num) || num.includes('e')) {
        console.log('Only numbers are expected!');

        return ask();
      }
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
