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

  const askUser = () => {
    rl.question('Write a 4 digit number: ', (answer) => {
      if (checkIsValidUserInput(answer)) {
        const result = getBullsAndCows(+answer, generatedNum);

        if (result.bulls === 4) {
          rl.close();
        } else {
          askUser();
        }
      } else {
        askUser();
      }
    });
  };

  askUser();
};

bcGame();
