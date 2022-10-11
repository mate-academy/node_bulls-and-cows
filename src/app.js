'use strict';

const { randomNumbers } = require('./randomNumbers');
const { terminal } = require('./terminal');
const { cntBullsAndCows } = require('./cntBullsAndCows');

let attemptCnt = 1;

const userAnswer = () => {
  terminal.question('Please enter 4 different digits\n', (numFromUser) => {
    if (numFromUser === randomNumbers) {
      terminal.write(`You guessed the number ${randomNumbers} \n
        after ${attemptCnt} attempt(s)`);
      terminal.close();
    } else if (numFromUser.length === 4) {
      terminal.write(`attempt #${attemptCnt} \n`
       + cntBullsAndCows(randomNumbers, numFromUser) + '\n');
      attemptCnt += 1;
      userAnswer();
    } else {
      attemptCnt += 1;
      userAnswer();
    }
  });
};

userAnswer();
