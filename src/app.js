/* eslint-disable no-console */
/* eslint-disable max-len */
'use strict';

const readline = require('node:readline');
const { getBullsAndCows } = require('./modules/getBullsAndCows');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(
  "Let's start Bulls and Cows! I've generated a 4-digit number (digits 1–9, all different). Try to guess it!",
);

const myDigits = generateRandomNumber();

game();

function game() {
  rl.question('Type your digits: ', (yourDigits) => {
    const error = checkIsValidUserInput(yourDigits);

    if (!error) {
      console.log('Inputed value is not valid');

      return game();
    }

    const { bulls, cows } = getBullsAndCows(yourDigits, myDigits);

    if (bulls === 4) {
      console.log(`You win! My number was ${myDigits}!`);
      rl.close();
    } else {
      console.log(`Bulls: ${bulls}, Cows: ${cows}`);
      game();
    }
  });
}
