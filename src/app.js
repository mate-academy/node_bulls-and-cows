'use strict';

const { generateNumber } = require('./numberGenerator');
const { bullsAndCows } = require('./bullsAndCows');
const { inputFunction } = require('./inputOutput');

const secretNumber = generateNumber();

function game() {
  inputFunction('Enter a 4-digit number: ', (guess) => {
    if (!isValidGuess(guess)) {
      game();

      return;
    }

    const result = bullsAndCows(secretNumber, guess);

    if (!result.bulls === 4) {
      game();
    }
  });
};

const VALID_GUESS_PATTERN = /^\d{4}$/;

function isValidGuess(guess) {
  return VALID_GUESS_PATTERN.test(guess) && new Set(guess).size === 4;
}

game();
