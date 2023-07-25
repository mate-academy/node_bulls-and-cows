'use strict';

const calculatingBullsAndCows = (secretNumber, inputNumber) => {
  let cows = 0;
  let bulls = 0;

  for (let i = 0; i < 4; i++) {
    if (secretNumber.includes(inputNumber[i])) {
      cows++;
    }

    if (secretNumber[i] === inputNumber[i]) {
      bulls++;
    }
  }

  return [cows, bulls];
};

module.exports = { calculatingBullsAndCows };
