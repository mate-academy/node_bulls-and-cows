'use strict';

const readline = require('readline');

const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const terminal = readline.createInterface(process.stdin, process.stdout);
const secretNumber = generateRandomNumber();

// eslint-disable-next-line no-console
console.log('Bulls and Cows start');

const playGame = () => {
  terminal.question('Write a number with a 4 uniqe digits: ', (userInput) => {
    if (!checkIsValidUserInput(userInput)) {
      // eslint-disable-next-line no-console
      console.log('Please write only 4 digits');

      return playGame();
    }

    const { bulls, cows } = getBullsAndCows(secretNumber, userInput);

    // eslint-disable-next-line no-console
    console.log(`Bulls: ${bulls}, Cows: ${cows}`);

    if (bulls === 4) {
      // eslint-disable-next-line no-console
      console.log(`Congratulations, you guess the number: ${secretNumber}`);
      terminal.close();
    } else {
      playGame();
    }
  });
};

playGame();
