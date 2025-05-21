'use strict';

const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const answer = generateRandomNumber();

function askQuestion() {
  rl.question('Guess number: \n', (number) => {
    if (!checkIsValidUserInput(number)) {
      askQuestion();

      return;
    }

    if (answer === +number) {
      rl.close();
    } else {
      // eslint-disable-next-line no-console
      console.log(getBullsAndCows(+number, answer));
      askQuestion();
    }
  });
}

askQuestion();
