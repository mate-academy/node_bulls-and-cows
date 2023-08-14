'use strict';

const { getRandomDigits } = require('./generateRandom.js');
const { terminal } = require('./terminal.js');
const { check } = require('./cheacker.js');
const { isValidGuess } = require('./guessValidation.js');

const startGame = () => {
  const number = getRandomDigits();

  const tryToGuess = () => {
    terminal.question('Enter a number with 4 different digits: ', (guess) => {
      const matches = check(number, guess);

      if (guess.length !== 4 || !isValidGuess(guess)) {
        // eslint-disable-next-line no-console
        console.log('Not valid number!');
        tryToGuess();

        return;
      }

      if (!matches.bull && !matches.cow) {
        // eslint-disable-next-line no-console
        console.log('Try again!');
        tryToGuess();

        return;
      }

      if (matches.bull === 4) {
        // eslint-disable-next-line no-console
        console.log('Congratulations!');
        terminal.close();

        return;
      }

      if (matches.bull !== 4) {
        // eslint-disable-next-line no-console
        console.log(`
        Nice try!
        You have ${matches.bull} bulls and ${matches.cow} cows
        `);
        tryToGuess();
      }
    });
  };

  tryToGuess();
};

startGame();
