/* eslint-disable no-console */
'use strict';

const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { getBullsAndCows } = require('./modules/getBullsAndCows');
const { calculate } = require('./modules/calculate');

const playGame = async() => {
  let result = {
    bulls: 0,
    cows: 0,
  };

  const generatedNumber = generateRandomNumber();

  while (result.bulls !== 4) {
    const userNumber = await getBullsAndCows();

    result = calculate(generatedNumber, userNumber);
    console.log(result);
    console.log('\n');
  }

  if (result.bulls === 4) {
    console.log('\x1b[31m%s\x1b[0m', 'YOU WON!!!');
  }
};

playGame();
