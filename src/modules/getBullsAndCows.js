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
function getBullsAndCows(userInput, numberToGuess) {
  const user = String(userInput).split('');
  const guess = String(numberToGuess).split('');
  const bullAndCows = {
    bulls: 0,
    cows: 0,
  };

  const userObj = user.reduce((acc, value, index) => {
    acc[value] = index;

    return acc;
  }, {});

  const guessObj = guess.reduce((acc, value, index) => {
    acc[value] = index;

    return acc;
  }, {});

  for (const key in userObj) {
    if (key in guessObj && userObj[key] !== guessObj[key]) {
      bullAndCows.cows++;
    } else if (userObj[key] === guessObj[key]) {
      bullAndCows.bulls++;
    }
  }

  return bullAndCows;
}

module.exports = {
  getBullsAndCows,
};
