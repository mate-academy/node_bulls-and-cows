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
  const user = userInput.toString().split('');
  const guess = numberToGuess.toString().split('');

  let bulls = 0;
  let cows = 0;

  const unmatchedUser = [];
  const unmatchedGuess = [];

  for (let i = 0; i < user.length; i++) {
    if (user[i] === guess[i]) {
      bulls++;
    } else {
      unmatchedUser.push(user[i]);
      unmatchedGuess.push(guess[i]);
    }
  }

  for (let i = 0; i < unmatchedUser.length; i++) {
    const index = unmatchedGuess.indexOf(unmatchedUser[i]);

    if (index !== -1) {
      cows++;
      unmatchedGuess.splice(index, 1);
    }
  }

  return {
    bulls,
    cows,
  };
}

module.exports = {
  getBullsAndCows,
};
