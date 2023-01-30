'use strict';

import readline from 'readline';
import { getRandomNumber } from './utils/getRandomNumber.js';
import { isDifferentNumbers } from './utils/isDifferentNumbers.js';
import { isNumber } from './utils/isNumber.js';
import { getBulls } from './utils/getBulls.js';
import { getCows } from './utils/getCows.js';

const digitsForGame = getRandomNumber();

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let moveCounter = 0;

function ask(question) {
  terminal.question(question, (userInput) => {
    const isWrongInput = !isNumber(userInput)
      || userInput.length !== 4
      || !isDifferentNumbers(userInput)

    const isFirstZero = +userInput[0] === 0;

    const bulls = getBulls(digitsForGame, userInput);
    const cows = getCows(digitsForGame, userInput);

    if (+bulls === 4) {
      terminal.write(`You guessed the number in ${moveCounter} moves`);
      process.exit(1);
    }

    if (!isFirstZero && !isWrongInput) {
      moveCounter++;
      console.log('bulls:', bulls, 'cows:', cows);

      ask('Enter next 4 digits: ');
    }

    if (isWrongInput || isFirstZero) {
      if (isFirstZero) {
        console.log('Zero can`t be on first place')
      }

      ask('Enter 4 different(!) digits: ');
    }
  });
}

ask('Enter 4 different digits: ');
