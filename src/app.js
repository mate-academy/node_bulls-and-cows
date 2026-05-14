/* eslint-disable */
'use strict';
import readline from 'readline/promises';
import { checkIsValidUserInput } from './modules/checkIsValidUserInput.js';
import { generateRandomNumber } from './modules/generateRandomNumber.js';
import { getBullsAndCows } from './modules/getBullsAndCows.js';
import { start } from 'repl';

const terminal = readline.createInterface(process.stdin, process.stdout);
const randomNumber = generateRandomNumber();

async function startGame() {
  const userAnswer = await terminal.question(
    'Write your 4 digit unique number: ',
  );

  if (!checkIsValidUserInput(userAnswer)) {
    console.log('Please, enter valid 4 digit unique number');
    startGame();
  }

  if (checkIsValidUserInput(userAnswer)) {
    const { bulls, cows } = getBullsAndCows(userAnswer, randomNumber);

    if (bulls === 4) {
      console.log('You win!');
      terminal.close();
      return;
    }

    console.log(`bulls - ${bulls}, cows - ${cows}`);
    startGame();
  }
}

startGame();
