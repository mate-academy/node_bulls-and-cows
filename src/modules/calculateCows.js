'use strict';

function calculateCows(generatedNumber, guess) {
  let cows = 0;

  for (let i = 0; i < guess.length; i++) {
    if (generatedNumber.includes(guess[i])
      && generatedNumber[i] !== guess[i]
    ) {
      cows++;
    }
  }

  return cows;
}

module.exports = {
  calculateCows,
};
