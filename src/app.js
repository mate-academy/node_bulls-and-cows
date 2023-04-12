/* eslint-disable no-console */
'use strict';

const { terminal } = require('./terminal');
const { compareNumbers } = require('./compareNums');
const { getRandomNumber } = require('./generator');

const randomNum = getRandomNumber();

const playGame = () => {
  terminal.question('Guess a number: ', (input) => {
    const trimedInput = input.split(' ').join('');
    const isValidInput = new Set(trimedInput).size === 4;

    if (!isValidInput || isNaN(trimedInput)) {
      console.log('It has to be a number of 4 unique digits');
    } else {
      compareNumbers(trimedInput, randomNum);
    }

    if (randomNum === trimedInput) {
      console.log('Congratulations! You won!');
      terminal.close();
    } else {
      playGame();
    }
  });
};

playGame();
