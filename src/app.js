/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { getBullsAndCows } = require('./modules/getBullsAndCows');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askQuestion(query) {
  return new Promise((resolve) => rl.question(query, resolve));
}

async function main() {
  const numberToGuess = generateRandomNumber();

  console.log('Welcome to Bulls and Cows game!');
  console.log('Try to guess the 4-digit number.');

  while (true) {
    const userInput = await askQuestion('Enter your guess: ');

    if (!checkIsValidUserInput(userInput)) {
      console.log(
        'Invalid input. Please enter a 4-digit number with unique digits.',
      );

      continue;
    }

    const { bulls, cows } = getBullsAndCows(userInput, numberToGuess);

    console.log(`Bulls: ${bulls}, Cows: ${cows}`);

    if (bulls === 4) {
      console.log('Congratulations! You guessed the number!');
      break;
    }
  }

  rl.close();
}

if (require.main === module) {
  main();
}
