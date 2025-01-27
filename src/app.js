'use strict';

const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Enter a 4-digit number to guess: ', (userInput) => {
  const numberToGuess = generateRandomNumber();
  const { bulls, cows } = getBullsAndCows(userInput, numberToGuess);

  if (checkIsValidUserInput(userInput)) {
    if (bulls === 4) {
      readline.stdout.write(
        `You guessed it! The number was ${numberToGuess}\n`,
      );
      readline.close();
    }
  }

  if (bulls < 4) {
    readline.stdout.write(`You have ${bulls} bulls and ${cows} cows`);
  }
});
