'use strict';

const { calcBullAndCows } = require('./calcBullAndCows');
const { randomNumber } = require('./rundomNumber');
const { terminal } = require('./inOutTerminal');

const startGame = () => {
  const secretNum = randomNumber();

  const newGame = () => {
    terminal.question('Enter a number of 4 different digits:  ', (num) => {
      const { bulls, cows } = calcBullAndCows(secretNum, num);
      const digits = new Set([...num.split('')]);

      if (num.length !== 4 || digits.size !== 4) {
        // eslint-disable-next-line no-console
        console.log('Should be exactly different 4 digits!!!!');
        newGame();

        return;
      }

      if (bulls === 4) {
        // eslint-disable-next-line no-console
        console.log('Game over!');
        terminal.close();
      } else {
        // eslint-disable-next-line no-console
        console.log(`bulls: ${bulls}, cows: ${cows}!!! Try again)`);
        newGame();
      }
    });
  };

  newGame();
};

startGame();
