'use strict';

const { readline } = require('node:readline');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput.js');
const { getBullsAndCows } = require('./modules/getBullsAndCows.js');
const { generateRandomNumber } = require('./modules/generateRandomNumber.js');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const genereteNum = generateRandomNumber();

function askQuestion() {
  rl.question('Type a 4 length number from 1 to 9: ', (number) => {
    if (!checkIsValidUserInput(number)) {
      // eslint-disable-next-line no-console
      console.log('Wrong input Number');

      askQuestion();

      return;
    }

    const { bulls, cows } = getBullsAndCows(number.trim(), genereteNum);

    if (bulls === 4) {
      // eslint-disable-next-line no-console
      console.log('Congratulation, you suggest all numbers');
      rl.close();
    } else {
      // eslint-disable-next-line no-console
      console.log(`bulls: ${bulls}, cows: ${cows}`);

      askQuestion();
    }
  });
}

askQuestion();
