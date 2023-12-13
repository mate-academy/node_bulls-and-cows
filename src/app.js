'use strict';

const readline = require('readline');
const { getRandomNumbers } = require('./services/getRandomNumbers');
const { calculateGameResult } = require('./services/calculateGameResult');

const terminal = readline.createInterface(process.stdin, process.stdout);
const MIN = 1;
const MAX = 9;
const randomNumbers = getRandomNumbers(MIN, MAX);

terminal.question(
  /* eslint-disable */
  `In this game you should guess the number. Please enter number of 4 unique digits from ${MIN} to ${MAX} \n`,
  (input) => {
    validatePlayerInput(input);
  }
);

function validatePlayerInput(input) {
  const playerInput = [...input];

  switch (true) {
    case (playerInput.length !== 4): {
      console.log('You entered wrong number of digits');
      terminal.close();
      break;
    }

    case (!playerInput.every(digit => Number.isInteger(+digit))): {
      console.log('You entered not valid digits');
      terminal.close();
      break;
    }

    case (new Set(playerInput).size !== 4): {
      console.log('Not all digits are unique');
      terminal.close();
      break;
    }

    default: {
      const result = calculateGameResult(randomNumbers, playerInput);
      displayGameResult(result);
    }
  }
}

function displayGameResult(result) {
  if (result === true) {
    console.log('You won!');
    terminal.close();
  } else {
    console.log(result);

    terminal.question('Try again \n', (input) => {
      validatePlayerInput(input);
    });
  }
}

