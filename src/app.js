'use strict';

const readline = require('readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const print = (message) => terminal.write(message + '\n');

(function () {
  const numberToGuess = generateRandomNumber();

  function askGuess() {
    terminal.question('What is your guess: ', (userInput) => {
      if (!checkIsValidUserInput(userInput)) {
        print('Your guess is not a valid number');

        return askGuess();
      }

      const userNumber = Number(userInput);
      const bullsAndCows = getBullsAndCows(userNumber, numberToGuess);

      print(`Bulls: ${bullsAndCows.bulls}, Cows: ${bullsAndCows.cows}`);

      if (userNumber === numberToGuess) {
        print(`You won the game! The number was ${numberToGuess}`);
        terminal.close();

        return;
      }

      askGuess();
    });
  }

  askGuess();
})();
