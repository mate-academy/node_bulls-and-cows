'use strict';

const readline = require('readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const numberToGuess = generateRandomNumber();

const askQuestion = () => {
  rl.question('Guess the four-digit number: ', (userInput) => {
    if (checkIsValidUserInput(userInput)) {
      const bullsAndCows = getBullsAndCows(userInput, numberToGuess);

      if (bullsAndCows.bulls === 4) {
        rl.write(`🎉 You guessed it! Number was ${numberToGuess}\n`);
        rl.close();
      } else {
        rl.write(`Bulls: ${bullsAndCows.bulls}, Cows: ${bullsAndCows.cows}\n`);
        askQuestion();
      }
    } else {
      rl.write('❌ Invalid input. Try again!\n');
      askQuestion();
    }
  });
};

askQuestion();
