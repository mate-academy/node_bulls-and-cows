'use strict';
/* eslint-disable no-console */

const { terminal } = require('./modules/terminal.js');
const { getRandomNumber } = require('./modules/randomGenerator.js');
const { calculateBulls } = require('./modules/calculateBulls.js');
const { calculateCows } = require('./modules/calculateCows.js');

const isNumberHasUniqDigits = (num) => {
  const digits = new Set(num);

  return num.length === digits.size;
};

const startGame = () => {
  const randomNum = getRandomNumber();

  const guessNumber = () => {
    terminal.question('Please, try to guess the number: ', (num) => {
      if (num.length !== 4) {
        console.log('The number should only has 4 digits, try again.\n');
        guessNumber();

        return;
      }

      if (!(isNumberHasUniqDigits(num))) {
        console.log('The number should has 4 unique digits, try again.\n');
        guessNumber();

        return;
      }

      const bullsCount = calculateBulls(randomNum, num);
      const cowsCount = calculateCows(randomNum, num);

      if (bullsCount === randomNum.length) {
        console.log('Congratulations, you won!');
        terminal.close();

        return;
      }

      /* eslint-disable-next-line max-len */
      console.log(`Nice try, You have bulls count: ${bullsCount}, cows count: ${cowsCount}. Try again.\n`);
      guessNumber();
    });
  };

  guessNumber();
};

startGame();
