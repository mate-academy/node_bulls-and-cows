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

process.stdout.write('Welcome to Bulls and Cows!\n');
process.stdout.write('Guess a 4-digit number with unique digits\n');

function askQuestion() {
  rl.question('Your guess: ', (answer) => {
    if (!checkIsValidUserInput(answer)) {
      process.stdout.write('Invalid input. Try again.\n');

      return askQuestion();
    }

    const { bulls, cows } = getBullsAndCows(answer, numberToGuess);

    process.stdout.write(`Bulls: ${bulls}, Cows: ${cows}\n`);

    if (bulls === 4) {
      process.stdout.write('🎉 You guessed the number!\n');
      rl.close();

      return;
    }

    askQuestion();
  });
}

askQuestion();
