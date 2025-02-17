'use strict';

// Write your code here
const readline = require('readline');

const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

// console.log(getBullsAndCows('3264', generateRandomNumber()));

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const randomNumber = generateRandomNumber();

function playGame() {
  rl.question('Enter number: ', (userNumber) => {
    if (userNumber === 'stop') {
      rl.close();
      return;
    }
    if (checkIsValidUserInput(userNumber)) {
      const result = getBullsAndCows(userNumber, randomNumber);

      if (result.bulls === 4) {
        console.log('Congratulations! You guessed the number!');
        rl.close();
      } else {
        console.log(
          `Result: ${result.bulls} bulls and ${result.cows} cows. Try again. To complete write 'stop'`,
        );
        playGame();
      }
    } else {
      console.log(`Invalid input. Try again. To complete write 'stop'`);
      playGame();
    }
  });
}


playGame();
