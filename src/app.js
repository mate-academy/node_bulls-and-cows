/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const game = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const generatedNumber = generateRandomNumber();

function askUser() {
  game.question('Enter a four-digit number: ', (playerNumber) => {
    if (!checkIsValidUserInput(playerNumber)) {
      const error = `The number not valid!
      It must be a 4-digit number,
      that does not start with 0
      and does not contain any duplicate digits.`;

      console.log(error);
      askUser();

      return;
    }

    const result = getBullsAndCows(playerNumber, generatedNumber);

    if (result.bulls === 4) {
      console.log(`Congratulations! You won!`);
      game.close();
    } else if (result.bulls === 0 && result.cows === 0) {
      console.log(`No matches found. Try again`);
      askUser();
    } else {
      console.log(`You found ${result.bulls} bulls and ${result.cows} cows!`);
      askUser();
    }
  });
}

askUser();
