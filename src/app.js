'use strict';
import readline from 'readline';
import { checkIsValidUserInput } from './modules/checkIsValidUserInput.js';
import { generateRandomNumber } from './modules/generateRandomNumber.js';
import { getBullsAndCows } from './modules/getBullsAndCows.js';

const numbersGenerated = generateRandomNumber();

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function playRound() {
  terminal.question('Enter a 4-digit number:', (digit) => {
    if (checkIsValidUserInput(digit)) {
      const { bulls, cows } = getBullsAndCows(digit, numbersGenerated);

      if (bulls === 4) {
        // eslint-disable-next-line no-console
        console.log('Congratulations, you won the game!');
        terminal.close();
      } else {
        // eslint-disable-next-line no-console
        console.log(`bulls ${bulls}, cows ${cows}`);

        return playRound();
      }
    } else {
      // eslint-disable-next-line no-console
      console.log('invalid input');

      return playRound();
    }
  });
}

playRound();

// Write your code here
