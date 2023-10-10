'use strict';
/* eslint-disable no-console */

const calculateBullsAndCows = (computerDigits, userDigits) => {
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < computerDigits.length; i++) {
    const hasNumberIncluded = computerDigits.includes(userDigits[i]);

    if (hasNumberIncluded && computerDigits[i] === userDigits[i]) {
      bulls++;
    }

    if (hasNumberIncluded && computerDigits[i] !== userDigits[i]) {
      cows++;
    }
  }
  console.log(`Bulls: ${bulls}. Cow: ${cows}!`);
};

module.exports = { calculateBullsAndCows };
