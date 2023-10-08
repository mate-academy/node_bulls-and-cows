'use strict';

const { terminal } = require('./terminal');
const { generateRandomNumber } = require('./RandonNumberGenerator');
const { guess } = require('./Checker');
const guessedNumber = generateRandomNumber();

function startGame() {
  terminal.question(
    'Try to guess. Enter a number: ', (userInput) => {
      if (userInput.length !== 4 || !Number(userInput)) {
        console.log('Invalid input. Enter 4 different digits');
        terminal.question('Try to guess. Enter a number: ', startGame);

        return;
      }

      if (userInput === guessedNumber) {
        console.log('You won!' + `Guessed number was: ${guessedNumber}`);
        terminal.close();

        return;
      }

      const { bulls, cows } = guess(guessedNumber, userInput);

      console.log(`Your score is ${bulls} bulls, and ${cows} cows`);
      startGame();
    });
}

startGame();
