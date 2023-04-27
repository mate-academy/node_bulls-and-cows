'use strict';
/* eslint-disable no-console */

const { generateNumber } = require('./generateNumber');
const { readInput } = require('./readInput');
const { calculateBullsAndCows } = require('./calculateBullsAndCows');

async function main() {
  const number = generateNumber();

  console.log('Guess the four-digit number with no repeating digits!');

  let guesses = 0;

  while (true) {
    guesses++;

    const guess = await readInput();

    if (!/^\d{4}$/.test(guess)) {
      console.log('Please enter a valid 4 number with no repeating digits.');
      continue;
    }

    const [bulls, cows] = calculateBullsAndCows(guess, number);

    if (bulls === 4) {
      console.log(`Congratulations! ${guesses} is correct`);
      break;
    } else {
      console.log(`${bulls} bull(s), ${cows} cow(s)`);
    }
  }
}

main();
