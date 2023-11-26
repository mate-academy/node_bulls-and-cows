'use strict';

const { generateRandomNumber } = require('./generetRandomNumber');
const { calculateBullsAndCows } = require('./calculateBullsAndCows');
const { getInput, displayMessage, closeInterface } = require('./ioOperations');

async function playBullsAndCows() {
  const secretNumber = generateRandomNumber();
  let attempts = 0;

  while (true) {
    const userGuess = await getInput();

    attempts++;

    if (userGuess.length !== 4 || !/^\d{4}$/.test(userGuess)) {
      displayMessage(
        'Invalid input. Please enter a 4-digit number with unique digits.'
      );
      continue;
    }

    const { bulls, cows } = calculateBullsAndCows(secretNumber, userGuess);

    if (bulls === 4) {
      displayMessage(
        `Congratulations! `
        + `You guessed the number ${secretNumber} in ${attempts} attempts.`
      );
      break;
    } else {
      displayMessage(`Bulls: ${bulls}, Cows: ${cows}`);
    }
  }

  closeInterface();
}

playBullsAndCows();
