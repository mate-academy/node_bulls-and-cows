'use strict';
/* eslint-disable no-console */

const { generateRandomDigit } = require('./modules/generateRandomDigit');
const { calculateBullsAndCows } = require('./modules/calculatingBullsAndCows');
const { userInterface } = require('./modules/userInterface');

const computerDigits = generateRandomDigit();
const MAX_DIGITS_LENGTH = 4;

const isValidDigits = (digits) => {
  if (digits.length !== MAX_DIGITS_LENGTH || isNaN(+digits)) {
    return false;
  }

  const digitsArr = digits.split('');
  const uniqueDigits = [...new Set(digitsArr)];

  return uniqueDigits.length === digitsArr.length;
};

const startGame = () => {
  userInterface.question('Enter 4 unique digits: ', (userDigits) => {
    if (userDigits === computerDigits) {
      console.log(`You won!`);
      userInterface.close();

      return;
    }

    if (!isValidDigits(userDigits)) {
      console.log('Invalid digits, try again');
      startGame();

      return;
    };

    calculateBullsAndCows(computerDigits, userDigits);
    startGame();
  });
};

startGame();
