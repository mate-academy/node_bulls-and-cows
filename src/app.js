/* eslint-disable max-len */
/* eslint-disable no-console */
'use strict';

const readline = require('readline-sync');
const { generateRandomNumber } = require('./generateNumber');
const { getBullsAndCows } = require('./calculateBullsAndCows');
const { checkIsValidUserInput } = require('./validateInput');

function playGame() {
  const numberToGuess = generateRandomNumber();
  let attempts = 0;

  console.log('Welcome to Bulls and Cows! Try to guess the 4-digit number.');

  while (true) {
    const userInput = readline.question('Enter your guess: ');

    if (!checkIsValidUserInput(userInput)) {
      console.log('Invalid input. Please enter a 4-digit number with no duplicate digits.');
      continue;
    }

    attempts++;

    const result = getBullsAndCows(parseInt(userInput), numberToGuess);

    console.log(`Result: Bulls - ${result.bulls}, Cows - ${result.cows}`);

    if (result.bulls === 4) {
      console.log(`Congratulations! You've guessed the number ${numberToGuess} in ${attempts} attempts.`);
      break;
    }
  }
}

playGame();

module.exports = {
  playGame,
};
