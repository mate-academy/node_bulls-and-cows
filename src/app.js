/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { getRandomNumber } = require('./utils/getRandomNumber.js');
const { isDifferentNumbers } = require('./utils/isDifferentNumbers.js');
const { isNumber } = require('./utils/isNumber.js');
const { getBulls } = require('./utils/getBulls.js');
const { getCows } = require('./utils/getCows.js');

const digitsForGame = getRandomNumber();

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let moveCounter = 0;

function ask(question) {
  terminal.question(question, (userInput) => {
    const isWrongInput = !isNumber(userInput)
      || userInput.length !== 4
      || !isDifferentNumbers(userInput);

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
        console.log('Zero can`t be on first place');
      }

      ask('Enter 4 different(!) digits: ');
    }
  });
}

ask('Enter 4 different digits: ');
