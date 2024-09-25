/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber.js');
const { getBullsAndCows } = require('./modules/getBullsAndCows.js');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput.js');

const numberToGues = generateRandomNumber();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function question() {
  rl.question('What is your number?', (userAnswer) => {
    if (!checkIsValidUserInput(userAnswer)) {
      console.log('Number must include 4 unique digits');

      return question();
    }

    const result = getBullsAndCows(userAnswer, numberToGues);

    console.log(
      `Your number: ${userAnswer} ||`,
      `Random number: ${numberToGues}`,
      result,
    );
    rl.close();
  });
}

question();
