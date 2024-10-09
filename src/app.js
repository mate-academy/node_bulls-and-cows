'use strict';
import readline from 'readline';
import { generateRandomNumber } from './modules/generateRandomNumber';
import { getBullsAndCows } from './modules/getBullsAndCows';
module.require(generateRandomNumber);
module.require(getBullsAndCows);

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const randomNumber = generateRandomNumber();

terminal.question('Guess a 4 different digits number: ', (userNumber) => {
  getBullsAndCows(userNumber, randomNumber);
  terminal.close();
});
