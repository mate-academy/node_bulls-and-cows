/* eslint-disable no-console */
import readline from 'readline';
import { randomned } from './RandomNumber.js';
import { countBulls } from './Bulls.js';
import { countCows } from './Cows.js';

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = () => {
  terminal.question('Guess a number ', (digit) => {
    const number = String(digit);

    if (randomned === number) {
      console.log('You won !');
      terminal.close();

      return;
    }

    if (digit >= 1000 && digit < 10000) {
      console.log(`The result is ${countBulls(number)}`
      + ` bulls and ${countCows(number)} cows`);
      question();
    } else {
      console.log('Wrong number format');
      question();
    }
  });
};

question();
