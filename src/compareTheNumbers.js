'use strict';

const { terminal } = require('./terminal');
const { findBullsAndCows } = require('./findBullsAndCows');
const isNumber = require('is-number');
const { isAllDigitsUnique } = require('./isAllDigitsUnique');

function compareTheNumbers(message, randomNumber) {
  terminal.question(message, (num) => {
    const isLengthCorrect = num.length === 4;
    const isNumANumber = isNumber(num);
    const isUnique = isAllDigitsUnique(num);

    if (!isLengthCorrect || !isNumANumber || !isUnique) {
      compareTheNumbers('the Number Is Invalid, try again ', randomNumber);

      return;
    }

    if (randomNumber === +num) {
      compareTheNumbers('you got it, congratulation');

      terminal.close();

      return;
    }

    if (randomNumber !== +num) {
      const bullsAndCows = findBullsAndCows(randomNumber, num);

      compareTheNumbers(bullsAndCows + ' try again ', randomNumber);
    }
  });
};

module.exports.compareTheNumbers = compareTheNumbers;
