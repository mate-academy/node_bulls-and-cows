'use strict';
/* eslint-disable no-console */

const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const randomNumber = generateRandomNumber();
const readline = require('node:readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const processAnswer = (userInput) => {
  if (checkIsValidUserInput(userInput)) {
    const { bulls, cows } = getBullsAndCows(+userInput, randomNumber);

    if (bulls === 4) {
      console.log(`Congrats the number was : ${userInput}`);
      readline.close();
    } else {
      console.log(`Bulls: ${bulls}, Cows: ${cows}`);
      readline.question('Guess the number : ', processAnswer);
    }
  } else {
    console.log('Invalid input!');
    readline.question('Guess the number : ', processAnswer);
  }
};

readline.question('Guess the number : ', processAnswer);
