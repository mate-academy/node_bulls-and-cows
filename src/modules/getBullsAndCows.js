'use strict';

/**
 * Calculate the number of bulls and cows for a given user input.
 * Bulls are digits that are in the correct position.
 * Cows are digits that are in the wrong position.
 *
 * @param {number|string} userInput - The user input (4-digit)
 * @param {number|string} numberToGuess - The number to guess (4-digit)
 * @return {object} An object with properties { bulls, cows }
 */
function getBullsAndCows(guess, target) {
  const guessStr = String(guess);
  const targetStr = String(target);

  let bulls = 0;
  let cows = 0;

  const unmatchedGuess = [];
  const unmatchedTarget = [];

  for (let i = 0; i < 4; i++) {
    const guessedDigit = guessStr[i];
    const targetDigit = targetStr[i];

    if (guessedDigit === targetDigit) {
      bulls++;
    } else {
      unmatchedGuess.push(guessedDigit);
      unmatchedTarget.push(targetDigit);
    }
  }

  for (const digit of unmatchedGuess) {
    const index = unmatchedTarget.indexOf(digit);

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
