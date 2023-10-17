/* eslint-disable no-console */
'use strict';

const { numGenerator } = require('./numGenerator.js');
const readline = require('readline');

const digitsToGuess = numGenerator();

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.clear();

const ask = () => {
  let bull = 0;
  let cow = 0;

  terminal.question('Guess a 4 digit number: ', (num) => {
    for (let i = 0; i < 4; i++) {
      if (num[i] === digitsToGuess[i]) {
        bull++;
      }

      if (digitsToGuess.includes(num[i])) {
        cow++;
      }
    }

    if (num.length !== 4 || isNaN(+num)) {
      console.log('You must enter a 4 digit number');
      ask();

      return;
    }
    cow -= bull;
    console.log('bull: ', bull, ', cow: ', cow);

    if (bull !== 4) {
      ask();
    } else {
      console.log('You won! Number is:', digitsToGuess, '\n');
      terminal.close();
    }
  });
};

ask();
