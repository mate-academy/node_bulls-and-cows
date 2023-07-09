'use strict';

const { generateNumber } = require('./numGenerator');
const { bullsAndCows } = require('./bullsAndCows');
const { inputFunc } = require('./inputOutput');

const secretNumber = generateNumber();

function game() {
  inputFunc('Enter a 4-digit number: ', (guess) => {
    if (!isValidGuess(guess)) {
      game();

      return;
    }

    const result = bullsAndCows(secretNumber, guess);

    !result.bulls === 4 && game();
  });
};

function isValidGuess(guess) {
  return /^\d{4}$/.test(guess) && new Set(guess).size === 4;
}

game();
