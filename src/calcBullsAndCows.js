'use strict';

const { generateRandomNumber } = require('./numberGenerator');

const secretNumber = generateRandomNumber().toString();

const checkBullsAndCows = (number) => {
  let bulls = 0;
  let cows = 0;
  const countNums = {};

  for (let i = 0; i < secretNumber.length; i++) {
    if (secretNumber[i] === number[i]) {
      bulls++;
    } else {
      if (secretNumber[i] in countNums) {
        countNums[secretNumber[i]]++;
      } else {
        countNums[secretNumber[i]] = 1;
      }
    }
  }

  for (let i = 0; i < number.length; i++) {
    if (secretNumber[i] !== number[i]
      && number[i] in countNums
      && countNums[number[i]] > 0
    ) {
      cows++;
      countNums[number[i]]--;
    }
  }

  if (bulls === 4) {
    return 'Congratulations! You guessed the number';
  } else {
    return `bulls: ${bulls}, cows: ${cows}`;
  }
};

module.exports = {
  checkBullsAndCows,
};
