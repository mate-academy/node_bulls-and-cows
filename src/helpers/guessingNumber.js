'use strict';

const { bullsAndCows } = require('./bullsAndCows');
const { terminal } = require('./terminal');
const _ = require('lodash');
const { isValidNumber } = require('./isValidNumber');

const guessingNumber = (inputMessage, generatedNumber) => {
  terminal.question(inputMessage, (userNumber) => {
    if (!isValidNumber(userNumber)) {
      guessingNumber('Invalid number, try again:', generatedNumber);
    };

    if (_.isEqual(userNumber, generatedNumber)) {
      // eslint-disable-next-line no-console
      console.log('Congratulation! You win!');
      terminal.close();
    } else {
      const resultOfBullsAndCows = bullsAndCows(generatedNumber, userNumber);

      guessingNumber(`${resultOfBullsAndCows}, try again:`, generatedNumber);
    }
  });
};

module.exports = { guessingNumber };
