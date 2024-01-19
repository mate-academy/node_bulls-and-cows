/* eslint-disable no-console */
'use strict';

function playBullsAndCows() {
  const { generateRandomNumber } = require('./modules/generateRandomNumber.js');
  const readline = require('readline');
  const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  const numberToGuess = generateRandomNumber();

  guessTheNumber(terminal, numberToGuess);
}

function guessTheNumber(terminal, numberToGuess) {
  // eslint-disable-next-line max-len
  const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput.js');
  const { getBullsAndCows } = require('./modules/getBullsAndCows.js');

  terminal.question('Guess the number: ', userInput => {
    if (!checkIsValidUserInput(userInput)) {
      console.log('That\'s not a valid guess! Try again.');

      return guessTheNumber(terminal, numberToGuess);
    }

    const bullsAndCows = getBullsAndCows(userInput, numberToGuess);

    if (bullsAndCows.bulls === 4) {
      console.log('The number is correct, you win!');

      terminal.question('Play again? Type y or n: ', (answer) => {
        if (answer.toLowerCase() === 'n') {
          console.log('Thanks for playing!');
          terminal.close();
        } else {
          terminal.close();

          return playBullsAndCows();
        }
      });
    } else {
      console.log(`That's not the correct answer!
      You've got ${bullsAndCows.bulls} bulls and ${bullsAndCows.cows} cows.
      Try again!`);

      return guessTheNumber(terminal, numberToGuess);
    }
  });
}

playBullsAndCows();
