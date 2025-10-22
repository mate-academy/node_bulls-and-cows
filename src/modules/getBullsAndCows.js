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
  /* Write your code here */
  // Convert numbers to strings for easier comparison
  const input = userInput.toString().padStart(4, '0');
  const target = numberToGuess.toString().padStart(4, '0');

  let bulls = 0;
  let cows = 0;

  // Track which digits have been used
  const usedInput = new Array(4).fill(false);
  const usedTarget = new Array(4).fill(false);

  // First pass - count bulls (matching positions)
  for (let i = 0; i < 4; i++) {
    if (input[i] === target[i]) {
      bulls++;
      usedInput[i] = true;
      usedTarget[i] = true;
    }
  }

  // Second pass - count cows (matching digits in wrong positions)
  for (let i = 0; i < 4; i++) {
    if (!usedInput[i]) {
      for (let j = 0; j < 4; j++) {
        if (!usedTarget[j] && input[i] === target[j]) {
          cows++;
          usedInput[i] = true;
          usedTarget[j] = true;
          break;
        }
      }
    }
  }

  return { bulls, cows };
}

module.exports = {
  getBullsAndCows,
};
