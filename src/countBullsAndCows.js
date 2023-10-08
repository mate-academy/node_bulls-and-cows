'use strict';

function countBullsAndCows(generatedNumber, userNumber) {
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < 4; i++) {
    if (generatedNumber.includes(userNumber[i])) {
      if (generatedNumber.indexOf(userNumber[i]) === i) {
        bulls += 1;
      } else {
        cows += 1;
      }
    }
  }

  return [bulls, cows];
}

module.exports = { countBullsAndCows };
