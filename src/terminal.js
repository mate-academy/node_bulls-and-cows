/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { calculationОfResults } = require('./calculationОfResults');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const terminalOperations = (
  message,
  generatedNumber
) => {
  terminal.question(
    message,
    (guess) => {
      if (guess.length !== 4
      || guess.split('').some(num => Number.isNaN(+num))
      || new Set(guess).size !== generatedNumber.length
      ) {
        console.log('oops... the number is not in the correct format');
        terminalOperations('Try once again ', generatedNumber);
      } else {
        calculationОfResults(generatedNumber, guess)
          ? terminal.close()
          : terminalOperations(
            'You are on the right track! Let\'s continue! ',
            generatedNumber);
      }
    });
};

module.exports = { terminalOperations };
