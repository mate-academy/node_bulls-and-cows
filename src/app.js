/* eslint-disable no-console */
'use strict';

const readline = require('node:readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber.js');
const { getBullsAndCows } = require('./modules/getBullsAndCows.js');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput.js');

const randNum = generateRandomNumber();
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

askNumber();

function askNumber() {
  rl.question('Enter a number? ', (inputNum) => {
    let playing = true;

    if (checkIsValidUserInput(inputNum)) {
      const result = getBullsAndCows(inputNum, randNum);

      console.log(`bulls: ${result.bulls}, cows: ${result.cows}`);

      if (result?.bulls === 4) {
        playing = false;

        console.log(`You guess! The number is ${inputNum}`);
        rl.close();
      }

      if (playing) {
        askNumber();
      }
    }
  });
}
