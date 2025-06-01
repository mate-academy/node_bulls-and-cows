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
  const inputStr = userInput.toString();
  const guessStr = numberToGuess.toString();

  let bulls = 0;
  let cows = 0;
  const digitCount = {};

  // First pass: count bulls and track digit occurrences
  for (let i = 0; i < 4; i++) {
    if (inputStr[i] === guessStr[i]) {
      bulls++;
    } else {
      // Count digits in number to guess (excluding bulls)
      digitCount[guessStr[i]] = (digitCount[guessStr[i]] || 0) + 1;
    }
  }

  // Second pass: count cows (correct digits in wrong position)
  for (let i = 0; i < 4; i++) {
    if (inputStr[i] !== guessStr[i] && digitCount[inputStr[i]]) {
      cows++;
      digitCount[inputStr[i]]--;
    }
  }

  return { bulls, cows };
}

module.exports = {
  getBullsAndCows,
};
