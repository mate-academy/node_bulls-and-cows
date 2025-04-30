'use strict';
import readline from 'readline';
import { generateRandomNumber } from './modules/generateRandomNumber.js';
import { checkIsValidUserInput } from './modules/checkIsValidUserInput.js';
import { getBullsAndCows } from './modules/getBullsAndCows.js';

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const numberToGuess = generateRandomNumber().toString();

function checkAnswer(userInput) {
  if (!checkIsValidUserInput(userInput)) {
    throw new Error(
      'You should type 4 digits in the terminal! Please, correct your answer',
    );
  }

  const { bulls, cows } = getBullsAndCows(userInput, numberToGuess);

  return { bulls, cows, isWin: bulls === 4 };
}

function game() {
  terminal.question(
    'Try to guess 4 random digits. Enter your answer? ',
    (userInput) => {
      try {
        const checkResult = checkAnswer(userInput);

        if (checkResult.isWin) {
          terminal.write('You are champions!!! You guessed all numbers');
          terminal.close();
        } else {
          terminal.write(
            `You guessed only ${checkResult.bulls} and ${checkResult.cows}`,
          );
          game();
        }
      } catch (error) {
        terminal.write(
          'You should type only 4 digits, without 0 in start position',
        );
        game();
      }
    },
  );
}

game();
