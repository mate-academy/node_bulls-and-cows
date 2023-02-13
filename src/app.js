'use strict';

const { calcBullAndCows } = require('./helpers/calcBullAndCows');
const { randomNumber } = require('./helpers/rundomNumber');
const { terminal } = require('./helpers/inOutTerminal');

const startGame = () => {
  const secretNumber = randomNumber();

  const newGame = () => {
    terminal.question('Enter a number of 4 different digits:  ', (num) => {
      const { bulls, cows } = calcBullAndCows(secretNumber, num);
      const digits = new Set([...num.split('')]);

      if (num.length !== 4 || digits.size !== 4) {
        // eslint-disable-next-line no-console
        console.log('Should be exactly different 4 digits!!!!');
        newGame();

        return;
      }

      if (bulls === 4) {
        // eslint-disable-next-line no-console
        console.log('Congratulations, you\'ve won!!!');
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
