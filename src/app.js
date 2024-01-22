'use strict';

const readline = require('readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const secretNumber = generateRandomNumber();

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function playGame() {
  terminal.question('Guess the number: ', (userInput) => {
    const userNumber = +userInput;

    if (checkIsValidUserInput(userNumber)) {
      const result = getBullsAndCows(
        userInput.toString(), secretNumber.toString()
      );

      // eslint-disable-next-line no-console
      console.log(`Bulls: ${result.bulls}, Cows: ${result.cows}`);

      if (result.bulls === 4) {
        // eslint-disable-next-line no-console
        console.log('Congratulations! You guessed the correct number.');
        terminal.close();
      } else {
        playGame();
      }
    } else {
      // eslint-disable-next-line no-console
      console.log(
        'Invalid input. Please enter a 4-digit number with no duplicate digits.'
      );
      playGame();
    }
  });
}

// eslint-disable-next-line no-console
console.log(
  'Welcome to the Bulls and Cows game! Try to guess the 4-digit number.'
);

playGame();
