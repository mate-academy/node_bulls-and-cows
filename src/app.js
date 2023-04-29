'use strict';

const { calculateBullsAndCows } = require('./calculateBullsAndCows');
const { generateRandomFourDigit } = require('./generateDigits');
const { terminal } = require('./inputAndOutput');

const startGame = () => {
  terminal.question('\nNumber created, please guess it :)\n', (inputNum) => {
    const randomNum = generateRandomFourDigit();

    const result = calculateBullsAndCows(randomNum, inputNum);

    // eslint-disable-next-line no-console
    console.log(result);

    if (result === 'No bulls or cows') {
      startGame();
    } else {
      const animalsCount = result.split(' ').length;

      if (animalsCount === 1) {
        // eslint-disable-next-line no-console
        console.log(`You find ${animalsCount} animal`);
      } else {
        // eslint-disable-next-line no-console
        console.log(`You find ${animalsCount} animals`);
      }

      terminal.close();
    }
  });
};

startGame();
