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

function askUserInput() {
  rl.question('Enter a 4-digit number: ', (answer) => {
    const userInput = answer.trim();

    if (!checkIsValidUserInput(userInput)) {
      // eslint-disable-next-line no-console
      console.log(
        'Invalid input. Enter 4 different digits. first digit is not 0.',
      );

      return askUserInput();
    }

    const userInputNumber = Number(userInput);
    const { bulls, cows } = getBullsAndCows(userInputNumber, numberToGuess);

    // eslint-disable-next-line no-console
    console.log(`Bulls: ${bulls}, Cows: ${cows}`);

    if (bulls === 4) {
      // eslint-disable-next-line no-console
      console.log('You win!');
      rl.close();

      return;
    }

    askUserInput();
  });
}

// eslint-disable-next-line no-console
console.log('Welcome to Bulls and Cows!');
askUserInput();
