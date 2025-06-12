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
  const userNums = String(userInput).split('');
  const targetNums = String(numberToGuess).split('');
  let bulls = 0;
  let cows = 0;

  const unmatchedUser = [];
  const unmatchedTarget = [];

  for (let i = 0; i < userNums.length; i++) {
    if (userNums[i] === targetNums[i]) {
      bulls++;
    } else {
      unmatchedUser.push(userNums[i]);
      unmatchedTarget.push(targetNums[i]);
    }
  }

  for (let i = 0; i < unmatchedUser.length; i++) {
    const index = unmatchedTarget.indexOf(unmatchedUser[i]);

    if (index !== -1) {
      cows++;
      unmatchedTarget.splice(index, 1);
    }
  }

  return { bulls, cows };
}

module.exports = {
  getBullsAndCows,
};
