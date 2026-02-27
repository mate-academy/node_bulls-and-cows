/* eslint-disable no-console */
'use strict';

const readline = require('readline');

const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const numberToGuess = generateRandomNumber();

console.log('🎯 Bulls & Cows game started!');
console.log('Guess a 4-digit number with unique digits (first digit ≠ 0)');

function ask() {
  rl.question('Your guess: ', (answer) => {
    if (!checkIsValidUserInput(answer)) {
      console.log('❌ Invalid input. Try again.');
      ask();

      return;
    }

    const userNumber = Number(answer);
    const { bulls, cows } = getBullsAndCows(userNumber, numberToGuess);

    console.log(`🐂 Bulls: ${bulls}, 🐄 Cows: ${cows}`);

    if (bulls === 4) {
      console.log('🎉 Congratulations! You guessed the number!');
      rl.close();

      return;
    }

    ask();
  });
}

ask();
