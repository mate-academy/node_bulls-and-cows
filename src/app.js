'use strict';

const generateNumber = require('./numberGenerator');
const calculateBullsAndCows = require('./bullsAndCowsCalculator');
const { getUserInput, displayMessage } = require('./ioOperations');

async function playBullsAndCows() {
  const targetNumber = generateNumber();
  let attempts = 0;

  while (true) {
    attempts++;

    const guess = await getUserInput('Enter your guess (4 different digits): ');

    if (!/^\d{4}$/.test(guess)) {
      displayMessage('Invalid input. Please enter 4 different digits.');
      continue;
    }

    const { bulls, cows } = calculateBullsAndCows(guess, targetNumber);

    displayMessage(`Bulls: ${bulls}, Cows: ${cows}`);

    if (bulls === 4) {
      displayMessage(`Congratulations! You found the number ${targetNumber}
      in ${attempts} attempts.`);
      break;
    }
  }
}

playBullsAndCows();
