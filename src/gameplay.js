/* eslint-disable no-console */
'use strict';

const { terminal } = require('./terminal');
const { generateNumber } = require('./generateNumber');
const { calculateResult } = require('./calculateResult');

const randomNumber = generateNumber();

const gameplay = (userInput) => {
  if (new Set(userInput).size !== 4) {
    console.log('You had to enter exactly 4 different digits!');
    terminal.question('Guess number ', gameplay);

    return;
  }

  const convertedNumber = String(randomNumber);

  if (userInput === convertedNumber) {
    console.log('You won the game!');
    terminal.close();

    return;
  }

  const { bulls, cows } = calculateResult(convertedNumber, userInput);

  console.log(`${bulls} bulls, ${cows} cows`);
  terminal.question('Guess number ', gameplay);
};

module.exports = { gameplay };
