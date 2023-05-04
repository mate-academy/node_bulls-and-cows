'use strict';

// import readline from 'readline';
// import { generateNumber } from './generateNumber.js';
// import { calculateCowsAndBulls } from './calculateCowsAndBulls.js';

const readline = require('readline');
const { generateNumber } = require('./generateNumber.js');
const { calculateCowsAndBulls } = require('./calculateCowsAndBulls.js');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getNumberAndCalculate(prevResult) {
  let result;

  terminal.question(`${prevResult} \nTry again `, (newNumberInput) => {
    result = calculateCowsAndBulls(generatedNumber, newNumberInput);

    if (result.includes('cow') || result.includes('mistake')) {
      getNumberAndCalculate(result);
    } else {
      terminal.write('Success');
      terminal.close();
    }
  });
}

const generatedNumber = generateNumber();

terminal.question(
  'Enter the number with four different digits ',
  (numberFromUser) => {
    const result = calculateCowsAndBulls(generatedNumber, numberFromUser);

    getNumberAndCalculate(result);
  }
);
