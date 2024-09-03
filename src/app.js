// 'use strict';
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const readline = require('node:readline');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const generatedNumber = generateRandomNumber();
// console.log(generatedNumber);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let userNumber = null;

game();

function game() {
  rl.question('Type your 4-digit number: ', (userInput) => {
    if (checkIsValidUserInput(userInput)) {
      userNumber = Number(userInput);

      const result = getBullsAndCows(userNumber, generatedNumber);

      console.log(result);
      updateGame(result);
    } else {
      console.warn('You must enter a valid 4-digit number without duplicates!');
      updateGame();
    }
  });
}

function updateGame(userGuess = {}) {
  if (userGuess.bulls === 4) {
    console.log('You win!!! The secret number was: ', generatedNumber);
    rl.close();

    return;
  }

  game();
}
