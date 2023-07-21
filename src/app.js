'use strict';

const generateRandomNumber = require('./randomNumberGenerator.js');
const calculateBullsAndCows = require('./bullsAndCowsCalculator.js');
const getUserInput = require('./ioHandler.js');
const gameText = require('./constants.js');

async function playGame() {
  const target = generateRandomNumber();

  let guessed = false;

  while (!guessed) {
    const guess = await getUserInput(gameText.start);

    const [bulls, cows] = calculateBullsAndCows(guess, target);

    // eslint-disable-next-line no-console
    console.log(`Bulls: ${bulls}`);
    // eslint-disable-next-line no-console
    console.log(`Cows: ${cows}`);

    if (bulls === 4) {
      guessed = true;
      // eslint-disable-next-line no-console
      console.log(gameText.end);
    }
  }
}

playGame();
