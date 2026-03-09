'use strict';

import readline from 'node:readline';
import checkIsValidUserInput from './modules/checkIsValidUserInput.js';
import generateRandomNumber from './modules/generateRandomNumber.js';
import getBullsAndCows from './modules/getBullsAndCows.js';

const terminal = readline.createInterface(process.stdin, process.stdout);

const randomNumber = generateRandomNumber.generateRandomNumber();

function askGuess() {
  terminal.question('Guess the number: ', (answer) => {
    if (!checkIsValidUserInput.checkIsValidUserInput(answer)) {
      terminal.output.write('Invalid number, try again: ');

      return askGuess();
    }

    const { bulls, cows } = getBullsAndCows.getBullsAndCows(
      +answer,
      randomNumber,
    );

    terminal.output.write(`Bulls: ${bulls}, Cows: ${cows}, ${randomNumber}`);

    if (bulls === 4) {
      terminal.output.write('Congrats you win!');
      terminal.close();
    } else {
      askGuess();
    }
  });
}

askGuess();
