/* eslint-disable no-console */
'use strict';

const { generateNumber } = require('./generateNumber');
const { getBullsAndCows } = require('./getBullsAndCows');
const { getValidationError } = require('./getValidationError');
const { terminal } = require('./inputOutput');

const startGame = () => {
  const guessedNumber = generateNumber();

  console.log(guessedNumber);

  const getNumber = () => {
    terminal.question(
      'Please, enter number with 4 unique digits: ',
      (number) => {
        const validationError = getValidationError(number);

        if (!validationError) {
          checkGameOver(number);
        } else {
          console.log(validationError);
          getNumber();
        }
      });
  };

  const checkGameOver = (inputNumber) => {
    if (inputNumber === guessedNumber) {
      console.log('Congratulations!');
      terminal.close();
    } else {
      const bullsAndCows = getBullsAndCows(inputNumber, guessedNumber);

      console.log(
        `You have ${bullsAndCows.bulls} bull(s) and ${bullsAndCows.cows} cow(s)`
      );

      getNumber();
    }
  };

  getNumber();
};

startGame();
