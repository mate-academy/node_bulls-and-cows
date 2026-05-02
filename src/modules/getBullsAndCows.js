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
  const numbersMap = new Map(
    String(numberToGuess)
      .split('')
      .map((digit, index) => [digit, index]),
  );
  const guessArr = String(userInput).split('');
  const score = { bulls: 0, cows: 0 };

  for (const guessDigit of guessArr) {
    if (
      numbersMap.has(guessDigit) &&
      guessArr.indexOf(guessDigit) === numbersMap.get(guessDigit)
    ) {
      // Present and correctly placed
      score.bulls = (score.bulls ?? 0) + 1;
    } else if (
      numbersMap.has(guessDigit) &&
      guessArr.indexOf(guessDigit) !== numbersMap.get(guessDigit)
    ) {
      // Present but incorrectly placed
      score.cows = (score.cows ?? 0) + 1;
    }
  }

  // Or result
  return score;
}

module.exports = {
  getBullsAndCows,
};
