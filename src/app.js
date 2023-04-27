'use strict';

const { generatorRandomNumber } = require('./randomNumber');
const { terminal } = require('./terminal');
const { compareInputNumber } = require('./compareInputNumber');
const randomNumber = generatorRandomNumber();

global.console.log(randomNumber);

const gameCowsAndBulls = () => {
  terminal.question('Try to guess numeric (1000-9999): ', (number) => {
    if (String(number).trim().length < 4) {
      global.console.log('WRONG! You must input numeric between 1000 and 9999');

      return gameCowsAndBulls();
    }

    if (number === randomNumber) {
      global.console.log('You win!');
      terminal.close();
    }

    compareInputNumber(number, randomNumber);
    gameCowsAndBulls();
  });
};

gameCowsAndBulls();
