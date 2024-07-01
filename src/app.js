/* eslint-disable max-len */
/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const numberToGuess = generateRandomNumber().toString();
const terminal = readline.createInterface(process.stdin, process.stdout);
const writeMessage = (message) => terminal.output.write(`${message}\n`);

function playGame() {
  terminal.question('Guess a number: \n', (userInput) => {
    if (!checkIsValidUserInput(userInput)) {
      writeMessage(
        'Wrong input, enter 4 digits with unique numbers and don`t start with 0\n',
      );
      playGame();
    } else {
      if (numberToGuess === userInput) {
        writeMessage('You win!Congratulations!!!');
        terminal.close();
      } else {
        const { bulls, cows } = getBullsAndCows(userInput, numberToGuess);

        writeMessage(`Bulls: ${bulls}, Cows: ${cows}`);
        playGame();
      }
    }
  });
}

playGame();
