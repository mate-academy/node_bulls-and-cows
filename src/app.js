/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { generateNumber } = require('./modules/generateNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const numberToGuess = generateNumber();

console.log('Bulls & Cows');
console.log('Guess the 4-digit number with unique digits.');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask() {
  rl.question('Your guess: ', (answer) => {
    if (!checkIsValidUserInput(answer)) {
      console.log(
        'Invalid input. Must be 4 unique digits, not starting with 0.',
      );

      return ask();
    }

    const { bulls, cows } = getBullsAndCows(answer, numberToGuess);

    console.log(`${bulls} Bulls, ${cows} Cows`);

    if (bulls === 4) {
      console.log(`You win! The number was ${numberToGuess}`);
      rl.close();
    } else {
      ask();
    }
  });
}

ask();
