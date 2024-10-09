'use strict';
// import readline from 'readline';
// import { generateRandomNumber }
// from '../src/modules/generateRandomNumber.js';
// import { getBullsAndCows } from './modules/getBullsAndCows.js';

const readline = require('readline');
const generateRandomNumber = require('./modules/generateRandomNumber.js');
const getBullsAndCows = require('./modules/getBullsAndCows.js');
const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const randomNumber = generateRandomNumber();

terminal.question('Guess a 4 different digits number: ', (userNumber) => {
  getBullsAndCows(userNumber, randomNumber);
  terminal.close();
});
