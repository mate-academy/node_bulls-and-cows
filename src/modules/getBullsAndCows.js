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
  const answer = { bulls: 0, cows: 0 };
  const userNumbers = userInput.toString().split('');
  const quessNumbers = numberToGuess.toString().split('');

  for (let i = 0; i < userNumbers.length; i++) {
    if (quessNumbers.includes(userNumbers[i])) {
      if (quessNumbers[i] === userNumbers[i]) {
        answer.bulls++;
      } else {
        answer.cows++;
      }
    }
  }

  return answer;
}

module.exports = {
  getBullsAndCows,
};
