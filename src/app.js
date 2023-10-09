/* eslint-disable max-len */
/* eslint-disable no-console */
'use strict';

const { terminal } = require('./terminal');
const { getRandomNums } = require('./getRandomNums');
const { getBullsAndCows } = require('./getBullsAndCows');

const correctAnswer = getRandomNums();

console.log('Welcome to the Bulls&Cows game');
console.log('Rules: you must guess a 4 digit number, using only digits from 1 - 9');

function startGame() {
  terminal.question('Try to guess the number: ', (userInput) => {
    if (userInput === correctAnswer) {
      console.log('------------------------------');
      console.log('you won, love!');
      console.log(`${userInput} was correct answer`);
      console.log('------------------------------');
      terminal.close();

      return;
    }

    if (isNaN(+userInput) || userInput.length !== 4) {
      console.log('------------------------------');
      console.log('I expect a 4 digit num, love');
      console.log('fix your answer and try again');
      console.log('------------------------------');

      return startGame();
    }

    const { bulls, cows } = getBullsAndCows(correctAnswer, userInput);

    console.log('------------------------------');
    console.log(`Bulls: ${bulls}; Cows: ${cows}.`);
    console.log('------------------------------');

    return startGame();
  });
};

startGame();
