/* eslint-disable no-console */
'use strict';

const { generateNumber } = require('./generateNumber');
const { getBullsAndCows } = require('./getBullsAndCows');
const { getValidationError } = require('./getValidationError');
const readlineSync = require('readline-sync');

const startGame = () => {
  const getDigitsCount = () => {
    const numberOfDigits = readlineSync.question(
      'Please, enter how long should number be (from 2 to 10): '
    );

    const count = +numberOfDigits;

    if (!isNaN(count) && count >= 2 && count <= 10) {
      console.log(`You choose ${numberOfDigits} digits`);

      return +numberOfDigits;
    }

    console.log('Unknown input! 4 digits by default was chosen');

    return 4;
  };

  const getNumber = () => {
    const number = readlineSync.question(
      `Please, enter number with ${digitsCount} unique digits: `
    );

    const validationError = getValidationError(number, digitsCount);

    if (!validationError) {
      checkGameOver(number);
    } else {
      console.log(validationError);
      getNumber();
    }
  };

  const checkGameOver = (inputNumber) => {
    if (inputNumber === guessedNumber) {
      console.log('Congratulations!');
      process.exit();
    } else {
      const bullsAndCows = getBullsAndCows(inputNumber, guessedNumber);

      console.log(
        `You have ${bullsAndCows.bulls} bull(s) and ${bullsAndCows.cows} cow(s)`
      );

      getNumber();
    }
  };

  const digitsCount = getDigitsCount();
  const guessedNumber = generateNumber(digitsCount);

  getNumber();
};

startGame();
