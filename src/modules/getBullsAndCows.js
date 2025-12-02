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
  /*
  AI Buddy, I won't change parameter names because I
  follow the initial structure and naming
  */

  const user = String(userInput).split('');
  const secret = String(numberToGuess).split('');

  const response = { bulls: 0, cows: 0 };

  const userUnused = [];
  const secretUnused = [];

  for (let i = 0; i < user.length; i++) {
    if (user[i] === secret[i]) {
      response.bulls++;
    } else {
      userUnused.push(user[i]);
      secretUnused.push(secret[i]);
    }
  }

  for (const digit of userUnused) {
    const idx = secretUnused.indexOf(digit);

    if (idx !== -1) {
      response.cows++;
      secretUnused.splice(idx, 1);
    }
  }

  return response;
}

module.exports = {
  getBullsAndCows,
};
