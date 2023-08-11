'use strict';

function calculateBulls(generatedNumber, guess) {
  let bulls = 0;

  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === generatedNumber[i]) {
      bulls++;
    }
  }

  return bulls;
}

module.exports = {
  calculateBulls,
};
