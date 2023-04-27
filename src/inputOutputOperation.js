'use strict';

const readline = require('readline');
const { calculatingBullsAndCows } = require('./calculatingBullsAndCows')

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const inputOutputOperation = (randomNumber) => {
  terminal.question('Guess a number of 4 different digits: ', (guessedNumber) => {
    console.log(randomNumber);
    console.log(guessedNumber);

    const isDigit = guessedNumber.split('').every(el => isNaN(el) === false);
    const isLengthEqualFour = guessedNumber.length === randomNumber.length;
    const isDigitsUniq = [...new Set(guessedNumber.split(''))].length === guessedNumber.length;

    if (isDigit && isLengthEqualFour && isDigitsUniq) {
      const bulls = calculatingBullsAndCows(randomNumber, guessedNumber);

      if (bulls !== 4) {
        inputOutputOperation(randomNumber);
      } else {
        console.log('YOU WIN !!!');
        terminal.close();
      }
    } else {
      console.log('The entered number should have exactly 4 different digits');
      inputOutputOperation(randomNumber);
    }
  })
};

module.exports = { inputOutputOperation };
