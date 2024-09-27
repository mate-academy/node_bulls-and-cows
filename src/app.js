'use strict';

// Write your code here
const readline = require('readline');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const randomNum = generateRandomNumber();

function playGame() {
  rl.question('Make your guess: ', (answer) => {
    if (!checkIsValidUserInput(answer)) {
      // eslint-disable-next-line
      console.log('Please enter a valid 4 digit number that not starts with 0');

      playGame();
    } else {
      const bullsAndCows = getBullsAndCows(answer, randomNum);
      // eslint-disable-next-line
      console.log(`Bulls: ${bullsAndCows.bulls}, Cows: ${bullsAndCows.cows}`);

      if (bullsAndCows.bulls === 4) {
        // eslint-disable-next-line
        console.log('Congratulations! You guessed the correct number.');
        rl.close();
      } else {
        playGame();
      }
    }
  });
}

playGame();
