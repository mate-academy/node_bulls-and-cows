'use strict';

const { numberGenerator } = require('./numberGenerator');
const { cowBullCalculator } = require('./cowBullCalculator');
const { inputValidator } = require('./inputValidator');
const readline = require('readline');

const number = numberGenerator();
const startMessage = 'Guess the number: ';
const errorMessage = 'Error: invalid number format, try again: ';
const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

terminal.question(startMessage, async(userNumber) => {
  let inputNumber = userNumber;

  cowBullCalculator(number, inputNumber);

  while (number !== inputNumber) {
    await new Promise((resolve) => {
      terminal.question(inputValidator(inputNumber)
        ? startMessage
        : errorMessage,
      (uNumber) => {
        inputNumber = uNumber;
        cowBullCalculator(number, uNumber);
        resolve();
      });
    });
  }

  terminal.close();
});
