'use strict';

function calculateBullsAndCows(generatedNumber, guess) {
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === generatedNumber[i]) {
      bulls++;
    }

    if (generatedNumber.includes(guess[i])
      && generatedNumber[i] !== guess[i]) {
      cows++;
    }
  }

  return [bulls, cows];
}

module.exports = {
  calculateBullsAndCows,
};
