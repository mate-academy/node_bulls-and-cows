'use strict';

const { cliService } = require('./cli.service');
const { validateNumber } = require('./../utils/validation');

const getCows = (targetNumber, userNumber) => {
  let cows = 0;

  for (let i = 0; i < targetNumber.length; i++) {
    if (
      targetNumber.includes(userNumber[i])
      && targetNumber[i] !== userNumber[i]
    ) {
      cows++;
    }
  }

  return cows;
};

const getBulls = (targetNumber, userNumber) => {
  let bulls = 0;

  for (let i = 0; i < targetNumber.length; i++) {
    if (targetNumber[i] === userNumber[i]) {
      bulls++;
    }
  }

  return bulls;
};

const startNewRound = (targetNumber) => {
  cliService.question('Guess the number: ', (userNumber) => {
    const isValidNumber = validateNumber(userNumber);

    if (!isValidNumber) {
      // eslint-disable-next-line no-console
      console.log('Number is not valid');
      startNewRound(targetNumber);

      return;
    }

    if (userNumber === targetNumber) {
      // eslint-disable-next-line no-console
      console.log('You won!');

      cliService.close();

      return;
    }

    const cows = getCows(targetNumber, userNumber);
    const bulls = getBulls(targetNumber, userNumber);

    // eslint-disable-next-line no-console
    console.log(`${cows} cows and ${bulls} bulls`);
    startNewRound(targetNumber);
  });
};

module.exports = { startNewRound };
