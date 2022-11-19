'use strict';

const { generateNumber } = require('./generateNumber');

const generatedNumber = generateNumber();
let count = 0;

const calculatingBullsAndCows = (guess) => {
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === generatedNumber[i]) {
      bulls++;
    } else if (generatedNumber.includes(guess[i])) {
      cows++;
    }
  }
  count++;

  if (bulls === 4) {
    return true;
  }

  return `bulls: ${bulls}, cows: ${cows} --- attempts: ${count}`;
};

module.exports = { calculatingBullsAndCows };
