'use strict';

const readline = require('readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const numberToGuess = generateRandomNumber().toString();
const terminal = readline.createInterface(process.stdin, process.stdout);

function start() {
  terminal.question('Guess a 4 digit number: \n', (userInput) => {
    if (!checkIsValidUserInput(userInput)) {
      start();
    } else {
      if (numberToGuess === userInput) {
        getBullsAndCows(userInput, numberToGuess);
        terminal.close();
      } else {
        getBullsAndCows(userInput, numberToGuess);
        start();
      }
    }
  });
}

start();
