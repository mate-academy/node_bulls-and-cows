'use strict';

const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const readline = require('node:readline');

const bcGame = () => {
  const generatedNum = generateRandomNumber();

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('Write a 4 digit number: ', (answer) => {
    const result = getBullsAndCows(+answer, generatedNum);

    if (checkIsValidUserInput(answer) && result.bulls === 4) {
      rl.close();
    }
  });
};

bcGame();
