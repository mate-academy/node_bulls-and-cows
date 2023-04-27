'use strict';

const { numberGenerator } = require('./numberGenerator');
const { bullsAndCowsCalculator } = require('./bullsAndCowsCalculator');
const { messages } = require('./messages');
const { terminal } = require('./terminal');

const {
  introMessage,
  firstDigitError,
  numberError,
  uniqueError,
  congratsMessage,
  gameOverMessage,
} = messages;

const numberToGuess = numberGenerator();

terminal.question(introMessage, (userInput) => {
  if (userInput === 'yes') {
    let guesses = 0;
    const maxGuesses = 10;

    const guessNumber = () => {
      terminal.question('\nEnter your guess: ', (guess) => {
        if (guess[0] === '0') {
          terminal.write(firstDigitError);
          guessNumber();

          return;
        }

        if (/\D/.test(guess) || guess.length !== 4) {
          terminal.write(numberError);
          guessNumber();

          return;
        }

        if (guess.length !== (new Set(guess)).size) {
          terminal.write(uniqueError);
          guessNumber();

          return;
        }

        guesses++;

        const [
          bullsCount,
          cowsCount,
        ] = bullsAndCowsCalculator(guess, numberToGuess);

        if (bullsCount === 4) {
          terminal.write(congratsMessage);
          terminal.close();
        } else if (guesses >= maxGuesses) {
          terminal.write(`${gameOverMessage} ${numberToGuess}.\n`);
          terminal.close();
        } else {
          terminal.write(`BULLS: ${bullsCount}, COWS: ${cowsCount}. `
          + `There are ${maxGuesses - guesses} attempts left.\n`);
          guessNumber();
        }
      });
    };

    guessNumber();
  } else {
    terminal.close();
  }
});
