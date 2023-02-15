/* eslint-disable no-console,max-len */
'use strict';

const { terminal } = require('./helpers/readLine');
const { generateNum } = require('./helpers/generateNum');
const { calcBullsAndCows } = require('./helpers/CalcBullsAndCows');

const generatedNum = generateNum();

const start = () => {
  const newGame = () => {
    terminal.question('Guess the number ', (enteredNumber) => {
      const { bulls, cows } = calcBullsAndCows(generatedNum, enteredNumber);
      const digits = new Set([...enteredNumber.split('')]);

      const isNotANum = enteredNumber
        .split('')
        .some(isNaN);

      if (enteredNumber.length !== 4 || digits.size !== 4) {
        console.log('Should be exactly 4 different digits!');

        newGame();
      }

      if (isNotANum) {
        throw new Error('Must be only nums');
      }

      if (bulls === 4) {
        console.log('Congrats, you\'ve won!');

        terminal.close();
      } else {
        console.log(`bulls: ${bulls}, cows: ${cows}\n Try again`);
        newGame();
      }
    });
  };

  newGame();
};

start();
