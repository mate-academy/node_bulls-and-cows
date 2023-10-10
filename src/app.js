'use strict';
/* eslint-disable no-console */

const { generateRandomDigit } = require('./modules/generateRandomDigit');
const { calculateBullsAndCows } = require('./modules/calculatingBullsAndCows');
const { userInterface } = require('./modules/userInterface');

const computerDigits = generateRandomDigit();

const isValidDigits = (digits) => {
  if (digits.length !== 4) {
    return false;
  }

  const digitsArr = digits.split('');
  const uniqueDigits = [...new Set(digitsArr)];

  return uniqueDigits.length === digitsArr.length;
};

const question = () => {
  userInterface.question('Enter 4 unique digits: ', (userDigits) => {
    if (userDigits === computerDigits) {
      console.log(`You won!`);
      userInterface.close();

      return;
    }

    if (!isValidDigits(userDigits)) {
      console.log('Invalid digits, try again');
      question();

      return;
    };

    calculateBullsAndCows(computerDigits, userDigits);
    question();
  });
};

question();
