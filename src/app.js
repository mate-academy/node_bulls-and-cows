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
  return new Promise((resolve) => {
    rl.question(query, (answer) => {
      resolve(answer);
    });
  });
}

async function main() {
  const numberToGuess = generateRandomNumber();
  let attempts = 0;

  /* eslint-disable no-console */
  console.log('Welcome to Bulls and Cows!');

  console.log(
    'Try to guess the 4-digit number. ' +
      'It does not start with 0 and has no duplicate digits.',
  );

  while (true) {
    const userInput = await askQuestion('Enter your guess: ');

    if (!checkIsValidUserInput(userInput)) {
      console.log(
        'Invalid input. Please enter a 4-digit number ' +
          'that does not start with 0 and has no duplicate digits.',
      );
      continue;
    }

    attempts++;

    const { bulls, cows } = getBullsAndCows(userInput, numberToGuess);

    if (bulls === 4) {
      console.log(
        `Congratulations! You've guessed the number ${numberToGuess} ` +
          `in ${attempts} attempts!`,
      );
      break;
    } else {
      console.log(`${bulls} Bulls and ${cows} Cows. Try again!`);
    }
  }

  rl.close();
}

main();
