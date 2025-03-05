'use strict';

const readline = require('readline');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const terminal = readline.createInterface(process.stdin, process.stdout);

// Write your code here
function askNumbers() {
  terminal.question('Send FOUR numbers to check: ', (userInput) => {
    if (!checkIsValidUserInput(userInput)) {
      return askNumbers();
    }

    getBullsAndCows(+userInput, generateRandomNumber());
    terminal.close();
  });
}

askNumbers();
