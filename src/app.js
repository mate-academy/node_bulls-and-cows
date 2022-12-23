'use strict';
/* eslint-disable no-console */

const readline = require('readline');
const { generatingDigits } = require('./generateDigits');
const { calculatingCowsAndBulls } = require('./calculatingCowsAndBulls');

const programDigits = generatingDigits();

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function messages(message) {
  terminal.question(message, (newdigits) => {
    game(programDigits, newdigits);
  });
}

function isCorrectInput(input) {
  for (const i of input) {
    if (input.indexOf(i) !== input.lastIndexOf(i)) {
      return false;
    }
  }

  return input.length === 4;
}

messages('Can you guess my digits? ');

function game(randomDigits, digits) {
  const { cows, bulls } = calculatingCowsAndBulls(randomDigits, digits);

  if (bulls === 4) {
    console.log('Congratulations! You win!');
    terminal.close();
  } else if (!isCorrectInput(digits)) {
    messages('Please enter 4 different digits ');
  } else {
    console.log(`there are ${cows} cows and ${bulls} bulls`);
    messages('One more try? ');
  }
};
