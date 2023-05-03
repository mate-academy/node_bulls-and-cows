/* eslint-disable no-console */
'use strict';

const { generatorRandomNumber } = require('./randomNumber');
const { terminal } = require('./terminal');
const { compareInputNumber } = require('./compareInputNumber');
const randomNumber = generatorRandomNumber();

global.console.log(randomNumber);

const gameCowsAndBulls = () => {
  terminal.question('Try to guess numeric (1000-9999): ', (number) => {
    if (String(number).trim().length < 4) {
      console.log('WRONG! You must input numeric between 1000 and 9999');

      return gameCowsAndBulls();
    }

    if (number === randomNumber) {
      console.log('You win!');
      terminal.close();
    }

    const result = compareInputNumber(number, randomNumber);

    if (typeof result === 'object') {
      const { bulls, cows } = result;

      console.log(`You have ${bulls} Bulls, and ${cows} Cows`);
    } else {
      console.log(result);
    }

    gameCowsAndBulls();
  });
};

gameCowsAndBulls();
