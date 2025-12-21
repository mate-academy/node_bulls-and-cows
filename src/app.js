'use strict';

const readline = require('readline');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');
const { generateRandomNumber } = require('./modules/generateRandomNumber');

// Write your code here
/* eslint-disable no-console */
const randomNumber = generateRandomNumber();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Try to guess a 4-digits number!');

function game() {
  rl.on('line', (userNumber) => {
    if (!checkIsValidUserInput(userNumber)) {
      console.log('Invalid input. Another try: ');

      return;
    }

    const { bulls, cows } = getBullsAndCows(
      Number(userNumber),
      Number(randomNumber),
    );

    console.log(`Bulls: ${bulls}, Cows: ${cows}`);

    if (bulls === 4) {
      console.log(`You Win! Number was ${randomNumber}`);
      rl.close();
    } else {
      console.log('Try Again: ');
    }
  });
}

game();
