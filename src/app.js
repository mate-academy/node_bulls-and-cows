'use strict';

const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

let secretNumber = generateRandomNumber();
let attempts = 0;

function makeGuess(userInput) {
  if (!checkIsValidUserInput(userInput)) {
    return 'Invalid input! Enter 4 digits, no duplicates plz )';
  }

  attempts++;

  const userNumber = parseInt(userInput);
  const result = getBullsAndCows(userNumber, secretNumber);

  if (result.bulls === 4) {
    return `You won in ${attempts} attempts!`;
  }

  return `Bulls: ${result.bulls}, Cows: ${result.cows}`;
}

function newGame() {
  secretNumber = generateRandomNumber();
  attempts = 0;

  return 'New game started!';
}

module.exports = {
  makeGuess,
  newGame,
};
