/* eslint-disable no-console */
'use strict';

const readline = require('node:readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { getBullsAndCows } = require('./modules/getBullsAndCows');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');

function game() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const numberToGuess = generateRandomNumber();
  let attempts = 0;

  function ask() {
    rl.question('Enter a 4-digit number: ', (userInput) => {
      if (!checkIsValidUserInput(userInput)) {
        console.log('❌ Invalid input. Try again.');
        ask();

        return;
      }

      attempts++;

      const { bulls, cows } = getBullsAndCows(userInput, numberToGuess);

      console.log(`🔎 Attempt ${attempts}: ${bulls} Bulls, ${cows} Cows`);

      if (bulls === 4) {
        console.log(
          `🎉 You guessed it in ${attempts} tries! The number was ${numberToGuess}`,
        );
        rl.close();
      } else {
        ask();
      }
    });
  }

  ask();
}

module.exports = { game };
game();
