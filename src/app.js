'use strict';
import readline from 'readline';

const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const terminal = readline.createInterface(process.stdin, process.stdout);
const randomNumber = generateRandomNumber().toString();
const writeMessage = (message) => terminal.output.write(`${message}\n`);

const playGame = terminal.question('Guess a number: ', (number) => {
  if (!checkIsValidUserInput(number)) {
    writeMessage('Wrong input, enter 4 digitnumber with unique numbers');
    playGame();
  } else {
    const { bulls, cows } = getBullsAndCows(number, randomNumber);

    writeMessage(`Bulls: ${bulls}, Cows: ${cows}`);

    if (bulls === 4) {
      writeMessage('You guessed the number and won!');
      terminal.close();
    } else {
      writeMessage('Attempt failed, try again!');
      playGame();
    }
  }
});

playGame();
