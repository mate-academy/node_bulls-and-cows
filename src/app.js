/* eslint-disable no-console */
'use strict';

const { calculateBullsAndCows } = require('./calculateBullsAndCows');
const { generateNumber } = require('./generateNumber');
const { terminal } = require('./terminal');

console.log('Welcome to Bulls and Cows game!');

const secretNumber = generateNumber();
let attempts = 0;

function play() {
  terminal.question('Enter your guess (4 different digits): ', guess => {
    attempts++;

    if (!isValidNumber(guess)) {
      // eslint-disable-next-line no-console
      console.log('Wrong data, please enter valid number');

      return play();
    }

    const { bulls, cows } = calculateBullsAndCows(secretNumber, guess);

    if (bulls === 4) {
      console.log(`You've found the number
      ${secretNumber} in ${attempts} attempts.`);
      terminal.close();
    } else {
      console.log(`${bulls} bulls, ${cows} cows`);
      play();
    }
  });
}

function isValidNumber(number) {
  return /^\d{4}$/.test(number) && new Set(number).size === 4;
}

play();
