'use strict';

const readline = require('readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');
const randomNumber = generateRandomNumber();

// eslint-disable-next-line no-console
// console.log(randomNumber);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askUser() {
  rl.question('Guess (type number of 4 different digits): ', (userInput) => {
    const isValid = checkIsValidUserInput(userInput);

    if (!isValid) {
      // eslint-disable-next-line no-console
      console.log('Please enter a valid number');

      return askUser();
    }

    const res = getBullsAndCows(userInput, randomNumber.toString());

    // eslint-disable-next-line no-console
    console.log(`${res.bulls} bulls, ${res.cows} cows.`);

    if (res.bulls === 4) {
      // eslint-disable-next-line no-console
      console.log('🎉 You guessed the number!');

      rl.close();
    } else {
      askUser();
    }
  });
}

askUser();
