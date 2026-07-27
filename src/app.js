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
  rl.question('Enter a 4-digit number: ', (userInput) => {
    if (!checkIsValidUserInput(userInput)) {
      // eslint-disable-next-line no-console
      console.log('Invalid input. Please enter a valid 4-digit number.');
      askUserInput();

      return;
    }

    const { bulls, cows } = getBullsAndCows(
      parseInt(userInput, 10),
      numberToGuess,
    );

    // eslint-disable-next-line no-console
    console.log(`Bulls: ${bulls}, Cows: ${cows}`);

    if (bulls === 4) {
      // eslint-disable-next-line no-console
      console.log('Congratulations! You guessed the number!');
      rl.close();
    } else {
      // eslint-disable-next-line no-console
      console.log('Try again!');
      askUserInput();
    }
  });
}

askUserInput();
