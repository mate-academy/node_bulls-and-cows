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
  const userStr = userInput.toString();
  const guessStr = numberToGuess.toString();
  let bulls = 0;
  let cows = 0;

  const userUnmatched = [];
  const guessUnmatched = [];

  for (let i = 0; i < 4; i++) {
    if (userStr[i] === guessStr[i]) {
      bulls++;
    } else {
      userUnmatched.push(userStr[i]);
      guessUnmatched.push(guessStr[i]);
    }
  }

  for (const digit of userUnmatched) {
    if (guessUnmatched.includes(digit)) {
      cows++;

      const index = guessUnmatched.indexOf(digit);

      guessUnmatched.splice(index, 1);
    }
  }

  return { bulls, cows };
}

module.exports = {
  getBullsAndCows,
};
