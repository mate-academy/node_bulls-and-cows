'use strict';

const readline = require('readline');

const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { getBullsAndCows } = require('./modules/getBullsAndCows');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');

const terminal = readline.createInterface(process.stdin, process.stdout);
const secretNumber = generateRandomNumber();

// eslint-disable-next-line no-console
console.log('Welcome to Bulls and Cows! Guess the secret 4-digit number,');

const playGame = () => {
  terminal.question(
    'Enter a 4-digit number with unique digits: ',
    (userInput) => {
      if (!checkIsValidUserInput(userInput)) {
        // eslint-disable-next-line no-console
        console.log('Please enter exactly 4 unique digits');

        return playGame();
      }

      const { bulls, cows } = getBullsAndCows(secretNumber, userInput);

      // eslint-disable-next-line no-console
      console.log(`Bulls: ${bulls}, Cows: ${cows}`);

      if (bulls === 4) {
        // eslint-disable-next-line no-console
        console.log(`Congratulations! You guessed the number ${secretNumber}`);
        terminal.close();
      }

      playGame();
    },
  );
};

playGame();
