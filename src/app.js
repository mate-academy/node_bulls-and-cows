'use strict';

const { numberGenerator } = require('./numberGenerator');
const { bullsAndCowsCalculator } = require('./bullsAndCowsCalculator');
const { messages } = require('./messages');
const { terminal } = require('./terminal');

const [
  introMessage,
  congratsMessage,
  gameOverMessage,
  digitsError,
  numberError,
] = messages();

terminal.question(introMessage, (userInput) => {
  if (userInput === 'yes') {
    let guesses = 0;
    const maxGuesses = 10;
    const numberToGuess = numberGenerator();

    const guessNumber = () => {
      terminal.question('\nEnter your guess: ', (guess) => {
        if (guess.length !== 4) {
          terminal.write(numberError);
          guessNumber();

          return;
        }

        if (!/^[1-4]+$/.test(guess)) {
          terminal.write(digitsError);
          guessNumber();

          return;
        }

        guesses++;

        const [bullsCount, cowsCount] = bullsAndCowsCalculator(guess);

        if (bullsCount === 4) {
          terminal.write(congratsMessage);
          terminal.close();
        } else if (guesses >= maxGuesses) {
          terminal.write(`${gameOverMessage} ${numberToGuess}.\n`);
          terminal.close();
        } else {
          terminal.write(`BULLS: ${bullsCount}, COWS: ${cowsCount}\n`);
          guessNumber();
        }
      });
    };

    guessNumber();
  } else {
    terminal.close();
  }
});
