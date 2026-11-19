'use strict';

const readline = require('readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function playGame() {
  const secretNumber = generateRandomNumber();
  const output = (msg) => process.stdout.write(`${msg}\n`);

  output('Welcome to Bulls and Cows!');

  output(
    'Try to guess the 4-digit number (no leading zero, no duplicate digits).',
  );

  function askGuess() {
    rl.question('Enter your guess: ', (input) => {
      const userInput = input.trim();

      if (!checkIsValidUserInput(userInput)) {
        output(
          'Invalid input. Please enter a 4-digit number without ' +
            'leading zero or duplicate digits.',
        );
        askGuess();

        return;
      }

      const result = getBullsAndCows(Number(userInput), secretNumber);

      output(`Bulls: ${result.bulls}, Cows: ${result.cows}`);

      if (result.bulls === 4) {
        output('Congratulations! You guessed the number!');
        rl.close();
      } else {
        askGuess();
      }
    });
  }

  askGuess();
}

playGame();
