/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { getBullsAndCows } = require('./modules/getBullsAndCows');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');

const terminal = readline.createInterface(process.stdin, process.stdout);
const ask = (str) => new Promise((resolve) => terminal.question(str, resolve));

(async function startGame() {
  const numberToGuess = generateRandomNumber();
  let hasWon = false;

  while (!hasWon) {
    console.log(`Cheat: ${numberToGuess}`);

    const userInput = await ask('Enter your guess: ');

    if (checkIsValidUserInput(userInput)) {
      const { bulls, cows } = getBullsAndCows(userInput, numberToGuess);

      console.log(`Bulls: ${bulls} Cows: ${cows}`);

      if (bulls === 4) {
        console.log('You won!');
      } else {
        console.log(`Don't give up! Try again...\n`);
      }

      hasWon = true;
    } else {
      console.log('Invalid input, please try again...\n');
    }
  }

  terminal.close();
})();
