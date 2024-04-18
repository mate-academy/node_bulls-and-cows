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
 // eslint-disable-next-line max-len, max-len
 * @return {object} An object containing the number of bulls and cows.
 * Example: { bulls: 1, cows: 2 }
 */
function getBullsAndCows(userInput, numberToGuess) {
  const userInputArr = userInput.toString().split('');
  const numberToGuessArr = numberToGuess.toString().split('');

  let bulls = 0;
  let cows = 0;

  userInputArr.forEach((num, i) => {
    if (numberToGuessArr.includes(num)) {
      if (numberToGuessArr[i] === num) {
        bulls++;
      } else {
        cows++;
      }
    }
  });

  return { bulls, cows };
}

module.exports = {
  getBullsAndCows,
};
