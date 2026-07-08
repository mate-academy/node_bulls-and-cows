/* eslint-disable no-console */
'use strict';

const { readline } = require('readline/promises');
const { generateRandomNumber } = require('./modules/generateRandomNumber.js');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput.js');
const { getBullsAndCows } = require('./modules/getBullsAndCows.js');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function game() {
  const secret = generateRandomNumber();

  let isGuessed = false;

  try {
    while (!isGuessed) {
      const answer = await rl.question('Write a number: ');

      if (!checkIsValidUserInput(answer)) {
        console.log("It's should have 4 digits");
        continue;
      }

      const result = getBullsAndCows(answer.trim(), secret);

      console.log(`Bulls: ${result.bulls}, Cows: ${result.cows}`);

      if (result.bulls === 4) {
        console.log('Win!');
        isGuessed = true;
      }
    }
  } catch (error) {
    console.log('Error');
  } finally {
    rl.close();
  }
}

game();
