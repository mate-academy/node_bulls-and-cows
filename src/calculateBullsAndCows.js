'use strict';

function calculateBullsAndCows(startNumber, guessedNumber) {
  let bulls = 0;
  let cows = 0;
  const strStartNumber = String(startNumber);
  const strGuessedNumber = String(guessedNumber);

  for (let n = 0; n < 4; n++) {
    for (let i = 0; i < 4; i++) {
      if (strGuessedNumber.charAt(i) === strStartNumber.charAt(n) && i === n) {
        bulls++;
      } else {
        if (strGuessedNumber.charAt(i) === strStartNumber.charAt(n)) {
          cows++;
        }
      }
    }
  }

  if (bulls === 4) {
    // eslint-disable-next-line no-console
    console.log('You win!');
  } else {
    // eslint-disable-next-line no-console
    console.log(`${bulls} bull(s) and ${cows} cow(s)`);
  }
}

module.exports.calculateBullsAndCows = calculateBullsAndCows;
