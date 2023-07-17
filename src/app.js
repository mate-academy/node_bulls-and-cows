'use strict';

const generateRandomNumber = require('./randomNumberGenerator.js');
const calculateBullsAndCows = require('./bullsAndCowsCalculator.js');
const getUserInput = require('./ioHandler.js');

async function playGame() {
  const target = generateRandomNumber();

  let guessed = false;

  while (!guessed) {
    const guess = await getUserInput(
      'Enter a 4-digit number with distinct digits: '
    );

    const [bulls, cows] = calculateBullsAndCows(guess, target);

    // eslint-disable-next-line no-console
    console.log(`Bulls: ${bulls}`);
    // eslint-disable-next-line no-console
    console.log(`Cows: ${cows}`);

    if (bulls === 4) {
      guessed = true;
      // eslint-disable-next-line no-console
      console.log('Congratulations! You guessed the number!');
    }
  }
}

playGame();
