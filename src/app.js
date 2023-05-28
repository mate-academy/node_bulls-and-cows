/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const checkNumber = require('./checkNumber');
const geBullsAndCows = require('./bullsAndCowsCount');
const getRanndomNumber = require('./randomNumberGenerator');

const randomNumber = getRanndomNumber();

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function bullsAndCowsGame() {
  terminal.question('What is your number?', (number) => {
    const enteredNumber = checkNumber(number);

    if (!enteredNumber) {
      return bullsAndCowsGame();
    }

    const { bulls, cows } = geBullsAndCows(randomNumber, enteredNumber);

    if (bulls === 4) {
      console.log(`You won! The number is ${randomNumber}`);
      terminal.close();
    } else {
      console.log(`bulls: ${bulls}, cows: ${cows}`);
      bullsAndCowsGame();
    }
  });
}

bullsAndCowsGame();
