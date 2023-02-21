/* eslint-disable no-console */
'use strict';

const { terminal } = require('./terminal');
const { generateNumber } = require('./generateNumber');
const { countResult } = require('./countResult');

const randomNumber = generateNumber();

const gameplay = (userInput) => {
  if (new Set(userInput).size !== 4) {
    console.log('Number should have exactly 4 different digits');
    terminal.question('Guess the number ', gameplay);

    return;
  }

  const convertedNumber = String(randomNumber);

  if (userInput === convertedNumber) {
    console.log('You won');
    terminal.close();

    return;
  }

  const { bulls, cows } = countResult(convertedNumber, userInput);

  console.log(`${bulls} bulls, ${cows} cows`);
  terminal.question('Guess the number ', gameplay);
};

module.exports = { gameplay };
