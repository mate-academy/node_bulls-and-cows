/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { generateRandomNum } = require('./generate.js');
const { calculateBullCows } = require('./calculate.js');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

terminal.question('Please enter 4 nums ', (number) => {
  const compNum = generateRandomNum;
  let userNum = Number(number);
  const validInput
  = !isNaN(userNum)
    && userNum > 999
    && userNum < 10000;

  if (validInput) {
    console.log(
      calculateBullCows(userNum, generateRandomNum),
    );
  } else {
    console.log('Please enter valid number');
    terminal.close();
  }

  terminal.addListener('line', (newNumber) => {
    userNum = Number(newNumber);

    if (validInput) {
      if (userNum === compNum) {
        console.log(`You win, secret num was ${compNum}`);
        terminal.close();
      }

      console.log(
        calculateBullCows(userNum, compNum)
      );
    } else {
      console.log('Please enter valid number');
      terminal.close();
    }
  });
});
