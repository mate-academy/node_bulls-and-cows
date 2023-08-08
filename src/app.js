/* eslint-disable no-console */
'use strict';

const { generateRandomNumber } = require('./generateRandomNumber');
const { calculateBullsAndCows } = require('./calculateBullsAndCows');
const { getUserInput, closeInterface } = require('./getUserInput');

(async () => {
  const secretNumber = generateRandomNumber();

  console.log('Welcome to Bulls and Cows game!');

  let attempts = 0;

  while (true) {
    const guess = await getUserInput('Enter your guess (4 different digits): ');

    console.log(`Your guess:  ${guess}`);

    if (new Set(guess).size !== 4 || isNaN(guess)) {
      console.log('Invalid input. Please enter 4 different digits.');
      continue;
    }

    attempts++;

    const result = calculateBullsAndCows(secretNumber, guess);

    console.log(`Bulls: ${result.bulls}, Cows: ${result.cows}`);

    if (result.bulls === 4) {
      console.log(
        `Congratulations! You guessed the number in ${attempts} attempts.`
      );
      closeInterface();
      break;
    }
  }
})();
