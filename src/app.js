'use strict';
const readline = require('readline');
const getRandomNum = require('./getRandomNum');
const calculateResult = require('./calculateResult');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const randomNumber = String(getRandomNum());

const game = () => {
  terminal.question('Write your number of four digits: ', (inputNumber) => {
    const result = calculateResult(inputNumber, randomNumber);

    // eslint-disable-next-line no-console
    console.log(result);

    const isWinning = result.includes('bulls 4');

    if (isWinning) {
      // eslint-disable-next-line no-console
      console.log(
        `Congrats, you are the winner! Chosen number is ${randomNumber}`
      );

      terminal.close();
    } else {
      game();
    }
  });
};

game();
