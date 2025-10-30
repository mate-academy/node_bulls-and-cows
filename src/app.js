/* eslint-disable no-console */
'use strict';

const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { getUserInput, terminal } = require('./modules/getUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const numberToGuess = generateRandomNumber();

(async function app() {
  const input = await getUserInput();

  const res = getBullsAndCows(Number(input), numberToGuess);

  if (res.bulls !== 4) {
    console.log(
      `Bulls: ${res.bulls}, Cows: ${res.cows}. You lose(( Let's try again!))`,
    );
    app();
  } else {
    terminal.close();
    console.log(`Computer guesses ${numberToGuess}`);
    console.log(`Bulls: ${res.bulls}, Cows: ${res.cows}. You win))`);
  }
})();
