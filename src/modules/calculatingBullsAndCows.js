'use strict';

const calculateBullsAndCows = (computerDigits, userDigits) => {
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < computerDigits.length; i++) {
    if (computerDigits[i] === userDigits[i]) {
      bulls++;
    }

    if (computerDigits.includes(userDigits[i])) {
      cows++;
    }
  }
  // eslint-disable-next-line no-console
  console.log(`Bulls: ${bulls}. Cow: ${cows}!`);
};

module.exports = { calculateBullsAndCows };
