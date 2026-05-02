'use strict';
import readline from 'readline';
import { checkIsValidUserInput } from './modules/checkIsValidUserInput.js';
import { getBullsAndCows } from './modules/getBullsAndCows.js';
import { generateRandomNumber } from './modules/generateRandomNumber.js';

// Create interface for input/output
const terminal = readline.createInterface(process.stdin, process.stdout);
const randomNumber = generateRandomNumber();

function gameLoop() {
  // Ask player for a number
  terminal.question('Enter four digit number: ', (playerGuess) => {
    let result = {};

    if (checkIsValidUserInput(playerGuess)) {
      result = getBullsAndCows(+playerGuess, +randomNumber);
    }

    if (result.bulls === 4) {
      return result;
    } else {
      gameLoop(); // Continue the game
    }
  });
}

gameLoop();
