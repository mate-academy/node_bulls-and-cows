/* eslint-disable no-console */
'use strict';

const { generateRandomNumber } = require('./generator.js');
const { terminal } = require('./terminal.js');
const { check } = require('./checker.js');
const { isValidGuess } = require('./guessValidation.js');

const startGame = () => {
  const number = generateRandomNumber();

  const tryToGuess = () => {
    terminal.question('Enter a number with 4 different digits: ', (guess) => {
      const matches = check(number, guess);

      if (guess.length !== 4 || !isValidGuess(guess)) {
        console.log('Not valid number!');
        tryToGuess();

        return;
      }

      if (!matches.bull && !matches.cow) {
        console.log('Try again!');
        tryToGuess();

        return;
      }

      if (matches.bull === 4) {
        console.log('Congratulations!');
        terminal.close();

        return;
      }

      if (matches.bull !== 4) {
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
