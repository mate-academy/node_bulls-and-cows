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
function getBullsAndCows(secret, guess) {
  const s = secret.toString();
  const g = guess.toString();

  let bulls = 0;
  let cows = 0;

  const secretLeft = [];
  const guessLeft = [];

  for (let i = 0; i < 4; i++) {
    if (g[i] === s[i]) {
      bulls++;
    } else {
      secretLeft.push(s[i]);
      guessLeft.push(g[i]);
    }
  }

  for (const d of guessLeft) {
    const idx = secretLeft.indexOf(d);

    if (idx !== -1) {
      cows++;
      secretLeft.splice(idx, 1);
    }
  }

  return { bulls, cows };
}

module.exports = {
  getBullsAndCows,
};
