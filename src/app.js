/* eslint-disable no-console */
'use strict';

const readline = require('node:readline');

const { getBullsAndCows } = require('./modules/getBullsAndCows.js');
const { generateRandomNumber } = require('./modules/generateRandomNumber.js');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput.js');

const numberToGuess = generateRandomNumber();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask() {
  rl.question('What is your guess? ', (userInput) => {
    if (!checkIsValidUserInput(userInput)) {
      console.log('Enter valid number');
      ask();
    } else if (getBullsAndCows(userInput, numberToGuess).bulls === 4) {
      console.log('You win!');
      rl.close();
    } else {
      console.log(getBullsAndCows(userInput, numberToGuess));
      ask();
    }
  });
}

ask();
