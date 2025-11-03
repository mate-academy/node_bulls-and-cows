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
  const userDigits = userInput.toString().split(''); // ['1','3','4','5']
  const serverDigits = numberToGuess.toString().split('');

  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < 4; i++) {
    if (userDigits[i] === serverDigits[i]) {
      bulls += 1;
    } else if (serverDigits.includes(userDigits[i])) {
      cows++;
    }
  }

  return { bulls, cows };
}

module.exports = {
  getBullsAndCows,
};
