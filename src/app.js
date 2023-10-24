'use strict';

const generateRandomNumber = require('./numberGenerator');
const calculateBullsAndCows = require('./bullsAndCowsCalculator');
const { askQuestion, close } = require('./io');

const MAX_DIGITS = 4;
const MAX_ATTEMPTS = 10;

async function playGame() {
  const secretNumber = generateRandomNumber();
  let tries = 0;

  /* eslint-disable no-console */
  console.log('Welcome to Bulls and Cows! Try to guess the 4-digit number.');

  while (tries < MAX_ATTEMPTS) {
    const guess = await askQuestion(`Attempt ${++tries}: `);

    if (guess.length !== MAX_DIGITS || [...new Set(guess)].length !== MAX_DIGITS
    || isNaN(guess)) {
      /* eslint-disable no-console */
      console.log(
        'Invalid input. Please enter a 4-digit number with unique digits.');
      continue;
    }

    const result = calculateBullsAndCows(secretNumber, guess);

    if (result.bulls === MAX_DIGITS) {
      /* eslint-disable no-console */
      console.log(`Congratulations! You've guessed the number (
        ${secretNumber}) in ${tries} tries.`);
      break;
    }

    console.log(`Bulls: ${result.bulls}, Cows: ${result.cows}`);
  }

  if (tries === MAX_ATTEMPTS) {
    console.log(`You've used all
    ${MAX_ATTEMPTS} attempts. The secret number was ${secretNumber}.`);
  }

  close();
}

playGame();
