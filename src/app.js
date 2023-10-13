/* eslint-disable no-console */

'use strict';

const { generateNumber } = require('./numberGenerator');
const { askGuess, closeInput } = require('./inputOutput');
const { calculate } = require('./bullsAndCowsCalculator');

const secretNumber = generateNumber();

const gameLoop = () => {
  askGuess((userGuess) => {
    if (userGuess.length !== 4 || new Set(userGuess).size !== 4) {
      // eslint-disable-next-line
      console.log('Invalid input. Please enter a number with 4 different digits.');

      return gameLoop();
    }

    const { bulls, cows } = calculate(secretNumber, userGuess);

    if (bulls === 4) {
      console.log('Congratulations! You won!');

      return closeInput();
    }

    console.log(`Bulls: ${bulls}, Cows: ${cows}`);
    gameLoop();
  });
};

gameLoop();
