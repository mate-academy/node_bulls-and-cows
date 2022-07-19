/* eslint-disable no-console */
import chalk from 'chalk';
import readline from 'readline';
import { generateNumber } from './generateNumber.mjs';
import { calculateBullsAndCows } from './calculation.mjs';

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const generatedNumber = generateNumber(4, 1, 9);

terminal.question(
  chalk.yellow(`Enter a number of ${chalk.green('4')} different digits `),
  (number) => {
    console.log(calculateBullsAndCows(generatedNumber, number));
    terminal.close();
  }
);
