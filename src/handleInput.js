/* eslint-disable no-console */
'use strict';

const { terminal } = require('./terminal');
const { generate4Digits } = require('./generate4Digits');
const { calculateBullAndCows } = require('./calculateBullAndCows');

const randomDigits = generate4Digits();

console.log('randomDigits: ' + randomDigits);

const handleInput = (userInput) => {
  const isUniqueDigitsAndCorrectLength = new Set(userInput).size === 4;
  const isNumber = Number.isFinite(Number(userInput));

  if (!isUniqueDigitsAndCorrectLength || !isNumber) {
    console.error('\nPlease enter exactly 4 different digits!');
    terminal.question('Enter your digits guess: ', handleInput);

    return;
  }

  if (userInput === randomDigits) {
    console.log('\nYou won the game :)');
    terminal.close();

    return;
  }

  const { bulls, cows } = calculateBullAndCows(randomDigits, userInput);

  console.log(`\nResult: ${bulls} bulls, ${cows} cows`);
  terminal.question('Enter your digits guess: ', handleInput);
};

module.exports.handleInput = handleInput;
