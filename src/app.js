'use strict';

const readline = require('readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const secretNumber = generateRandomNumber();

process.stdout.write('Welcome to Bulls and Cows!\n');

process.stdout.write(
  'I have generated a random 4-digit number for you to guess.\n',
);
process.stdout.write('Each digit is unique.\n');
process.stdout.write('Try to guess the number!\n');

const gameLoop = () => {
  rl.question('Your guess (4 unique digits):', (userInput) => {
    const isValid = checkIsValidUserInput(userInput);

    if (!isValid) {
      process.stdout.write(
        'Invalid input. Please enter a 4-digit number with unique digits.\n',
      );
      gameLoop();
    } else {
      const { bulls, cows } = getBullsAndCows(userInput, secretNumber);

      process.stdout.write(`Bulls: ${bulls}, Cows: ${cows}\n`);

      if (bulls === 4) {
        process.stdout.write('Congratulations! You guessed the number!\n');
        rl.close();

        return;
      }
      gameLoop();
    }
  });
};

gameLoop();
