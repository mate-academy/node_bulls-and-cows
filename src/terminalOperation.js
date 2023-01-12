/* eslint-disable no-console */
import readline from 'readline';
import { getBullsAndCows } from './getBullsAndCows';

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export const terminalOperation = (secretNumber) => {
  terminal.question('Try to guess a number: ', (guessNumber) => {
    const incorrectValue = guessNumber.split('').some(char => (
      guessNumber.indexOf(char) !== guessNumber.lastIndexOf(char) || isNaN(char)
    ));

    if (guessNumber.length !== 4 || incorrectValue) {
      console.log('Incorrect value. Please, enter 4 DIFFERENT digits!!!');
      terminalOperation(secretNumber);

      return;
    }

    if (secretNumber.join('') === guessNumber) {
      console.log('Congratulations! You win!');
      terminal.close();
    } else {
      const bullsAndCows = getBullsAndCows(secretNumber.join(''), guessNumber);

      console.log(
        `bulls: ${bullsAndCows.bulls},`
        + `cows: ${bullsAndCows.cows}`
        + '\nTry to guess again!\n'
      );
      terminalOperation(secretNumber);
    }
  });
};
