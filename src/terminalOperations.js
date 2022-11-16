'use strict';

const readline = require('readline');
const { generateNumber } = require('./generatNumber');
const { calculateBullsAndCows } = require('./calculateBullsAndCows');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const number = generateNumber();

async function terminalOperations() {
  terminal.question('Guess the number: ', answer => {
    calculateBullsAndCows(number, answer);

    if (number === +answer) {
      terminal.close();
    } else {
      terminalOperations();
    }
  });
}

module.exports.terminalOperations = terminalOperations;
