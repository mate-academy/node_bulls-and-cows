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
 *Example: { bulls: 1, cows: 2 }
 */
function getBullsAndCows(userInput, numberToGuess) {
  // const result = {
  //   bulls: 0,
  //   cows: 0,
  // };

  const userNumberArr = userInput.toString().split('').map(Number);
  const randomNumberArr = numberToGuess.toString().split('').map(Number);

  const bulls = userNumberArr.reduce(
    (acc, num, idx) => {
      if (num === randomNumberArr[idx]) {
        acc.bulls += 1;
        randomNumberArr[idx] = null;
        userNumberArr[idx] = null;
      }

      return acc;
    },
    { bulls: 0, cows: 0 },
  );

  const cows = userNumberArr.reduce((acc, num) => {
    if (num !== null) {
      const index = randomNumberArr.indexOf(num);

      if (index !== -1) {
        acc.cows += 1;
        randomNumberArr[index] = null;
      }
    }

    return acc;
  }, bulls);

  return cows;
}

module.exports = {
  getBullsAndCows,
};
