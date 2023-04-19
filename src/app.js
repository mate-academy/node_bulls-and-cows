/* eslint-disable no-console */
'use strict';

const { terminal } = require('./terminal');
const { compareNumbers } = require('./compareNums');
const { getRandomNumber } = require('./generator');

const randomNum = getRandomNumber();

const playGame = () => {
  terminal.question('Guess a number: ', (input) => {
    const trimedInput = input.split(' ').join('');
    const isValidInputLength = new Set(trimedInput).size === 4;

    if (!isValidInputLength || isNaN(trimedInput)) {
      console.log('It has to be a number of 4 unique digits');

      playGame();

      return;
    }

    const { bulls, cows } = compareNumbers(trimedInput, randomNum);

    if (bulls < 4) {
      console.log(
        `Bulls: ${bulls}, cows: ${cows}. Try again!`
      );
      playGame();
    }

    if (randomNum === trimedInput) {
      console.log('Congratulations! You won!');
      terminal.close();
    }
  });
};

playGame();
