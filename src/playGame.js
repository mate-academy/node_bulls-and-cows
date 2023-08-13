/* eslint-disable no-console */
'use strict';

const { generateRandomNumber } = require('./generateNumber.js');
const { countBullsAndCows } = require('./countBullsAndCows.js');
const { terminal } = require('./terminal.js');

const value = generateRandomNumber();
let count = 0;

function playGame() {
  count++;

  terminal.question('Guess the number ', (number) => {
    if (number.length !== 4) {
      console.log('It must be 4 numbers');
      playGame();

      return;
    }

    if (checkLetters(number)) {
      console.log('Letters are not allowed');
      playGame();

      return;
    }

    if (!checkDuplicate(number)) {
      console.log('Duplicate digits are not allowed');
      playGame();

      return;
    }

    if (number === value) {
      console.log(
        `Congratulations!!! You guess!!! It took you ${count} attempts`
      );
      terminal.close();

      return;
    }

    const [bull, cows] = countBullsAndCows(number, value);

    console.log(`${bull} bulls, ${cows} cows`);

    playGame();
  });
}

function checkDuplicate(str) {
  let newStr = '';

  for (let i = 0; i < str.length; i++) {
    if (!newStr.includes(str[i])) {
      newStr += str[i];
    }
  }

  return str === newStr;
};

function checkLetters(str) {
  const regExp = /[a-zA-Z]/;

  return regExp.test(str);
}

module.exports = {
  playGame,
};
