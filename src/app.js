/* eslint-disable no-console */
'use strict';

const { generateNumber } = require('./modules/generateNumber');
const { getNumberFromUser } = require('./modules/inputNumber');
const { calculate } = require('./modules/calculating');

const playGame = async() => {
  let result = {
    bulls: 0,
    cows: 0,
  };

  const generatedNumber = generateNumber();

  while (result.bulls !== 4) {
    const userNumber = await getNumberFromUser();

    result = calculate(generatedNumber, userNumber);
    console.log(result);
    console.log('\n');
  }

  if (result.bulls === 4) {
    console.log('\x1b[31m%s\x1b[0m', 'YOU WON!!!');
  }
};

playGame();
