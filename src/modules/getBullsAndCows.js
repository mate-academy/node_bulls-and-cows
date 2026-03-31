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
'use strict';

function getBullsAndCows(userInput, numberToGuess) {
  const userArr = String(userInput).split('');
  const targetArr = String(numberToGuess).split('');

  let bulls = 0;
  let cows = 0;

  const remainingUser = [];
  const remainingTarget = [];

  for (let i = 0; i < userArr.length; i++) {
    if (userArr[i] === targetArr[i]) {
      bulls++;
    } else {
      remainingUser.push(userArr[i]);
      remainingTarget.push(targetArr[i]);
    }
  }

  remainingUser.forEach((digit) => {
    if (remainingTarget.includes(digit)) {
      cows++;

      const index = remainingTarget.indexOf(digit);

      remainingTarget.splice(index, 1);
    }
  });

  return { bulls, cows };
}

module.exports = {
  getBullsAndCows,
};
