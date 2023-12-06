/* eslint-disable no-console */
'use strict';

const { generateNumber } = require('./generateNumber.js');
const readline = require('readline');

const terminal = readline.createInterface(
  process.stdin,
  process.stdout,
);

const number = generateNumber();

const game = () => {
  let bulls = 0;
  let cows = 0;

  terminal.question('Enter a number of 4 digits: ', (answer) => {
    const numberArr = number.split('');
    const answerArr = answer.split('');

    if (answer.length !== 4 || isNaN(+answer)) {
      console.log('Not a valid value, must be entered a number of 4 digit!');
      game();

      return;
    }

    numberArr.forEach((num, index) => {
      if (numberArr[index] === answerArr[index]) {
        bulls++;
      }

      if (answer.includes(num)
        && numberArr[index] !== answerArr[index]) {
        cows++;
      }
    });
    console.log(`bulls: ${bulls}`, `cows: ${cows}`);

    if (bulls !== 4) {
      game();
    } else {
      console.log('Congratulations, you won!');
      terminal.close();
    }
  });
};

game();
