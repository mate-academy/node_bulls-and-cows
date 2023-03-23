/* eslint-disable no-console */
'use strict';

const { terminal } = require('./terminal.js');
const { generateNumber } = require('./generateNumber.js');
const { calculateBullsAndCows } = require('./calculateBullsAndCows.js');

const generatedNum = generateNumber();

const compareNumbers = (num) => {
  const arr = [];

  for (const digit of num) {
    if (!arr.includes(digit)) {
      arr.push(digit);
    }
  }

  if (arr.length !== 4) {
    console.log('You have to enter 4 different digits.');

    terminal.question('Guess the number ', compareNumbers);

    return;
  }

  const { bulls, cows } = calculateBullsAndCows(generatedNum, num);

  if (bulls < 4) {
    console.log(`Bulls: ${bulls}. Cows: ${cows}.`);

    terminal.question('Guess the number ', compareNumbers);

    return;
  }

  console.log('You found the correct number!');

  terminal.close();
};

module.exports = { compareNumbers };
