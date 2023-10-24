'use strict';

const generateRandomNumber = require('./numberGenerator');
const calculateBullsAndCows = require('./bullsAndCowsCalculator');
const { askQuestion, close } = require('./io');

async function playGame() {
  const secretNumber = generateRandomNumber();
  let tries = 0;

  /* eslint-disable no-console */
  console.log('Welcome to Bulls and Cows! Try to guess the 4-digit number.');

  while (true) {
    const guess = await askQuestion(`Attempt ${++tries}: `);

    if (guess.length !== 4 || [...new Set(guess)].length !== 4
    || isNaN(guess)) {
      /* eslint-disable no-console */
      console.log(
        'Invalid input. Please enter a 4-digit number with unique digits.');
      continue;
    }

    const result = calculateBullsAndCows(secretNumber, guess);

    if (result.bulls === 4) {
      /* eslint-disable no-console */
      console.log(`Congratulations! You've guessed the number (
        ${secretNumber}) in ${tries} tries.`);
      break;
    }

    console.log(`Bulls: ${result.bulls}, Cows: ${result.cows}`);
  }

  close();
}

playGame();
