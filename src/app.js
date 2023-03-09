/* eslint-disable no-console */
'use strict';

const readline = require('readline');

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const generateRandomNumber = () => {
  let result = '';

  for (let i = 0; result.length < 4; i++) {
    const digit = Math.floor(Math.random() * 10);

    if (!result.includes.digit) {
      result += digit;
    }
  }

  return result;
};

const randomNumber = generateRandomNumber();
let cows = 0;
let bulls = 0;

const ask = () => {
  input.question('Guess a 4-digit number: ', (answer) => {
    if (answer.length !== 4) {
      console.log('Please make sure the number you enter is 4 digits long');

      return ask();
    }

    const answerArr = answer.split('');
    const numbersAreUnique = answerArr.every(
      (n, i) => answerArr.lastIndexOf(n) === i,
    );

    if (!numbersAreUnique) {
      console.log('Digits should be unique');
    } else {
      answerArr.forEach((n, i) => {
        if (answer[i] === randomNumber[i]) {
          bulls++;
        } else if (randomNumber.includes(answer[i])) {
          cows++;
        }
      });
    }

    if (answer === randomNumber) {
      console.log('You won!');

      input.close();
    } else {
      console.log(`${bulls} bulls and ${cows} cows`);

      bulls = 0;
      cows = 0;

      ask();
    }
  });
};

ask();
