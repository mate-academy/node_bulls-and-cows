/* eslint-disable no-console */
'use strict';

// Write your code here
const readline = require('readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const terminal = readline.createInterface(process.stdin, process.stdout);
const winningBullCount = 4;

function bullsAndCows() {
  const numberToGuess = generateRandomNumber();

  playGame(numberToGuess);
}

function playGame(numberToGuess) {
  terminal.question('Guess 4-digit number: ', (userInput) => {
    const isValidInput = checkIsValidUserInput(userInput);

    if (!isValidInput) {
      console.log('Invalid input');

      playGame(numberToGuess);
    } else {
      const result = getBullsAndCows(userInput, numberToGuess);

      console.log(`Result:`, result);

      if (result.bulls === winningBullCount) {
        console.log('You won! Guesses number:', numberToGuess);

        terminal.close();
      } else {
        playGame(numberToGuess);
      }
    }
  });
}

bullsAndCows();

module.exports = { bullsAndCows };
