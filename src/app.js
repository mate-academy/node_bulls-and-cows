'use strict';

const { randomNum } = require('./randomNumbers');
const { terminal } = require('./terminal');
const { cntBullsAndCows } = require('./cntBullsAndCows');

let attemptCnt = 1;

const userAnswer = () => {
  terminal.question('Please enter 4 different digits\n', (numFromUser) => {
    switch (true) {
      case numFromUser.length !== 4:
        attemptCnt += 1;
        userAnswer();
        break;

      case numFromUser === randomNum:
        terminal.write(
          `You guessed the number ${randomNum} after ${attemptCnt} attempt(s)`
        );
        terminal.close();
        break;

      default:
        terminal.write(
          cntBullsAndCows(randomNum, numFromUser) + '\n'
        );
        attemptCnt += 1;
        userAnswer();
        break;
    }
  });
};

userAnswer();
