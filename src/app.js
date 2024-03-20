/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const terminal = readline.createInterface(process.stdin, process.stdout);
const numberToGuess = generateRandomNumber();

function guessNumber() {
  terminal.question(`${numberToGuess}Enter 4 digits number: `, (userInput) => {
    if (!checkIsValidUserInput(userInput)) {
      console.log('Enter valid number!!!');

      return guessNumber();
    }

    if (numberToGuess === +userInput) {
      console.log('You won');
      terminal.close();

      return;
    }

    console.log(getBullsAndCows(+userInput, numberToGuess));

    return guessNumber();
  });
}

guessNumber();
