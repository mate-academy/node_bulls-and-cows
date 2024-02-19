'use strict';

/**
 * Calculate the number of bulls and cows for a given user input.
 * Bulls are digits that are in the correct position.
 * Cows are digits that are in the wrong position.
 * Assume that the user input and the number to guess
 * are always 4-digit numbers.
 *
 * @param {number} userInput - The user input
 * @param {number} numberToGuess - The number to guess
 * @return {object} An object containing the number of bulls and cows.
 * Example: { bulls: 1, cows: 2 }
 */
function getBullsAndCows(userInput, numberToGuessNum) {
  const numberToGuess = numberToGuessNum.toString();

  return `${userInput}`.split('').reduce((result, digit, index) => {
    const rightNum = numberToGuess[index];

    if (rightNum === digit) {
      return {
        ...result,
        bulls: result.bulls + 1,
      };
    }

    if (numberToGuess.includes(digit)) {
      return {
        ...result,
        cows: result.cows + 1,
      };
    }

    return result;
  }, {
    bulls: 0,
    cows: 0,
  });
}

module.exports = {
  getBullsAndCows,
};
