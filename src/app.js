'use strict';

const readline = require('readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { getBullsAndCows } = require('./modules/getBullsAndCows');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const secretNumber = generateRandomNumber();

function printIntro() {
  rl.write('Welcome to Bulls and Cows!\n');

  rl.write(
    'I have generated a 4-digit number with all different digits.\n' +
      'Try to guess it!\n',
  );
}

function promptUser() {
  rl.question('Enter your guess (4 different digits): ', handleUserInput);
}

function handleUserInput(userInput) {
  if (!checkIsValidUserInput(userInput)) {
    rl.write(
      'Invalid input! Enter a 4-digit number that:\n' +
        '- does not start with 0\n' +
        '- contains only digits\n' +
        '- has no duplicate digits\n\n',
    );

    return promptUser();
  }

  const { bulls, cows } = getBullsAndCows(userInput, secretNumber);

  rl.write(`Bulls: ${bulls}, Cows: ${cows}\n`);

  const isVictory = bulls === 4;

  if (isVictory) {
    rl.write(`🎉 Congratulations! You found the number: ${secretNumber}\n`);
    rl.close();
  } else {
    promptUser();
  }
}

printIntro();
promptUser();
