'use strict';

const readline = require('readline');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');
const { generateRandomNumber } = require('./modules/generateRandomNumber');

const randomNum = String(generateRandomNumber());

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'What is your guess? ',
});

rl.prompt();

rl.on('line', (userInput) => {
  if (!checkIsValidUserInput(userInput)) {
    rl.setPrompt('Enter correct value! Try again: ');
    rl.prompt();
  } else {
    const answer = getBullsAndCows(userInput, randomNum);

    if (answer.bulls === 4) {
      rl.write('Congratulations, you guessed the number!\n');
      rl.close();
    } else {
      rl.setPrompt(
        `Result: ${answer.bulls} bulls and ${answer.cows} cows. Enter another guess: `,
      );
      rl.prompt();
    }
  }
});

rl.on('close', () => {
  rl.write('Thank you for playing! Goodbye!\n');
  process.exit(0);
});
