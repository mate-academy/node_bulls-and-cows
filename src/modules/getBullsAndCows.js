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
  const inputArr = userInput.toString().split('');
  const ansArr = numberToGuess.toString().split('');
  const bulls = [];

  return {
    bulls: inputArr.reduce((total, num, i) => {
      if (num === ansArr[i]) {
        bulls.push(num);

        return total + 1;
      }

      return total;
    }, 0),
    cows: inputArr.reduce(
      (total, num) =>
        ansArr.includes(num) && !bulls.includes(num) ? total + 1 : total,
      0,
    ),
  };
}

module.exports = {
  getBullsAndCows,
};
